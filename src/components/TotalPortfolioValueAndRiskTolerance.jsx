import React from "react";
import TotalPortfolioValue from "./TotalPortfolioValue";
import RiskToleranceDistribution from "./RiskToleranceDistribution";

const TotalPortfolioValueAndRiskTolerance = () => {
  return (
    <div className="flex gap-[32px] max-2xl:gap-[25.6px] w-full h-[518px] max-2xl:h-[414.4px] max-md:flex-col max-md:h-auto">
      <TotalPortfolioValue />
      <RiskToleranceDistribution />
    </div>
  );
};

export default TotalPortfolioValueAndRiskTolerance;
