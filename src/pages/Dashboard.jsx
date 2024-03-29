import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Overview from "../components/Overview";
import TotalPortfolioValueAndRiskTolerance from "../components/TotalPortfolioValueAndRiskTolerance";

const Dashboard = () => {
  return (
    <div className="h-[100vh] flex bg-backgroundColor">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Dashboard"} />
        <div className="w-full min-h-full bg-backgroundColor p-[32px] flex flex-col gap-[32px]">
          <Overview />
          <TotalPortfolioValueAndRiskTolerance />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
