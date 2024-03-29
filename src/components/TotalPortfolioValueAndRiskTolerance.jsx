import React from "react";
import TotalPortfolioValue from "./TotalPortfolioValue";
import RiskToleranceDistribution from "./RiskToleranceDistribution";

const TotalPortfolioValueAndRiskTolerance = () => {
  return (
    <div className="flex gap-[32px] w-full h-[518px]">
      <TotalPortfolioValue />
      <RiskToleranceDistribution />
    </div>
  );
};

export default TotalPortfolioValueAndRiskTolerance;
