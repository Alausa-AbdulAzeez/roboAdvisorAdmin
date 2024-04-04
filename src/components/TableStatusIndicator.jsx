import React from "react";

export const TableInActiveStatusIndicator = () => {
  return (
    <div className="w-[112px] h-[36px]  leading-[28px] text-[16px]   py-[4px] px-[8px] text-textRedColor bg-backgroundRedColor flex items-center justify-center rounded-[200px] max-2xl:rounded-[160px] max-2xl:py-[3.2px] max-2xl:px-[6.4px] max-2xl:leading-[22.4px] max-2xl:w-[89.6px]  max-2xl:text-[12.8px]  max-2xl:h-[28.8px] ">
      Deactivated
    </div>
  );
};

export const TableActiveStatusIndicator = () => {
  return (
    <div className="w-[112px] leading-[28px] py-[4px] px-[8px] h-[36px] text-[16px] text-textGreenColor bg-backgroundGreenColor flex items-center justify-center rounded-[200px] max-2xl:w-[89.6px]  max-2xl:leading-[22.4px]  max-2xl:text-[12.8px] max-2xl:h-[28.8px]  max-2xl:rounded-[160px]  max-2xl:py-[3.2px] max-2xl:px-[6.4px]">
      Active
    </div>
  );
};
