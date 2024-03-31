import React, { useState } from "react";
import { arrowDown } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";
import TotalPortfolioValueGraph from "./TotalPortfolioValueGraph";

const TotalPortfolioValue = () => {
  // Dummy data for graph
  const data = [
    {
      name: "Jan",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 50,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 20,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 10,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 15,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 1,
      pv: 3800,
      amt: 2500,
    },
  ];

  // SELECTED TIMEFRAME STATE
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("6M");

  // Function to handle timeframe selection
  const selectTimeFrame = (timeframe) => {
    setSelectedTimeFrame(timeframe);
  };
  // End of function to handle timeframe selection

  return (
    <div className="overflow-auto w-[62%] flex flex-col gap-[30px] max-2xl:gap-[24px] bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px]  p-[24px] max-2xl:p-[19.2px] h-full">
      <div className="flex justify-between h-fit">
        <div className="flex flex-col gap-[8px] max-2xl:gap-[6.4px]">
          <div className="relative w-fit flex gap-[16px] max-2xl:gap-[12.8px] cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px]">
            <div className="text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor">
              TOTAL PORTFOLIO VALUE
            </div>
            <img
              src={arrowDown}
              alt="arrowDonw"
              className="max-2xl:w-[12.8px] max-2xl:h-[12.8px]"
            />
          </div>
          <div className="text-[24px] max-2xl:text-[19.2px] text-blackTextColor font-[700] leading-[30px] max-2xl:leading-[24px]">
            N300,810,565,830.11
          </div>
          <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px]  mt-[4px] max-2xl:mt-[3.2px]">
            <PercentageIndicator type={"positive"} text={"+12.9%"} />
            <div className="font-[400] text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] text-silverTextColor">
              {(selectedTimeFrame === "6M" && "In 6 months") ||
                (selectedTimeFrame === "1M" && "In 1 month") ||
                (selectedTimeFrame === "1YR" && "In 1 year") ||
                (selectedTimeFrame === "ALL" && "All time")}
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[226px] max-2xl:w-[180.8px] h-[35px] max-2xl:h-[28px]  py-[2px] max-2xl:py-[1.6px] flex bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px]">
            <div
              className={` ${
                selectedTimeFrame === "1M" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px] `}
              onClick={() => selectTimeFrame("1M")}
            >
              1M
            </div>
            <div
              className={`${
                selectedTimeFrame === "6M" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px]`}
              onClick={() => selectTimeFrame("6M")}
            >
              6M
            </div>
            <div
              className={`${
                selectedTimeFrame === "1YR" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px]`}
              onClick={() => selectTimeFrame("1YR")}
            >
              1YR
            </div>
            <div
              className={`${
                selectedTimeFrame === "ALL" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px]`}
              onClick={() => selectTimeFrame("ALL")}
            >
              ALL
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-1 bg-red-900"></div> */}
      <TotalPortfolioValueGraph data={data} />
      {/* <div className="flex-1 bg-black w-full h-28"></div> */}
    </div>
  );
};

export default TotalPortfolioValue;
