import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { arrowDown, deposit, withdrawal } from "../assets/icons";
import ReactPaginate from "react-paginate";
import {
  TableActiveStatusIndicator,
  TableInActiveStatusIndicator,
  TablePendingStatusIndicator,
} from "./TableStatusIndicator";
import Overlay from "./Overlay";
import TransactionDetailsModal from "./TransactionDetailsModal";
import ActivitiesDetailsModal from "./ActivityDetailsModal";

const ActivitiesTable = ({ tableHeaders, title, items, user }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  //   Number of items displayed on the table
  const itemsPerPage = 10;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  //   Ref linked to the pop up element
  const popupRef = useRef(null);

  //   Selected Activity
  const [selectedActivity, setSelectedActivity] = useState(null);

  //   Index of the row clicked
  const [rowIndex, setRowIndex] = useState(null);

  // State of Activity details modal
  const [isOpen, setIsOpen] = useState(false);

  // State for user modification modal visibility
  const [isModificationModalOpen, setisModificationModalOpen] = useState(false);

  /**
   * State to control the visibility of the popup for each row.
   * @type {Array<boolean>}
   */
  const [showPopup, setShowPopup] = useState(
    Array(currentItems.length).fill(false)
  );

  /**
   * Toggles the visibility of the popup for a specific row.
   * @param {number} index - The index of the row.
   */
  const togglePopup = (index) => {
    // Create a copy of the showPopup state array and initialize all elements to false
    const updatedShowPopup = Array(currentItems.length).fill(false);

    // Set the value of the clicked row to the opposite of its current value
    updatedShowPopup[index] = !updatedShowPopup[index];

    // Update the showPopup state with the modified array
    setShowPopup(updatedShowPopup);
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // Function to set row index and selected user to the last clicked row
  const handleSetRowIndexAndActivity = (index, activity) => {
    setSelectedActivity(activity);
    setRowIndex(index);
  };
  // End of function to set row index and selected user to the last clicked row

  // Function to close user details modal
  const handleClose = () => {
    setIsOpen(false);
  };
  // End of function to close user details modal

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("popup")) {
        togglePopup(rowIndex);
      } else {
        // Check if the click target is outside of the popup
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setShowPopup(Array(currentItems.length).fill(false));
        }
      }
    };

    // Add event listener to handle clicks outside of the popup
    document.addEventListener("click", handleClickOutside);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [rowIndex]);

  return (
    <>
      <Overlay isOpen={isOpen} onClose={handleClose}>
        <ActivitiesDetailsModal
          onClose={handleClose}
          title={"User Activity Log Details"}
          selectedActivity={selectedActivity}
          userType={"user"}
          type={"user"}
        />
      </Overlay>

      <div className="p-[32px] max-2xl:p-[25.6px] max-lg:px-[16px]">
        <div className="flex mb-[32px] max-2xl:mb-[25.6px] gap-[8px] max-2xl:gap-[6.4px] h-fit items-center ">
          <div className="cursor-pointer font-[600] leading-[28px] text-silverTextColor text-[20px] max-2xl:text-[16px]">
            Activity Log
          </div>{" "}
          <div className="w-[16px]  h-[16px] max-2xl:h-[12.8px] flex items-center justify-center ">
            <Icon
              icon="ep:arrow-right-bold"
              className={` text-blackTextColor w-full h-full`}
            />
          </div>
          <div className=" cursor-pointer font-[600] leading-[28px] text-blackTextColor text-[20px] max-2xl:text-[16px] max-2xl:leading-[22.4px]  ">
            {user} Activity Log
          </div>
        </div>
        <div className="w-[100%]  flex flex-col bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] h-fit overflow-hidden relative">
          <div className="left-[-24px] max-2xl:left-[-19.2px]  w-[calc(100%+48px)] max-2xl:w-[calc(100%+38.4px)] max-lg:w-[calc(100%+42px)]  h-[31px] bg-[#005AE01A] absolute top-[95px] max-2xl:top-[75px] max-lg:top-[195px]"></div>
          <div className="w-full hidden max-lg:flex max-lg:flex-col max-lg:gap-[24px] justify-between">
            <div className="flex justify-between">
              <div className="hidden max-lg:block capitalize text-[20px] max-lg:text-[16px] font-[600] leading-[28px] text-blackTextColor">
                {title}
              </div>
              <div className="text-mainBlue hidden max-lg:block leading-[28px]  text-[16px] max-lg:text-[14px]  font-[700] cursor-pointer hover:underline">
                Export CSV
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-full h-[36px] gap-[8px]  items-center  border-b-[0.01px] border-b-silverTextColor">
                <Icon
                  icon="flowbite:search-outline"
                  className={`w-[24px] h-[24px] text-blackTextColor`}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none text-silverTextColor text-[16px]  leading-[28px] max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="relative w-[80px]  h-[36px] flex gap-[8px] cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] px-[8px]">
                <div className="text-[16px]  font-[400] leading-[28px] text-blackTextColor">
                  Filter
                </div>
                <img
                  src={arrowDown}
                  alt="arrowDonw"
                  className="max-2xl:w-[12.8px] max-2xl:h-[12.8px]"
                />
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
                activeClassName={"activePage"}
                className="flex gap-4 text-silverTextColor text-[16px] leading-[28px]"
              />
            </div>
          </div>
          <div className="flex justify-between max-lg:flex-col max-lg:gap-[24px] ">
            <div className="max-lg:hidden capitalize text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] max-2xl:leading-[0px] text-blackTextColor max-2xl:mt-[12px]">
              {title}
            </div>
            <div className="max-lg:hidden flex items-center gap-[24px] max-2xl:gap-[19.2px]">
              <div className="text-mainBlue leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[700] cursor-pointer hover:underline">
                Export CSV
              </div>
              <div className="flex w-[236px] h-[36px] gap-[8px] max-2xl:h-[28.8px] max-2xl:gap-[6.4px] items-center  border-b-[0.01px] border-b-silverTextColor">
                <Icon
                  icon="flowbite:search-outline"
                  className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] text-blackTextColor`}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none text-silverTextColor text-[16px]  leading-[28px] max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]"
                />
              </div>
              <div className="relative w-[80px]  h-[36px] flex gap-[8px] max-2xl:gap-[6.4px] max-2xl:w-[64px] max-2xl:h-[28.8px] cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px]   px-[8px] max-2xl:px-[6.4px]">
                <div className="text-[16px] max-2xl:text-[12.8px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor">
                  Filter
                </div>
                <img
                  src={arrowDown}
                  alt="arrowDonw"
                  className="max-2xl:w-[12.8px] max-2xl:h-[12.8px]"
                />
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
                activeClassName={"activePage"}
                className="flex gap-4 text-silverTextColor text-[16px] max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px]"
              />
            </div>
          </div>

          <div className="w-full max-lg:overflow-x-auto overflow-x-hidden mt-[16px] ">
            <table className="border-separate w-full border-spacing-y-[24px] max-2xl:border-spacing-y-[19.2px] relative">
              <tr>
                {tableHeaders?.map((tableHeader, index) => {
                  return (
                    <th
                      key={index}
                      className={`${
                        (tableHeader === "Description" && "max-sm:hidden") ||
                        (tableHeader === "Timestamp" && "max-md:hidden") ||
                        (tableHeader === "IP Address" && "max-lg:hidden")
                      } 
                      text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left`}
                    >
                      <div
                        className={`flex gap-[8px] items-center text-nowrap overflow-hidden text-ellipsis ${
                          (tableHeader === "Admin ID" ||
                            tableHeader === "User ID") &&
                          "max-sm:mx-3 "
                        }  ${
                          tableHeader === "Type" &&
                          "max-[400px]:justify-center max-lg:justify-start "
                        } `}
                      >
                        <div
                          className={`${tableHeader === "more" && "opacity-0"}`}
                        >
                          {tableHeader}
                        </div>
                        {tableHeader !== "more" && (
                          <Icon
                            icon="f7:sort-up"
                            className={`w-[16px] max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-silverTextColor`}
                          />
                        )}
                      </div>

                      <span></span>
                    </th>
                  );
                })}
              </tr>
              {currentItems &&
                currentItems.map((item, index) => {
                  const {
                    logId,
                    adminId,
                    userId,
                    activityType,
                    description,
                    timeStamp,
                    ipAddress,
                  } = item;

                  return (
                    <tr>
                      <td className="leading-[28px] text-nowrap max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor">
                        {logId}
                      </td>
                      <td className="max-sm:px-3  leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                        {user === "Admin" ? adminId : userId}
                      </td>
                      <td className=" leading-[28px]  max-lg:text-nowrap max-lg:overflow-hidden max-lg:text-ellipsis max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor max-md:text-left">
                        {activityType}
                      </td>
                      <td className="max-sm:hidden leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                        {description}
                      </td>
                      <td className="max-md:hidden leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                        {timeStamp}
                      </td>

                      <td className="max-lg:hidden leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                        {ipAddress}
                      </td>
                      <td className="relative">
                        <Icon
                          // Anytime this is clicked, show the pop-up beside it
                          icon="uiw:more"
                          className={`popup text-right ml-auto w-[16px] max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-[#161616] cursor-pointer`}
                          onClick={() =>
                            handleSetRowIndexAndActivity(index, item)
                          }
                        />
                        {showPopup[index] && (
                          <div
                            ref={popupRef}
                            className="z-[2] flex flex-col absolute top-0 right-[0px] bg-[#F8F8F8]  shadow-md w-[192px] h-[44px] rounded-[8px] max-2xl:w-[153.6px] max-2xl:h-[35.2px]  "
                          >
                            <div
                              className="flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4] px-[16px] text-[16px] leading-[28px] rounded-[8px] max-2xl:px-[12.8px] max-2xl:text-[12.8px] max-2xl:leading-[28px] max-2xl:rounded-[8px] "
                              onClick={() => setIsOpen(true)}
                            >
                              View Details
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesTable;
