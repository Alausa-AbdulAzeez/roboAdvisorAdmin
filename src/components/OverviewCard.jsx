import React from "react";
import { sum } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";
import Skeleton from "react-loading-skeleton";

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
  loadingOverviewData,
}) => {
  /**
   * Format a number with commas as thousand separators.
   * @param {number} number - The number to format.
   * @param {string} locale - The locale to use for formatting (default is 'en-US').
   * @returns {string} The formatted number with commas.
   */
  function formatNumberWithCommas(number, locale = "en-US") {
    if (typeof number === "number") {
      return new Intl.NumberFormat(locale, {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(number);
    } else {
      return;
    }
  }

  /**
   * Formats a number as a percentage string with a "+" or "-" prefix.
   *
   * @param {number} value - The number to format.
   * @returns {string} The formatted percentage string.
   */
  function formatPercentage(value) {
    if (typeof value !== "number") {
      return value;
    }
    const prefix = value >= 0 ? "+" : "-";
    return `${prefix}${Math.abs(value)}%`;
  }

  // Define formatted variables
  const formattedAmount = formatNumberWithCommas(amount);
  const formattedPercentage = formatPercentage(percentText);

  return (
    <div
      className={`flex max-md:border-b-[0.05px] max-md:border-borderColor overflow-hidden h-full max-md:h-fit max-md:flex-none max-md:overflow-hidden flex-1 justify-between ${
        imgPosition === "right"
          ? "flex-row"
          : "flex-row-reverse max-md:flex-row "
      } ${
        index === 4
          ? "border-b-none max-md:border-b-none max-md:border-transparent"
          : ""
      } `}
    >
      <div
        className={`flex flex-col ${
          absolutePosition === "top" && "justify-end max-md:justify-normal"
        } `}
      >
        <div className="uppercase font-[400] text-[14px] max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px]">
          {title}
        </div>
        {loadingOverviewData ? (
          <Skeleton />
        ) : (
          <div
            className={`font-[700] ${
              index === 1
                ? "text-[32px] text-mainBlue max-2xl:text-[25.6px] max-md:text-[24px]"
                : "text-[24px] text-blackTextColor max-2xl:text-[19.2px] max-md:text-[20px]"
            }  leading-[40px] max-2xl:leading-[32px] `}
          >
            {`N${formattedAmount || ""}`}
          </div>
        )}

        <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px] mt-[4px] max-2xl:mt-[3.2px]">
          {loadingOverviewData ? (
            <Skeleton width={50} />
          ) : (
            <PercentageIndicator
              type={percentType}
              text={formattedPercentage}
            />
          )}

          <div className="font-[400] text-[14px] max-2xl:text-[11.2px] max-md:text-[12px]  leading-[18px] max-2xl:leading-[14.4px] text-silverTextColor">
            {time}
          </div>
        </div>
      </div>
      <div className=" w-[200px] max-2xl:w-[160px] h-full relative max-md:hidden ">
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
        className={`hidden max-md:h-[89.62px] max-md:w-[123.61px] max-md:flex  relative`}
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
