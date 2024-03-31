import React from "react";
import { accountIcon, arrowDown, bellIcon } from "../assets/icons";

const Topbar = ({ title }) => {
  return (
    <div className="z-[2]  h-[76px] max-2xl:h-[60.8px] w-full border border-[#D4D4D4] bg-white flex items-center justify-between px-[32px] max-2xl:px-[25.6px] sticky top-0">
      <div className="text-blackTextColor text-[32px] max-2xl:text-[25.6px] leading-[40px] max-2xl:leading-[32px] font-[700]">
        {title}
      </div>
      <div className="flex gap-[32px] max-2xl:gap-[25.6px] cursor-pointer">
        <img
          src={bellIcon}
          alt="notifications"
          className="cursor-pointer max-2xl:h-[25.6px] w-[25.6px]"
        />
        <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
          <img
            src={accountIcon}
            alt="account"
            className="max-2xl:h-[19.2px] max-2xl:w-[19.2px]"
          />
          <div className="font-[400] text-[16px] max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] text-nowrap">
            Bonmichael Udeh
          </div>
          <img
            src={arrowDown}
            alt="arrowDonw"
            className="max-2xl:h-[19.2px] max-2xl:w-[19.2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
