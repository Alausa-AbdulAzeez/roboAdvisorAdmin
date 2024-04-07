import React from "react";
import { moneyBag } from "../assets/icons";
import GoalDrift from "./GoalDrift";
import { Icon } from "@iconify/react";

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

const Portfolio = ({ type }) => {
  return (
    <div className="w-[100%] h-fit overflow-auto  flex justify-between bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] ">
      <div className="flex flex-col gap-[32px] max-2xl:gap-[25.6px]">
        <div className="flex items-center gap-[32px] max-2xl:gap-[25.6px]">
          <div className="px-[16px] flex items-center gap-[16px] rounded-[8px] font-[400] py-[8px] text-[16px] bg-backgroundBlueColor text-mainBlue leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px] max-2xl:gap-[12.8px]">
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
        {type === "On Course" && (
          <GoalDrift
            totalInvested={1000000}
            totalReturned={310000}
            goal={10000000}
            type={type}
          />
        )}
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
      </div>
      <div className=""></div>
    </div>
  );
};

export default Portfolio;
