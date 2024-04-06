import { Icon } from "@iconify/react";
import React from "react";
import UserPortfolioSummary from "./UserPortfolioSummary";

const UserPortfolio = () => {
  return (
    <div className="p-[32px] max-2xl:p-[25.6px] pt-[26px] max-2xl:pt-[20.8px]">
      <div className="flex gap-[8px] max-2xl:gap-[6.4px] h-fit items-center ">
        <div className="cursor-pointer font-[600] leading-[28px] text-silverTextColor text-[20px] max-2xl:text-[16px]">
          Users
        </div>{" "}
        <div className="w-[16px]  h-[16px] max-2xl:h-[12.8px] flex items-center justify-center ">
          <Icon
            icon="ep:arrow-right-bold"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
        <div className=" cursor-pointer font-[600] leading-[28px] text-blackTextColor text-[20px] max-2xl:text-[16px] max-2xl:leading-[22.4px]  ">
          User Details
        </div>
        <div className="w-[16px]  h-[16px] max-2xl:h-[12.8px] flex items-center justify-center ">
          <Icon
            icon="ep:arrow-right-bold"
            className={` text-blackTextColor w-full h-full`}
          />
        </div>
        <div className="cursor-pointer font-[600] leading-[28px] text-blackTextColor text-[20px] max-2xl:text-[16px] max-2xl:leading-[22.4px]">
          User Portfolio
        </div>
      </div>
      <div className="mt-[34px] max-2xl:mt-[27.2px]">
        <UserPortfolioSummary />
      </div>
    </div>
  );
};

export default UserPortfolio;
