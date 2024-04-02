import React from "react";

export const TableInActiveStatusIndicator = () => {
  return (
    <div className="w-[112px] max-2xl:w-[89.6px] leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] h-[36px] max-2xl:h-[28.8px] flex items-center justify-center rounded-[200px]  py-[4px] px-[8px] text-textRedColor bg-backgroundRedColor">
      InActive
    </div>
  );
};

export const TableActiveStatusIndicator = () => {
  return (
    <div className="w-[112px] max-2xl:w-[89.6px] leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] h-[36px] max-2xl:h-[28.8px] flex items-center justify-center rounded-[200px]  py-[4px] px-[8px] text-textGreenColor bg-backgroundGreenColor">
      Active
    </div>
  );
};
