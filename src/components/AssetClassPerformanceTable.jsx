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
    <table className="border-separate border-spacing-y-[24px] relative">
      <div className="left-[-24px] w-[calc(100%+48px)] h-[31px] bg-[#005AE01A] absolute top-[40px]"></div>
      <tr>
        <th className="text-[14px] leading-[18px] font-[400] text-[#1E1E1E99] text-left">
          Asset Class
        </th>
        <th className="text-[14px] leading-[18px] font-[400] text-[#1E1E1E99] text-left">
          Returns (%)
        </th>
        <th className="text-[14px] leading-[18px] font-[400] text-[#1E1E1E99] text-left">
          Volatility (%)
        </th>
        <th className="text-[14px] leading-[18px] font-[400] text-[#1E1E1E99] text-left">
          Sharpe Ratio
        </th>
        <th className="text-[14px] leading-[18px] font-[400] text-[#1E1E1E99] text-left">
          Allocation
        </th>
        <th className="text-[14px] leading-[18px] font-[400] text-[#1E1E1E99] text-left">
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
          <tr className="h-[28px]" key={index}>
            <td className="text-[16px] leading-[28px] font-[600] text-[#1E1E1E]">
              {assetClass}
            </td>
            <td className="text-[16px] leading-[28px] font-[400] text-[#1E1E1E99]">
              {returns}
            </td>
            <td className="text-[16px] leading-[28px] font-[400] text-[#1E1E1E99]">
              {volatility}
            </td>
            <td className="text-[16px] leading-[28px] font-[400] text-[#1E1E1E99]">
              {sharpeRation}
            </td>
            <td className="text-[16px] leading-[28px] font-[400] text-[#1E1E1E99]">
              {allocation}
            </td>
            <td className="text-[16px] leading-[28px] font-[600] text-[#1E1E1E]">
              {totalValue}
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default AssetClassPerformanceTable;
