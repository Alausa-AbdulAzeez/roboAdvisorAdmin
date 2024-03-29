import React from "react";
import { accountIcon, arrowDown, bellIcon } from "../assets/icons";

const Topbar = ({ title }) => {
  return (
    <div className="zoom z-[2]  h-[76px] w-full border border-[#D4D4D4] bg-white flex items-center justify-between px-[32px] sticky top-0">
      <div className="text-blackTextColor text-[32px] leading-[40px] font-[700]">
        {title}
      </div>
      <div className="flex gap-[32px] cursor-pointer">
        <img src={bellIcon} alt="notifications" className="cursor-pointer" />
        <div className="flex gap-[6px] items-center">
          <img src={accountIcon} alt="account" />
          <div className="font-[400] text-[16px] leading-[28px] text-nowrap">
            Bonmichael Udeh
          </div>
          <img src={arrowDown} alt="arrowDonw" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
