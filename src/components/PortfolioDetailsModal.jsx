import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { profilePicture } from "../assets/images";
import { verified } from "../assets/icons";
import Overlay from "./Overlay";
import UserModificationConfirmation from "./UserModificationConfirmation";
import { Link } from "react-router-dom";

const PortfolioDetailsModal = ({
  onClose,
  selectedUser,
  handleUiToBeDisplayed,
}) => {
  // State for user details modal visibility
  const [isOpen, setIsOpen] = useState(false);

  //   Function to close user modal
  const handleClose = () => {
    setIsOpen(false);
  };
  //   End of function to close user modal

  return (
    <div className="w-[500px] max-lg:w-[90%] max-lg:max-w-[400px] min-h-[500px]  h-[593px] max-2xl:h-[474.4px] max-h-[600px] bg-white z-[100] overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px]">
      <div className="flex justify-between">
        <div className="text-mainBlue leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[700] cursor-pointer hover:underline">
          Export CSV
        </div>
        <Icon
          onClick={onClose}
          icon="ic:round-close"
          className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center">
        <div className="text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor ">
          User Details
        </div>
        <div className="flex items-center px-2 justify-center text-silverTextColor text-[16px] max-2xl:text-[12.8px] font-[400] border border-borderColor min-w-[120px] h-[36px] rounded-[200px] max-2xl:min-w-[96px] max-2xl:h-[28.8px]">
          Portfolio ID: {selectedUser?.portfolioId}
        </div>
        <div className="text-[16px] max-2xl:text-[12.8px] font-[600] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor ">
          John Doe
        </div>
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>

      <div className="bg-backgroundBlueColor justify-between p-[16px] flex flex-col gap-[24px] flex-1 rounded-[8px] max-2xl:rounded-[6.4px] max-2xl:gap-[19.2px]">
        <div className="flex justify-between">
          <div className="flex flex-col  w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Total Robovisor Balance
            </div>
            <div className="text-[24px] max-2xl:text-[19.2px] font-[700] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.totalValue}
            </div>
          </div>
          <div className="flex flex-col  w-[40%] items-end">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              MEMBER SINCE
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              May, 2023
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col  w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Total Invested
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              N1,000,000.00
            </div>
          </div>
          <div className="flex flex-col  w-[40%] items-end ">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Total Returns
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              N310,000.14{" "}
              <span className="ml-[16px] text-[16px] max-2xl:text-[12.8px] font-[600] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px] ">
                12.9%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col  w-[40%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              PORTFOLIO ID
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              2245
            </div>
          </div>
          <Link to={"/users/portfolio"}>
            <div className="px-[16px] rounded-[8px] font-bold text-white py-[8px] text-[16px] bg-mainBlue leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]">
              View Fiew Portfolio
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsModal;
