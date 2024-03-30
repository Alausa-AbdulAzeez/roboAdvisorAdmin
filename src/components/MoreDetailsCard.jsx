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
    <div className="bg-white overflow-y-hidden flex flex-col gap-[24px] border border-borderColor rounded-[8px] p-[24px] h-[163px]">
      <div className="flex justify-between items-center">
        <div className="text-[14px] font-[400] uppercase leading-[28px] text-blackTextColor">
          {title}
        </div>
        <div className="font-[400] text-[12px] leading-[15px] text-silverTextColor">
          {timeFrame}
        </div>
      </div>
      <div className="flex flex-col gap-[8px] relative">
        <div className="flex gap-[8px] items-center">
          <div className="text-[24px] text-blackTextColor font-[700] leading-[40px]">
            {mainValue}
          </div>
          <PercentageIndicator type={indicatorType} text={indicatorText} />
        </div>
        <div className="font-[400] text-[14px] leading-[18px] text-silverTextColor">
          {changePercentage}
        </div>
        <img
          src={img}
          alt=""
          className="w-[80px] h-[80px] absolute right-[-10px] bottom-[-45%]"
        />
      </div>
    </div>
  );
};

export default MoreDetailsCard;
