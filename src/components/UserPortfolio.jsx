import { Icon } from "@iconify/react";
import React, { useState } from "react";
import UserPortfolioSummary from "./UserPortfolioSummary";
import { targetIcon } from "../assets/icons";
import Portfolio from "./Portfolio";

const UserPortfolio = () => {
  // Filters
  const filters = ["On Course", "Off Course", "All"];
  const portfolios = ["On Course", "Off Course", "All"];

  // Active filter state
  const [activeFilter, setActiveFilter] = useState("All");

  // Function to handle active filter selection
  const handleActiveFilterSelection = (selectedFilter) => {
    setActiveFilter(selectedFilter);
  };
  // End of function to handle active filter selection

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
      <div className="mt-[34px] max-2xl:mt-[27.2px] mb-[32px] max-2xl:mb-[25.6px]">
        <UserPortfolioSummary />
      </div>
      <div className="flex flex-col gap-[8px] max-2xl:gap-[6.4px] ">
        <div className="flex justify-between px-[24px] max-2xl:px-[19.2px]">
          <div className="flex items-center justify-center gap-[8px] max-2xl:gap-[6.4px] ">
            <div className="text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] text-blackTextColor">
              Goals
            </div>
            <img
              src={targetIcon}
              alt="goals"
              className="w-[24px] h-[24px] max-2xl:w-[19.2px] max-2xl:h-[19.2px]"
            />
          </div>
          <div className="flex">
            {filters?.map((filter) => {
              return (
                <div
                  className={`px-[16px] font-[400] ${
                    activeFilter === filter &&
                    "border-b-[2px] border-b-mainBlue"
                  } cursor-pointer text-blackTextColor leading-[28px] text-[16px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px] max-2xl:px-[12.8px]  `}
                  onClick={() => handleActiveFilterSelection(filter)}
                >
                  {filter}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[32px] max-2xl:gap-[25.6px]">
          {portfolios?.map((portfolio) => {
            return <Portfolio type={portfolio} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserPortfolio;
