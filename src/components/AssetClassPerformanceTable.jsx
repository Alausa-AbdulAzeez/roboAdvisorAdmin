import React from "react";

const AssetClassPerformanceTable = () => {
  // Dummy data
  const tableDummyData = [
    {
      assetClass: "Commodities",
      returns: "28",
      volatility: "15.2",
      sharpeRation: "0.69",
      allocation: "30",
      totalValue: "109,626,114",
    },
    {
      assetClass: "Cash",
      returns: "28",
      volatility: "15.2",
      sharpeRation: "0.69",
      allocation: "30",
      totalValue: "109,626,114",
    },
    {
      assetClass: "USA Stocks",
      returns: "28",
      volatility: "15.2",
      sharpeRation: "0.69",
      allocation: "30",
      totalValue: "109,626,114",
    },
    {
      assetClass: "REIT's",
      returns: "28",
      volatility: "15.2",
      sharpeRation: "0.69",
      allocation: "30",
      totalValue: "109,626,114",
    },
    {
      assetClass: "NG Stocks",
      returns: "28",
      volatility: "15.2",
      sharpeRation: "0.69",
      allocation: "30",
      totalValue: "109,626,114",
    },
    {
      assetClass: "Bonds",
      returns: "28",
      volatility: "15.2",
      sharpeRation: "0.69",
      allocation: "30",
      totalValue: "109,626,114",
    },
  ];

  return (
    <table className="border-separate border-spacing-y-[24px] max-2xl:border-spacing-y-[19.2px] relative">
      {/* <table className="border-separate border-spacing-y-[24px] max-2xl:border-spacing-y-[19.2px] relative"> */}
      <div className="left-[-24px] max-2xl:left-[-19.2px]  w-[calc(100%+48px)] max-2xl:w-[calc(100%+38.4px)]  h-[31px] bg-[#005AE01A] absolute top-[40px] max-2xl:top-[30px]"></div>
      <tr>
        <th className="text-[14px] max-sm:w-[50%] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
          Asset Class
        </th>
        <th className=" max-sm:hidden text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
          Returns (%)
        </th>
        <th className=" max-sm:hidden text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
          Volatility (%)
        </th>
        <th className=" max-sm:hidden text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
          Sharpe Ratio
        </th>
        <th className=" max-sm:hidden text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
          Allocation
        </th>
        <th className="text-[14px] max-sm:w-[50%] max-sm:text-right max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] font-[400] text-[#1E1E1E99] text-left">
          Total Value
        </th>
      </tr>
      {tableDummyData?.map((tableDummyDatum, index) => {
        const {
          assetClass,
          returns,
          volatility,
          sharpeRation,
          allocation,
          totalValue,
        } = tableDummyDatum;

        return (
          <tr className="h-[28px] max-2xl:h-[22.4px]" key={index}>
            <td className="text-[16px] max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] font-[600] text-[#1E1E1E]">
              {assetClass}
            </td>
            <td className="max-sm:hidden max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] font-[400] text-[#1E1E1E99]">
              {returns}
            </td>
            <td className="max-sm:hidden max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] font-[400] text-[#1E1E1E99]">
              {volatility}
            </td>
            <td className="max-sm:hidden max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] font-[400] text-[#1E1E1E99]">
              {sharpeRation}
            </td>
            <td className="max-sm:hidden max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] font-[400] text-[#1E1E1E99]">
              {allocation}
            </td>
            <td className="max-2xl:text-[12.8px] max-sm:text-right leading-[28px] max-2xl:leading-[22.4px] font-[600] text-[#1E1E1E]">
              {totalValue}
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default AssetClassPerformanceTable;
