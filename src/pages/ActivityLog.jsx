import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const ActivityLog = () => {
  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"ActivityLog"} />
      </div>
    </div>
  );
};

export default ActivityLog;
