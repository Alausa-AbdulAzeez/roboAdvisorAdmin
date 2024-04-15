import React, { useEffect, useState } from "react";
import { moneyBag } from "../assets/icons";
import GoalDrift from "./GoalDrift";
import { Icon } from "@iconify/react";
import GeneralDoughnutChart from "./GeneralDoughnutChart";
import PieChartLegend from "./PieChartLegend";
import { Link } from "react-router-dom";
import MobileDoughnutChart from "./MobileDoughnutChart";

const TextIconComponent = ({ textName }) => {
  return (
    <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
      <div className="text-silverTextColor leading-[28px] text-[16px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
        {textName}
      </div>
      <div className="w-[16px] h-[16px] max-2xl:w-[12.8px] max-2xl:h-[12.8px] flex items-center">
        <Icon
          icon="gridicons:help"
          className={` text-silverTextColor w-full h-full`}
        />
      </div>
    </div>
  );
};

const Portfolio = ({ type, ui }) => {
  // Expanded state
  const [expanded, setExpanded] = useState(true);

  // Functionaliy to expand and collpase ui
  const handleSetExpandedState = () => {
    setExpanded((prev) => !prev);
  };

  // Ensd of Functionaliy to expand and collpase ui

  const data = [
    { name: "Group A", value: 500, color: "#0082E0", percentage: "10%" },
    { name: "Group B", value: 400, color: "#00E0D3", percentage: "20%" },
    { name: "Group C", value: 350, color: "#00E09D", percentage: "30%" },
    { name: "Group D", value: 300, color: "#E04300", percentage: "10%" },
    { name: "Group E", value: 300, color: "#E09400", percentage: "15%" },
    { name: "Group F", value: 200, color: "#005AE0", percentage: "15%" },
  ];

  return (
    <div className="w-[100%] h-fit overflow-auto max-lg:flex-col max-lg:gap-[32px]  flex justify-between bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] ">
      <div className="flex flex-col w-[40%] max-lg:w-full  gap-[32px] max-2xl:gap-[25.6px] ">
        <div className="flex items-center max-lg:flex-col max-lg:items-start gap-[32px] max-2xl:gap-[25.6px]">
          <div className="hidden max-lg:block text-[12px] text-silverTextColor">
            Select Portfolio
          </div>
          <div className="px-[16px] max-lg:w-full flex items-center gap-[16px] rounded-[8px] font-[400] py-[8px] text-[16px] bg-backgroundBlueColor text-mainBlue leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px] max-2xl:gap-[12.8px]">
            <img
              src={moneyBag}
              alt="Savings"
              className="w-[32px] h-[32px] max-2xl:w-[25.6px] max-2xl:h-[25.6px]"
            />
            <div className="">Retirement Planning</div>
          </div>
          <div className="text-blackTextColor leading-[30px] font-[700] text-[24px] max-2xl:leading-[24px]  max-2xl:text-[19.2px]">
            N1,310,000.14
          </div>
        </div>
        <div className="flex gap-[8px] max-2xl:gap-[6.4px]">
          <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            Total Invested:
          </div>
          <div className="text-[16px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            N1,000,000.00
          </div>
        </div>
        <div className="flex gap-[8px] max-2xl:gap-[6.4px]">
          <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            Total Returns:
          </div>
          <div className="text-[16px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            N310,000.14
          </div>
          <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            12.9%
          </div>
        </div>
        <div className="hidden max-lg:block max-lg:border max-lg:border-borderColor w-full"></div>
        {type === "On Course" && (
          <GoalDrift
            totalInvested={1000000}
            totalReturned={310000}
            goal={10000000}
            type={type}
          />
        )}

        <div className="hidden max-lg:block max-lg:border max-lg:border-borderColor w-full"></div>
        <div className="w-[250px] flex flex-col gap-[16px] max-2xl:gap-[12.8px] max-2xl:w-[500px ] ">
          <div className="flex justify-between">
            <TextIconComponent textName="Risk Profile" />
            <div className="text-mainBlue leading-[28px] font-semibold text-[16px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
              Conservative
            </div>
          </div>
          <div className="flex justify-between">
            <TextIconComponent textName="Drift" />
            <div className="text-mainBlue flex gap-[8px] leading-[28px] font-semibold text-[16px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px] max-2xl:gap-[6.4px]">
              <div className="text-blackTextColor leading-[28px] font-semibold text-[16px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
                Normal
              </div>
              <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
                {"<1.2%"}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <TextIconComponent textName="Rebalancing" />
            <div className="text-blackTextColor leading-[28px] font-semibold text-[16px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
              ON
            </div>
          </div>
        </div>
        <div className="hidden max-lg:block max-lg:border max-lg:border-borderColor w-full"></div>
      </div>
      <div className="flex flex-col w-[40%] max-lg:w-full  gap-[32px] max-2xl:gap-[25.6px] items-start ">
        <div className="max-lg:hidden flex flex-col gap-[8px] max-2xl:gap-[6.4px]">
          <div className="text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor">
            Portfolio Chart
          </div>
          <GeneralDoughnutChart />
        </div>
        <div
          className={`hidden  flex-col ${
            expanded ? "max-lg:flex" : ""
          } items-center justify-center w-full gap-[8px] max-2xl:gap-[6.4px]`}
        >
          <div className="w-full text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor">
            Portfolio Chart
          </div>
          <MobileDoughnutChart />
        </div>
        <div
          className={`w-full ${
            expanded ? "flex" : "hidden"
          }  flex gap-[32px] max-2xl:gap-[25.6px] flex-wrap`}
        >
          {data?.map((datum, index) => {
            const { color, name, percentage } = datum;
            return (
              <PieChartLegend
                key={index}
                borderColor={color}
                title={name}
                percentage={percentage}
              />
            );
          })}
        </div>
        <div
          className="hidden max-md:flex gap-[8px] text-mainBlue w-full items-center justify-center"
          onClick={handleSetExpandedState}
        >
          {expanded ? "Collapse" : "Expand"}
          <span className="w-[16px] h-[16px]">
            {expanded ? (
              <Icon
                icon="ep:arrow-up"
                className={`w-[100%] h-[100%] text-blackTextColor`}
              />
            ) : (
              <Icon
                icon="ep:arrow-down"
                className={`w-[100%] h-[100%] text-blackTextColor`}
              />
            )}
          </span>
        </div>

        {type === "On Course" && (
          <div className="w-full text-[16px] text-right max-lg:text-left font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            Auto Deposit: N20,000 automatic deposit every month
          </div>
        )}
        <div className="flex justify-end w-full">
          {ui === "userPortfolio" && (
            <Link to={"/users/goalPerformance"}>
              <div className="w-[24px] h-[24px] max-2xl:w-[19.2px] max-2xl:h-[19.2px] cursor-pointer">
                <Icon
                  icon="bi:arrow-right"
                  className={` text-black w-full h-full`}
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
