import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import PortfoliosTable from "../components/PortfoliosTable";

const Portfolios = () => {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // End of function to toggle sidebar

  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Portfolios"} toggleSidebar={toggleSidebar} />
        <div className="w-full  min-h-full h-auto mb-[50px]  bg-backgroundColor p-[32px] max-md:p-[16px] max-md:pt-[32px] max-2xl:p-[25.6px] flex flex-col gap-[32px] max-2xl:gap-[25.6px] max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-md:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl ">
          <PortfoliosTable />
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
