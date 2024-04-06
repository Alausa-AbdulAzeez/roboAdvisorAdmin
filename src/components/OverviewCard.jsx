import React from "react";
import { sum } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";

const OverviewCard = ({
  title,
  amount,
  time,
  img,
  mobileImg,
  percentText,
  percentType,
  imgPosition,
  absolutePosition,
  cardName,
  index,
}) => {
  return (
    <div
      className={`flex max-sm:border-b-[0.05px] max-sm:border-borderColor overflow-hidden h-full max-sm:h-fit max-sm:flex-none max-sm:overflow-hidden flex-1 justify-between ${
        imgPosition === "right"
          ? "flex-row"
          : "flex-row-reverse max-sm:flex-row "
      } ${
        index === 4
          ? "border-b-none max-sm:border-b-none max-sm:border-transparent"
          : ""
      } `}
    >
      <div
        className={`flex flex-col ${
          absolutePosition === "top" && "justify-end max-sm:justify-normal"
        } `}
      >
        <div className="uppercase font-[400] text-[14px] max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px]">
          {title}
        </div>
        <div
          className={`font-[700] ${
            index === 1
              ? "text-[32px] text-mainBlue max-2xl:text-[25.6px] max-sm:text-[24px]"
              : "text-[24px] text-blackTextColor max-2xl:text-[19.2px] max-sm:text-[20px]"
          }  leading-[40px] max-2xl:leading-[32px] `}
        >
          {amount}
        </div>
        <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px] mt-[4px] max-2xl:mt-[3.2px]">
          <PercentageIndicator type={percentType} text={percentText} />
          <div className="font-[400] text-[14px] max-2xl:text-[11.2px] max-sm:text-[12px]  leading-[18px] max-2xl:leading-[14.4px] text-silverTextColor">
            {time}
          </div>
        </div>
      </div>
      <div className=" w-[200px] max-2xl:w-[160px] h-full relative max-sm:hidden ">
        <img
          src={img}
          alt="sum"
          className={`absolute ${
            imgPosition === "right" ? "max-2xl:right-0" : "max-2xl:left-0  "
          } ${
            absolutePosition === "top"
              ? "top-0"
              : "bottom-0  w-[200px] h-[145px] max-2xl:w-[160px] max-2xl:h-[116px]"
          }`}
        />
      </div>
      <div
        className={`hidden max-sm:h-[89.62px] max-sm:w-[123.61px] max-sm:flex  relative`}
      >
        <img
          src={mobileImg}
          alt="sum"
          className={`h-full w-full  ${
            cardName === "sum" ? "absolute right-0" : ""
          }`}
        />
      </div>
    </div>
  );
};

// Ans1 = 633px 721/1177 * 100 = 62%

export default OverviewCard;
