import React from "react";
import AssetClassPerformance from "./AssetClassPerformance";
import MoreDetailsCard from "./MoreDetailsCard";
import {
  aggregateSharpeRatio,
  numberOfActiveUsers,
  totalTransactions,
} from "../assets/icons";

const AssetClassPerformanceAndOtherDetails = () => {
  // Other details variable
  const moreDetails = [
    {
      title: "aggregate sharpe ratio",
      timeFrame: "Last Month",
      mainValue: "1.69",
      indicatorType: "positive",
      indicatorText: "+4.2%",
      changePercentage: "% Change",
      img: aggregateSharpeRatio,
    },
    {
      title: "Number of Active users",
      timeFrame: "Last Month",
      mainValue: "5,5702,328",
      indicatorType: "negative",
      indicatorText: "-9.9%",
      changePercentage: "% Change",
      img: numberOfActiveUsers,
    },
    {
      title: "Total transactions",
      timeFrame: "Last Month",
      mainValue: "17,562",
      indicatorType: "positive",
      indicatorText: "+4.2%",
      changePercentage: "% Change",
      img: totalTransactions,
    },
  ];

  return (
    <div className="flex gap-[32px] w-full">
      <AssetClassPerformance />
      <div className="flex-1 flex flex-col gap-[32px]">
        {moreDetails?.map((singleDetail) => {
          return <MoreDetailsCard data={singleDetail} />;
        })}
      </div>
    </div>
  );
};

export default AssetClassPerformanceAndOtherDetails;
