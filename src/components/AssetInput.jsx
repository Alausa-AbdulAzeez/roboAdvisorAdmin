import { Icon } from "@iconify/react";
import React from "react";

const AssetInput = ({ iconType }) => {
  return (
    <div className="w-[100%] max-w-[600px] flex justify-between items-center">
      <div className="text-[16px] font-[400] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
        Apple Inc. (AAPL)
      </div>
      <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px]">
        <input
          type="text"
          className="px-[8px] h-[36px] w-[56px] rounded-[4px] text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px] focus:shadow-activeInputBlueBoxShadow border outline outline-transparent focus:border-mainBlue max-2xl:px-[6.4px] max-2xl:h-[28.8px] max-2xl:w-[44.8px]"
        />
        <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
          Shares
        </div>
      </div>
      <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px]">
        <input
          type="text"
          className="px-[8px]  h-[36px] w-[96px] rounded-[4px] text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px] focus:shadow-activeInputBlueBoxShadow border outline outline-transparent focus:border-mainBlue max-2xl:px-[6.4px] max-2xl:h-[28.8px] max-2xl:w-[76.8px]"
        />
        <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
          Naira
        </div>
      </div>
      {iconType === "add" ? (
        <div className="w-[16px] flex items-center justify-center cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px]">
          <Icon
            icon="zondicons:add-outline"
            className={` text-mainBlue w-full h-full`}
          />
        </div>
      ) : (
        <div className="w-[16px] flex items-center justify-center cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px]">
          <Icon
            icon="ic:round-close"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
      )}
    </div>
  );
};

export default AssetInput;
