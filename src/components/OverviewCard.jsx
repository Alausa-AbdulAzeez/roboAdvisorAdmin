import React from "react";
import { sum } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";

const OverviewCard = ({
  title,
  amount,
  time,
  img,
  percentText,
  percentType,
  imgPosition,
  absolutePosition,
  index,
}) => {
  return (
    <div
      className={`flex overflow-hidden h-full flex-1 justify-between ${
        imgPosition === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col">
        <div className="uppercase font-[400] text-[14px] leading-[28px]">
          {title}
        </div>
        <div
          className={`font-[700] ${
            index === 1
              ? "text-[24px] text-mainBlue max-2xl:text-[32px]"
              : "text-[24px] text-blackTextColor"
          }  leading-[40px] `}
        >
          {amount}
        </div>
        <div className="flex items-center gap-[8px] mt-[4px]">
          <PercentageIndicator type={percentType} text={percentText} />
          <div className="font-[400] text-[14px] leading-[18px] text-silverTextColor">
            {time}
          </div>
        </div>
      </div>
      <div className=" w-[200px] h-full relative ">
        <img
          src={img}
          alt="sum"
          className={`absolute ${
            absolutePosition === "top" ? "top-0" : "bottom-0"
          }`}
        />
      </div>{" "}
    </div>
  );
};

// Ans1 = 633px 721/1177 * 100 = 62%

export default OverviewCard;
