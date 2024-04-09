//

import { Icon } from "@iconify/react";
import React, { useState } from "react";

const TableWithCollapsableRow = ({
  totalInvested = 1000000,
  totalReturned = 1300000,
  goal = 10000000,
  compositionStage,
  setIsOpen,
}) => {
  const percentCompletion = ((totalInvested + totalReturned) / goal) * 100;
  const converted = percentCompletion.toFixed(2).toString() + "%";

  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const composition = [
    {
      name: "Nigerian Stocks",
      percentage: "33%",
      value: "N300,004.04",
      color: "#005AE0",
      components: [
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
      ],
    },
    {
      name: "USA Stocks",
      percentage: "16%",
      value: "N300,004.04",
      color: "#0082E0",
      components: [
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
      ],
    },
    {
      name: "Commodities",
      percentage: "15%",
      value: "N300,004.04",
      color: "#00E0D3",
      components: [
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
      ],
    },
    {
      name: "Corporate Bonds",
      percentage: "10%",
      value: "N300,004.04",
      color: "#00E09D",
      components: [
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
      ],
    },
    {
      name: "REIT's",
      percentage: "13%",
      value: "N300,004.04",
      color: "#E09400",
      components: [
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
      ],
    },
    {
      name: "Cash",
      percentage: "2%",
      value: "N300,004.04",
      color: "#E04300",
      components: [
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
        {
          name: "Apple Inc. (AAPL)",
          shareAmount: "443.1 Shares",
          percentage: "10%",
          value: "N150,245.36",
        },
      ],
    },
  ];

  //   Table headers
  const tableHeaders = ["Holdings", "% of portfolio", "Value"];

  const toggleRow = (index) => {
    if (expandedRowIndex === index) {
      setExpandedRowIndex(null); // Collapse the row if it's already expanded
    } else {
      setExpandedRowIndex(index); // Expand the row
    }
  };

  return (
    <table className="min-w-full relative">
      <div className="left-[-24px] max-2xl:left-[-19.2px]  w-[calc(100%+48px)] max-2xl:w-[calc(100%+38.4px)]  h-[31px] bg-[#005AE01A] absolute top-[10px] max-2xl:top-[7px]"></div>
      <thead>
        <tr>
          {tableHeaders?.map((tableHeader) => {
            return (
              <th
                className={`py-3 text-[16px] max-md:w-[50%] max-2xl:text-[12.8px] leading-[28px] max-2xl:leading-[22.4px] font-[400] text-[#1E1E1E99] ${
                  tableHeader === "Value" ? "text-right" : "text-left"
                } `}
              >
                {tableHeader}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white ">
        {composition.map((row, index) => (
          <React.Fragment key={row.id}>
            {/* Main row */}
            <tr className="cursor-pointer" onClick={() => toggleRow(index)}>
              <td className="text-[16px] leading-[28px] font-[400] text-blackTextColor py-3 whitespace-nowrap flex items-center  max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]">
                <span
                  className={`arrow-icon mr-2 transform transition-transform`}
                >
                  {expandedRowIndex === index ? (
                    <Icon
                      icon="ep:arrow-down-bold"
                      className={` text-blackTextColor w-[16px] h-[16px] max-2xl:h-[12.8px] max-2xl:w-[12.8px] `}
                    />
                  ) : (
                    <Icon
                      icon="ep:arrow-right-bold"
                      className={` text-black w-[16px] h-[16px] max-2xl:h-[12.8px] max-2xl:w-[12.8px]`}
                    />
                  )}
                  {/* Right-pointing arrow */}
                </span>
                {row.name}
              </td>
              <td className="w-[400px] text-[16px]   leading-[28px] font-[400] text-blackTextColor py-3 whitespace-nowrap max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]">
                <div className="flex items-center justify-center w-full">
                  <div className="w-[20%]"> {row.percentage}</div>
                  <div className="w-[80%]  h-[18px] max-2xl:h-[14.4px] ">
                    <div
                      style={{ width: row.percentage, background: row.color }}
                      className={`h-full`}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="text-right text-[16px] leading-[28px] font-[400] text-blackTextColor py-3 whitespace-nowrap max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]">
                <div className="flex  justify-end items-center">
                  {row.value}
                  {compositionStage !== "editComposition" && (
                    <span onClick={() => setIsOpen(true)}>
                      <Icon
                        icon="mdi:edit"
                        className={` text-blackTextColor w-[16px] h-[16px] max-2xl:h-[12.8px] max-2xl:w-[12.8px] ml-[16px] max-2xl:ml-[12.8px] `}
                      />
                    </span>
                  )}
                </div>
              </td>
            </tr>
            {/* Expanded detail row */}
            {expandedRowIndex === index &&
              row?.components?.map((component) => {
                const { name, shareAmount, percentage, value } = component;

                return (
                  <tr>
                    <td className="  flex items-center  text-[16px] leading-[28px] font-[400] text-blackTextColor py-1 whitespace-nowrap max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]">
                      <span className={`ml-10  `}></span>
                      {name}
                    </td>
                    <td className="  text-[12px] leading-[28px] font-[400] text-silverTextColor py-1 whitespace-nowrap max-2xl:text-[9.6px]  max-2xl:leading-[22.4px]">
                      <div className="flex items-center justify-center w-[200px]">
                        <div className="w-[40%]"> {shareAmount}</div>

                        <div className="w-[60%] h-[18px] max-2xl:h-[14.4px] ">
                          <div
                            style={{
                              width: percentage,
                              background: row.color,
                            }}
                            className={`h-full `}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right text-[16px] leading-[28px] font-[400] text-silverTextColor py-1 whitespace-nowrap max-2xl:text-[12.8px]  max-2xl:leading-[22.4px]">
                      {value}
                    </td>
                  </tr>
                );
              })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableWithCollapsableRow;
