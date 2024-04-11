import { Icon } from "@iconify/react";
import React, { useState } from "react";
import AssetInput from "./AssetInput";

const AssetUpdateModal = ({ onClose, selectedUser, changeUi }) => {
  // const { status } = selectedUser;
  const [isSaveChangesBtnActive, setIsSaveChangesBtnActive] = useState(false);

  setTimeout(() => {
    setIsSaveChangesBtnActive((prev) => !prev);
  }, 3000);

  return (
    <div className="z-[101] w-[565px] max-lg:w-[90%] max-lg:max-w-[420px] h-fit  bg-white overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px] max-2xl:w-[452px] max-2xl:h-fit">
      <div className="flex justify-end">
        <Icon
          onClick={onClose}
          icon="ic:round-close"
          className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
        />
      </div>
      <div className="text-center text-blackTextColor  text-[20px]  font-[600] leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[16px] ">
        USA Stocks
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>
      <div className="w-full flex justify-end ">
        <div className="flex gap-[8px] max-2xl:gap-[6.4px]">
          <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            Balance:
          </div>
          <div className="text-[16px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            0.0
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[24px] max-2xl:gap-[19.2px]">
        <AssetInput />
        <AssetInput />
        <AssetInput />
      </div>
      <div
        className="px-[16px] mx-auto flex w-fit items-center gap-[16px] rounded-[8px] font-[400] py-[8px] text-[16px] bg-none hover:bg-backgroundBlueColor text-mainBlue leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px] max-2xl:gap-[12.8px]"
        onClick={() => changeUi("assetAdditionModal")}
      >
        <div className="w-[16px] h-[16px] max-2xl:w-[12.8px] max-2xl:h-[12.8px] cursor-pointer">
          <Icon
            icon="zondicons:add-outline"
            className={` text-mainBlue w-full h-full`}
          />
        </div>
        <div className="">Add Asset</div>
      </div>
      <div className="flex gap-[32px]">
        <div
          className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] text-center text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
          onClick={onClose}
        >
          Cancel
        </div>
        {isSaveChangesBtnActive && (
          <div
            className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-borderColor text-center text-[#1E1E1E99] leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
            onClick={onClose}
          >
            Save Changes
          </div>
        )}
        {!isSaveChangesBtnActive && (
          <div
            className="px-[16px] flex-1 rounded-[8px] font-bold py-[8px] text-[16px] bg-mainBlue text-center text-white leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
            onClick={onClose}
          >
            Save Changes
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetUpdateModal;
