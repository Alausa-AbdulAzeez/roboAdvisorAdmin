import React, { useState } from "react";
import Portfolio from "./Portfolio";
import { Icon } from "@iconify/react";
import TableWithCollapsableRow from "./TableWithCollapsableRow";
import { folderLibrary } from "../assets/icons";
import Overlay from "./Overlay";
import GoalPerformanceModal from "./GoalPerformanceModal";

const GoalPerformance = ({ handleUiToBeDisplayed }) => {
  // State for user details modal visibility
  const [isOpen, setIsOpen] = useState(false);

  //   Function to close user modal
  const handleClose = () => {
    setIsOpen(false);
  };
  //   End of function to close user modal

  // Variable that determines the button been displayed
  const [compositionStage, setCompositionStage] = useState("editComposition");

  // Function to handle the operation to be carried out when the buttons are clicked

  const handleBtnClick = (type) => {
    if (type === "editComposition") {
      setCompositionStage("preUpdateCompositon");
    }
    if (type === "preUpdateCompositon") {
      setCompositionStage("editComposition");
    }
  };

  // End of function to handle the operation to be carried out when the buttons are clicked

  return (
    <div className="p-[32px] max-2xl:p-[25.6px] pt-[26px] max-2xl:pt-[20.8px]">
      <Overlay isOpen={isOpen} onClose={handleClose}>
        <GoalPerformanceModal onClose={handleClose} />
      </Overlay>
      <div className="flex gap-[8px] max-2xl:gap-[6.4px] h-fit items-center ">
        <div className="cursor-pointer font-[600] leading-[28px] text-silverTextColor text-[20px] max-2xl:text-[16px]">
          Users
        </div>{" "}
        <div className="w-[16px]  h-[16px] max-2xl:h-[12.8px] flex items-center justify-center ">
          <Icon
            icon="ep:arrow-right-bold"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
        <div className=" cursor-pointer font-[600] leading-[28px] text-blackTextColor text-[20px] max-2xl:text-[16px] max-2xl:leading-[22.4px]  ">
          User Details
        </div>
        <div className="w-[16px]  h-[16px] max-2xl:h-[12.8px] flex items-center justify-center ">
          <Icon
            icon="ep:arrow-right-bold"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
        <div className="cursor-pointer font-[600] leading-[28px] text-blackTextColor text-[20px] max-2xl:text-[16px] max-2xl:leading-[22.4px]">
          User Portfolio
        </div>
        <div className="w-[16px]  h-[16px] max-2xl:h-[12.8px] flex items-center justify-center ">
          <Icon
            icon="ep:arrow-right-bold"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
        <div className="cursor-pointer font-[600] leading-[28px] text-blackTextColor text-[20px] max-2xl:text-[16px] max-2xl:leading-[22.4px]">
          Goal Performance
        </div>
      </div>
      <div className="flex flex-col gap-[8px] max-2xl:gap-[6.4px] ">
        <div className="flex flex-col gap-[32px] max-2xl:gap-[25.6px]">
          <Portfolio
            type={"On Course"}
            handleUiToBeDisplayed={handleUiToBeDisplayed}
          />
          <div className="w-full flex flex-col bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] h-fit overflow-auto max-md:w-full">
            <div className="w-full flex justify-end">
              {compositionStage === "editComposition" && (
                <div
                  className="px-[16px] w-fit rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
                  onClick={() => handleBtnClick("editComposition")}
                >
                  Edit Composition
                </div>
              )}
              {compositionStage === "preUpdateCompositon" && (
                <div className="flex gap-[32px] max-2xl:gap-[25.6px]">
                  <div
                    className="px-[16px] w-fit rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
                    onClick={() => handleBtnClick("preUpdateCompositon")}
                  >
                    Cancel
                  </div>
                  <div className="px-[16px] w-fit rounded-[8px] font-bold py-[8px] text-[16px] bg-borderColor text-center text-[#1E1E1E99] leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]">
                    Update
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-[24px] max-2xl:mt-[19.2px]">
              <div className="flex items-center justify-center gap-[8px] max-2xl:gap-[6.4px] ">
                <div className="text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] text-blackTextColor">
                  Portfolio Composition
                </div>
                <img
                  src={folderLibrary}
                  alt="Portfolio Composition"
                  className="w-[24px] h-[24px] max-2xl:w-[19.2px] max-2xl:h-[19.2px]"
                />
              </div>
              <div className="flex gap-[8px] max-2xl:gap-[6.4px]">
                <div className="text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] text-silverTextColor max-2xl:leading-[22.4px] ">
                  Total Value:
                </div>
                <div className=" text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] text-blackTextColor max-2xl:leading-[22.4px]  ">
                  N1,310,000.14
                </div>
              </div>
            </div>
            <TableWithCollapsableRow
              compositionStage={compositionStage}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalPerformance;