import React, { useState } from "react";
import AssetClassPerformanceTable from "./AssetClassPerformanceTable";

const AssetClassPerformance = () => {
  return (
    <div className="w-[62%] flex flex-col bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] h-fit overflow-auto">
      <div className="uppercase text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[0px] text-blackTextColor max-2xl:mt-[12px]">
        asset class performance
      </div>
      <AssetClassPerformanceTable />
    </div>
  );
};

export default AssetClassPerformance;
