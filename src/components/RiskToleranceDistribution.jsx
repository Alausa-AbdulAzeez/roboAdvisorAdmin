import React from "react";
import RiskToleranceDistributionPieChart from "./RiskToleranceDistributionPieChart";

const RiskToleranceDistribution = () => {
  return (
    <div className="overflow-auto bg-white flex flex-col gap-[32px] max-2xl:gap-[25.6px] flex-1 border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] h-full">
      <div className="uppercase text-[14px] max-2xl:text-[11.2px] font-[400] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
        Risk Tolerance Distribution
      </div>
      <div className="w-[full] h-[60%] max-2xl:h-[55%]">
        <RiskToleranceDistributionPieChart />
      </div>
      <div className="flex flex-col gap-[8px] max-2xl:gap-[6.4px]">
        <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
          <div className="w-[10px] max-2xl:w-[8px] h-[10px] max-2xl:h-[8px] rounded-full bg-[#005AE0]"></div>
          <div className="text-[16px] max-2xl:text-[12.8px]  font-[600] leading-[28px] max-2xl:leading-[22.4px]">
            Conservative
          </div>
        </div>
        <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
          <div className="w-[10px] max-2xl:w-[8px] h-[10px] max-2xl:h-[8px] rounded-full bg-[#888DF6]"></div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[600] leading-[28px] max-2xl:leading-[22.4px]">
            Moderate
          </div>
        </div>
        <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
          <div className="w-[10px] max-2xl:w-[8px] h-[10px] max-2xl:h-[8px] rounded-full bg-[#7BD7FF]"></div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[600] leading-[28px] max-2xl:leading-[22.4px]">
            Conservative
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskToleranceDistribution;
