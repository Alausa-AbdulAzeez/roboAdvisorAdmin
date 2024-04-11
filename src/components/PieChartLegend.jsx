import React from "react";

const PieChartLegend = ({ borderColor, title, percentage }) => {
  console.log(borderColor);
  return (
    <div
      className={`flex justify-between flex-1 min-w-[210px] max-2xl:min-w-[164px] px-[8px] border-l-[2px] max-2xl:px-[6.4px] max-lg:min-w-[220px]`}
      style={{ borderLeftColor: borderColor }}
    >
      <div className="text-[16px] font-[400]  text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
        {title}
      </div>
      <div className="text-[16px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
        33%
      </div>
    </div>
  );
};

export default PieChartLegend;
