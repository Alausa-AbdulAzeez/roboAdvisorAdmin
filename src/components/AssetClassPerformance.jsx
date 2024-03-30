import React, { useState } from "react";
import AssetClassPerformanceTable from "./AssetClassPerformanceTable";

const AssetClassPerformance = () => {
  return (
    <div className="w-[62%] flex flex-col gap-[24px] bg-white border border-borderColor rounded-[8px] p-[24px] h-[443px]">
      <div className="uppercase text-[14px] font-[400] leading-[28px] text-blackTextColor">
        asset class performance
      </div>
      <AssetClassPerformanceTable />
    </div>
  );
};

export default AssetClassPerformance;
