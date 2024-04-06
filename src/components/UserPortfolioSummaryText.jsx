import React from "react";

const UserPortfolioSummaryText = () => {
  return (
    <div className="w-[50%] bg-white border border-borderColor p-[24px] flex flex-col justify-between rounded-[8px] max-2xl:rounded-[6.4px] max-2xl:p-[19.2px]">
      <div className="flex">
        <div className="flex flex-col gap-[4px] w-[50%]">
          <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
            Total Robovisor Balance
          </div>
          <div className="text-[24px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px] max-2xl:text-[19.2px]">
            N300,810,565.83
          </div>
        </div>
        <div className="flex flex-col gap-[4px] w-[50%] text-right">
          <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
            member since
          </div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
            May, 2023
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-[4px] w-[50%]">
          <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
            Total Invested
          </div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
            N1,000,000.00
          </div>
        </div>
        <div className="flex flex-col gap-[4px] w-[50%] text-right">
          <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
            Total Returns
          </div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
            N310,000.14
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-[4px]">
          <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
            Portfolio ID:
          </div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
            2245
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPortfolioSummaryText;
