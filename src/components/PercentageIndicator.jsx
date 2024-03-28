import React from "react";

const PercentageIndicator = ({ text, type }) => {
  return (
    <div
      className={` font-[400] text-[16px] leading-[28px] w-[69px] h-[32px] py-[2px] px-[8px] flex items-center justify-center rounded-[100px]  ${
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
