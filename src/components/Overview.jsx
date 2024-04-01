import React from "react";
import { average, offCourse, onCourse, sum } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[16px] max-2xl:mb-[12.8px]">
        <div className="text-silverTextColor leading-[30px] max-2xl:leading-[24px] text-[24px] max-2xl:text-[19.2px] font-[700]">
          Overview
        </div>
        <div className="text-mainBlue leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[700] cursor-pointer hover:underline">
          Export CSV
        </div>
      </div>
      <div className="w-full h-[337px] max-2xl:h-[269.6px] p-[24px] max-2xl:p-[19.2px] bg-white relative border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] flex-wrap">
        <div className="w-[100%] h-[50%]  border-b-[0.05px] border-borderColor flex">
          <OverviewCard
            title={"Total Portfolio value"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={sum}
            percentText={"+12.9%"}
            percentType={"positive"}
            imgPosition={"right"}
            absolutePosition={"bottom"}
            index={1}
          />
          <OverviewCard
            title={"Total Portfolio value"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={average}
            percentText={"-9.9%"}
            percentType={"negative"}
            imgPosition={"left"}
            absolutePosition={"bottom"}
          />
        </div>
        <div className="w-[100%] h-[50%] flex">
          <OverviewCard
            title={"Total Portfolio value"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={onCourse}
            percentText={"-9.9%"}
            percentType={"negative"}
            imgPosition={"right"}
            absolutePosition={"top"}
          />
          <OverviewCard
            title={"Total Portfolio value"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={offCourse}
            percentText={"+12.9%"}
            percentType={"positive"}
            imgPosition={"left"}
            absolutePosition={"top"}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
