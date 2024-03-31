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
      <div
        className={`flex flex-col ${
          absolutePosition === "top" && "justify-end"
        } `}
      >
        <div className="uppercase font-[400] text-[14px] max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px]">
          {title}
        </div>
        <div
          className={`font-[700] ${
            index === 1
              ? "text-[32px] text-mainBlue max-2xl:text-[25.6px]"
              : "text-[24px] text-blackTextColor max-2xl:text-[19.2px]"
          }  leading-[40px] max-2xl:leading-[32px] `}
        >
          {amount}
        </div>
        <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px] mt-[4px] max-2xl:mt-[3.2px]">
          <PercentageIndicator type={percentType} text={percentText} />
          <div className="font-[400] text-[14px] max-2xl:text-[11.2px]  leading-[18px] max-2xl:leading-[14.4px] text-silverTextColor">
            {time}
          </div>
        </div>
      </div>
      <div className=" w-[200px] max-2xl:w-[160px] h-full relative ">
        <img
          src={img}
          alt="sum"
          className={`absolute ${
            imgPosition === "right" ? "max-2xl:right-0" : "max-2xl:left-0"
          } ${
            absolutePosition === "top"
              ? "top-0"
              : "bottom-0  w-[200px] h-[145px] max-2xl:w-[160px] max-2xl:h-[116px]"
          }`}
        />
      </div>{" "}
    </div>
  );
};

// Ans1 = 633px 721/1177 * 100 = 62%

export default OverviewCard;
