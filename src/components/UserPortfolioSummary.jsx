import { Icon } from "@iconify/react";
import React from "react";
import UserPortfolioGraph from "./UserPortfolioGraph";
import UserPortfolioSummaryText from "./UserPortfolioSummaryText";

const UserPortfolioSummary = () => {
  return (
    <div className="h-[373px]">
      <div className="mb-[8px] flex gap-[8px] items-center ">
        <div className="text-blackTextColor text-[20px] font-[600] leading-[28px] max-2xl:text-[16px] max-2xl:leading-[22.4px] ">
          Summary
        </div>
        <div className="w-[24px]  h-[24px] max-2xl:h-[19.2px] max-2xl:w-[19.2px] flex items-center justify-center">
          <Icon
            icon="clarity:details-line"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
      </div>
      <div className="flex gap-[32px] max-2xl:gap-[25.6px] h-[340px] max-2xl:h-[269.6px]">
        <UserPortfolioGraph />
        <UserPortfolioSummaryText />
      </div>
    </div>
  );
};

export default UserPortfolioSummary;
