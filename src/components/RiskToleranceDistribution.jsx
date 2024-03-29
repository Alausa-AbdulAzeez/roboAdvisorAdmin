import React from "react";
import RiskToleranceDistributionPieChart from "./RiskToleranceDistributionPieChart";

const RiskToleranceDistribution = () => {
  return (
    <div className="bg-white flex flex-col gap-[32px] flex-1 border border-borderColor rounded-[8px] p-[24px] h-full">
      <div className="uppercase text-[14px] font-[400] text-blackTextColor leading-[28px]">
        Risk Tolerance Distribution
      </div>
      <div className="w-[full] h-[60%]">
        <RiskToleranceDistributionPieChart />
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <div className="w-[10px] h-[10px] rounded-full bg-[#005AE0]"></div>
          <div className="text-[16px] font-[600] leading-[28px]">
            Conservative
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div className="w-[10px] h-[10px] rounded-full bg-[#888DF6]"></div>
          <div className="text-[16px] font-[600] leading-[28px]">Moderate</div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div className="w-[10px] h-[10px] rounded-full bg-[#7BD7FF]"></div>
          <div className="text-[16px] font-[600] leading-[28px]">
            Conservative
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskToleranceDistribution;
