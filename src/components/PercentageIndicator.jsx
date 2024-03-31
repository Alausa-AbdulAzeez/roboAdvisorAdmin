import React from "react";

const PercentageIndicator = ({ text, type }) => {
  return (
    <div
      className={` font-[400] text-[16px] max-2xl:text-[12.8px]  leading-[28px] max-2xl:leading-[22.4px] w-[69px] max-2xl:w-[54.8px] h-[32px] max-2xl:h-[26.2px] py-[2px] max-2xl:py-[1.6px] px-[8px] max-2xl:px-[6.4px] flex items-center justify-center rounded-[100px] max-2xl:rounded-[80px]  ${
        type === "negative" && "text-textRedColor bg-backgroundRedColor"
      } ${
        type === "positive" && "text-textGreenColor bg-backgroundGreenColor"
      }`}
    >
      {text}
    </div>
  );
};

export default PercentageIndicator;
