import React, { useState } from "react";
import UserPortfolioValueGraph from "./UserPortfolioValueGraph";

const UserPortfolioGraph = () => {
  // Dummy data for graph
  const data = [
    {
      name: "Jun",
      uv: 20,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "May",
      uv: 10,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Apr",
      uv: 15,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Mar",
      uv: 20,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Feb",
      uv: 50,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jan",
      uv: 100,
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
    <div className="overflow-auto w-[50%] flex flex-col gap-[8px] bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] h-full pt-[39px]  max-2xl:pb-[9.6px] max-2xl:pt-[31.2px] ">
      <UserPortfolioValueGraph data={data} />
      <div className="w-[90%]  h-[35px] max-2xl:h-[28px]  py-[4px] max-2xl:py-[3.2px] flex items-center ">
        <div
          className={` ${
            selectedTimeFrame === "1M" && "border-b-[2px] border-b-mainBlue"
          } flex-1 h-[31px] max-2xl:h-[24.8px] flex items-center justify-center cursor-pointer hover:border-b-[2px] hover:border-b-mainBlue text-[12px] max-2xl:text-[9.6px] `}
          onClick={() => selectTimeFrame("1M")}
        >
          1M
        </div>
        <div
          className={`${
            selectedTimeFrame === "6M" && "border-b-[2px] border-b-mainBlue"
          } flex-1 h-[31px] max-2xl:h-[24.8px] flex items-center justify-center cursor-pointer hover:border-b-[2px] hover:border-b-mainBlue text-[12px] max-2xl:text-[9.6px]`}
          onClick={() => selectTimeFrame("6M")}
        >
          6M
        </div>
        <div
          className={`${
            selectedTimeFrame === "1YR" && "border-b-[2px] border-b-mainBlue"
          } flex-1 h-[31px] max-2xl:h-[24.8px] flex items-center justify-center cursor-pointer hover:border-b-[2px] hover:border-b-mainBlue text-[12px] max-2xl:text-[9.6px]`}
          onClick={() => selectTimeFrame("1YR")}
        >
          1YR
        </div>
        <div
          className={`${
            selectedTimeFrame === "ALL" && "border-b-[2px] border-b-mainBlue"
          } flex-1 h-[31px] max-2xl:h-[24.8px] flex items-center justify-center cursor-pointer hover:border-b-[2px] hover:border-b-mainBlue text-[12px] max-2xl:text-[9.6px]`}
          onClick={() => selectTimeFrame("ALL")}
        >
          ALL
        </div>
      </div>
    </div>
  );
};

export default UserPortfolioGraph;
