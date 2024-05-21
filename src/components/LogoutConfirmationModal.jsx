import { Icon } from "@iconify/react";
import React from "react";

const LogoutConfirmationModal = ({ onClose, logout }) => {
  return (
    <div className="z-[101] w-[565px] h-fit  max-h-[90%] max-lg:w-[90%] max-lg:max-w-[420px] bg-white overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px] max-2xl:w-[452px] max-2xl:h-fit">
      <div className="flex justify-end">
        <Icon
          onClick={onClose}
          icon="ic:round-close"
          className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
        />
      </div>
      <div className="text-center text-blackTextColor  text-[20px]  font-[600] leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[16px] ">
        Are you sure you want to logout?
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>

      <div className="flex gap-[32px]">
        <div
          className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] hover:bg-[#e6e6e6] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
          onClick={onClose}
        >
          Cancel
        </div>
        <div
          className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] hover:bg-[#e6e6e6] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
          onClick={logout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
