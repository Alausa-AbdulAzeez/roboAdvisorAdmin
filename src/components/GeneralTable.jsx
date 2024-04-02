import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { arrowDown } from "../assets/icons";
import ReactPaginate from "react-paginate";
import {
  TableActiveStatusIndicator,
  TableInActiveStatusIndicator,
} from "./TableStatusIndicator";

const GeneralTable = ({ tableHeaders, title, items }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="w-[100%] flex flex-col bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] h-fit overflow-auto">
      <div className="flex justify-between ">
        {/* <div className="flex justify-between h-[36px] max-2xl:h-[28.8px] "> */}
        <div className="capitalize text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] max-2xl:leading-[0px] text-blackTextColor max-2xl:mt-[12px]">
          {title}
        </div>
        <div className="flex items-center gap-[24px] max-2xl:gap-[19.2px]">
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
          <div className="relative w-[80px]  h-[36px] flex gap-[8px] max-2xl:gap-[6.4px] max-2xl:w-[64px] max-2xl:h-[28.8px] cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px]">
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

      <table className="border-separate border-spacing-y-[24px] max-2xl:border-spacing-y-[19.2px] relative">
        <div className="left-[-24px] max-2xl:left-[-19.2px]  w-[calc(100%+48px)] max-2xl:w-[calc(100%+38.4px)]  h-[31px] bg-[#005AE01A] absolute top-[40px] max-2xl:top-[30px]"></div>
        <tr>
          {tableHeaders?.map((tableHeader) => {
            return (
              <th className="text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
                <div className="flex gap-[8px] items-center">
                  <div className={`${tableHeader === "more" && "opacity-0"}`}>
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
          currentItems.map((item) => (
            <tr>
              <td className="leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor">
                John Doe
              </td>
              <td className="leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                2268
              </td>
              <td className="leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor">
                johndoe@gmail.com
              </td>
              <td className="leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                1hr ago
              </td>
              <td className="leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
                30/01/2024
              </td>
              <td>
                {item === 1 || item === 3 || item === 9 ? (
                  <TableActiveStatusIndicator />
                ) : (
                  <TableInActiveStatusIndicator />
                )}
              </td>
              <td className=" ">
                <Icon
                  icon="uiw:more"
                  className={` text-right ml-auto w-[16px] max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-[#161616] cursor-pointer`}
                />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default GeneralTable;
