import React from "react";
import PercentageIndicator from "./PercentageIndicator";

const MoreDetailsCard = ({ data }) => {
  const {
    title,
    timeFrame,
    mainValue,
    indicatorType,
    indicatorText,
    changePercentage,
    img,
  } = data;

  return (
    <div className="bg-white overflow-y-hidden flex flex-col gap-[24px] max-2xl:gap-[19.2px] border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] h-[163px] max-2xl:h-[131px]">
      <div className="flex justify-between items-center">
        <div className="text-[14px] max-2xl:text-[11.2px] font-[400] uppercase leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor">
          {title}
        </div>
        <div className="font-[400] text-[12px] max-2xl:text-[9.6px] leading-[15px] max-2xl:leading-none text-silverTextColor">
          {timeFrame}
        </div>
      </div>
      <div className="flex flex-col gap-[8px] max-2xl:gap-[6.4px] relative">
        <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
          <div className="text-[32px] max-2xl:text-[25.6px] text-blackTextColor font-[700] leading-[40px] max-2xl:leading-[32px]">
            {mainValue}
          </div>
          <PercentageIndicator type={indicatorType} text={indicatorText} />
        </div>
        <div className="font-[400] text-[14px] max-2xl:text-[9.6px] leading-[18px] max-2xl:leading-[14.4px] text-silverTextColor">
          {changePercentage}
        </div>
        <img
          src={img}
          alt=""
          className="w-[80px] max-2xl:w-[64px] h-[80px] max-2xl:h-[64px] absolute right-[-10px] bottom-[-45%] max-2xl:bottom-[-45%]"
        />
      </div>
    </div>
  );
};

export default MoreDetailsCard;
