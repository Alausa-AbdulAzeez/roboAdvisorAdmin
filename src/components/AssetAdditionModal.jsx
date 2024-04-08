import { Icon } from "@iconify/react";
import React from "react";
import AssetInput from "./AssetInput";

const AssetAdditionModal = ({ onClose, selectedUser, changeUi }) => {
  return (
    <div className="z-[101] w-[565px] h-fit max-h-[90%]  bg-white overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px] max-2xl:w-[452px] max-2xl:h-fit">
      <div className="flex justify-between items-center">
        <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
          <Icon
            onClick={() => changeUi("assetUpdateModal")}
            icon="mynaui:arrow-left"
            className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
          />
          <div className="text-[16px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            USA Stocks
          </div>
        </div>
        <Icon
          onClick={onClose}
          icon="ic:round-close"
          className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
        />
      </div>
      <div className="text-center text-blackTextColor  text-[20px]  font-[600] leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[16px] ">
        Add Assets
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>
      <div className="text-center text-blackTextColor  text-[14px]  font-[400] leading-[18px] max-2xl:leading-[14.4px] max-2xl:text-[11.2px] ">
        USA Stocks
      </div>
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
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
        <AssetInput iconType={"add"} />
      </div>
    </div>
  );
};

export default AssetAdditionModal;
