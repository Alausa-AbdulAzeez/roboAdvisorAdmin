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
    <div className="w-[62%] flex flex-col gap-[30px] bg-white border border-borderColor rounded-[8px] p-[24px] h-full">
      <div className="flex justify-between h-fit">
        <div className="flex flex-col gap-[8px]">
          <div className="relative w-fit flex gap-[16px] cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] pt-[4px] px-[8px]">
            <div className="text-[14px] font-[400] leading-[28px] text-blackTextColor">
              TOTAL PORTFOLIO VALUE
            </div>
            <img src={arrowDown} alt="arrowDonw" />
          </div>
          <div className="text-[24px] text-blackTextColor font-[700] leading-[30px]">
            N300,810,565,830.11
          </div>
          <div className="flex items-center gap-[8px] mt-[4px]">
            <PercentageIndicator type={"positive"} text={"+12.9%"} />
            <div className="font-[400] text-[14px] leading-[18px] text-silverTextColor">
              {(selectedTimeFrame === "6M" && "In 6 months") ||
                (selectedTimeFrame === "1M" && "In 1 month") ||
                (selectedTimeFrame === "1YR" && "In 1 year") ||
                (selectedTimeFrame === "ALL" && "All time")}
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[226px] h-[35px] py-[2px] flex bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] ">
            <div
              className={` ${
                selectedTimeFrame === "1M" &&
                "border border-borderColor bg-white"
              } w-[56.5px] h-[31px] flex items-center justify-center pt-[8px] py-[10px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px]`}
              onClick={() => selectTimeFrame("1M")}
            >
              1M
            </div>
            <div
              className={`${
                selectedTimeFrame === "6M" &&
                "border border-borderColor bg-white"
              } w-[56.5px] h-[31px] flex items-center justify-center pt-[8px] py-[10px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px]`}
              onClick={() => selectTimeFrame("6M")}
            >
              6M
            </div>
            <div
              className={`${
                selectedTimeFrame === "1YR" &&
                "border border-borderColor bg-white"
              } w-[56.5px] h-[31px] flex items-center justify-center pt-[8px] py-[10px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px]`}
              onClick={() => selectTimeFrame("1YR")}
            >
              1YR
            </div>
            <div
              className={`${
                selectedTimeFrame === "ALL" &&
                "border border-borderColor bg-white"
              } w-[56.5px] h-[31px] flex items-center justify-center pt-[8px] py-[10px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px]`}
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
