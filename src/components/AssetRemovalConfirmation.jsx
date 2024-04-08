import { Icon } from "@iconify/react";
import React from "react";

const AssetRemovalConfirmation = ({ onClose, selectedUser }) => {
  const { status } = selectedUser;

  return (
    <div className="z-[101] w-[565px] h-fit  bg-white overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px] max-2xl:w-[452px] max-2xl:h-fit">
      <div className="flex justify-end">
        <Icon
          onClick={onClose}
          icon="ic:round-close"
          className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
        />
      </div>
      <div className="text-center text-blackTextColor  text-[20px]  font-[600] leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[16px] ">
        Are you sure you want to{" "}
        {(status === "active" && "deactivate ") ||
          (status === "inactive" && "reactivate ")}
        this user?
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>
      <div className="text-[16px] text-center font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[12.8px] ">
        To continue write the reason behind the decision to{" "}
        {(status === "active" && "deactivate ") ||
          (status === "inactive" && "reactivate ")}{" "}
        this user’s account.
      </div>
      <div className="h-[60px] w-full p-[24px]  border-b border-b-[#616161]  max-2xl:h-[48px]  max-2xl:p-[19.2px]">
        <input
          type="text"
          className="w-full outline-none border-none text-blackTextColor text-[16px] font-[400] leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[12.8px] "
          placeholder="Write your reason here..."
        />
      </div>
      <div className="flex gap-[32px]">
        <div
          className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
          onClick={onClose}
        >
          Cancel
        </div>
        <div
          className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
          onClick={onClose}
        >
          {(status === "active" && "Deactivate ") ||
            (status === "inactive" && "Reactivate ")}{" "}
          user
        </div>
      </div>
    </div>
  );
};

export default AssetRemovalConfirmation;
