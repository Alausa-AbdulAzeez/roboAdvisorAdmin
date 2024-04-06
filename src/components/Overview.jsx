import React from "react";
import { average, offCourse, onCourse, sum } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";
import OverviewCard from "./OverviewCard";
import {
  averageMobile,
  offCourseMobile,
  onCourseMobile,
  sumMobile,
} from "../assets/images";

const Overview = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[16px] max-2xl:mb-[12.8px] max-md:mb-[8px]">
        <div className="text-silverTextColor leading-[30px] font-[700] text-[24px] max-2xl:leading-[24px]  max-2xl:text-[19.2px] max-md:text-[20px]">
          Overview
        </div>
        <div className="text-mainBlue leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] max-md:text-[16px] font-[700] cursor-pointer hover:underline">
          Export CSV
        </div>
      </div>
      <div className="w-full h-[337px] max-2xl:h-[269.6px] max-md:h-fit p-[24px] max-2xl:p-[19.2px] max-md:p-[16px] bg-white relative border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] flex-wrap">
        <div className="w-[100%] h-[50%] max-md:h-fit  border-b-[1px] border-borderColor max-md:border-none flex max-md:flex-col max-md:gap-[14px] max-md:mb-[14px]">
          <OverviewCard
            title={"Total Portfolio value"}
            amount={"N300,810,565"}
            time={"This Week"}
            img={sum}
            cardName={"sum"}
            mobileImg={sumMobile}
            percentText={"+12.9%"}
            percentType={"positive"}
            imgPosition={"right"}
            absolutePosition={"bottom"}
            index={1}
          />
          <OverviewCard
            title={"Average Portfolio value"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={average}
            mobileImg={averageMobile}
            percentText={"-9.9%"}
            percentType={"negative"}
            imgPosition={"left"}
            absolutePosition={"bottom"}
          />
        </div>
        <div className="w-[100%] h-[50%] max-md:h-fit flex  max-md:flex-col max-md:gap-[14px]">
          <OverviewCard
            title={"On Course"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={onCourse}
            mobileImg={onCourseMobile}
            percentText={"-9.9%"}
            percentType={"negative"}
            imgPosition={"right"}
            absolutePosition={"top"}
          />
          <OverviewCard
            title={"Off course"}
            amount={"N300,810,565.11"}
            time={"This Week"}
            img={offCourse}
            mobileImg={offCourseMobile}
            percentText={"+12.9%"}
            percentType={"positive"}
            imgPosition={"left"}
            absolutePosition={"top"}
            index={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
