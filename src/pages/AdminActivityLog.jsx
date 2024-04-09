import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TransactionsTable from "../components/TransactionsTable";
import ActivitiesTable from "../components/ActivitiesTable";

const AdminActivityLog = () => {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // End of function to toggle sidebar

  // DUMMY DATA FOR TABLE HEADERS
  const tableHeaders = [
    "Log ID",
    "Admin ID",
    "Activity Type",
    "Description",
    "IP Address",
    "Timestamp",
    "more",
  ];
  const activities = [
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
    {
      logId: 1,
      adminId: 3456,
      activityType: "User Management",
      description: "Deactivate User",
      ipAddress: "192.168.0.1",
      timeStamp: "23:04 12/03/2024",
    },
  ];

  // TABLE TITLE
  const title = "Admin Activity Log";

  // Demo data
  // Example items, to simulate fetching from another resources.

  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Activity Log"} toggleSidebar={toggleSidebar} />
        <div className="w-full  min-h-full h-auto mb-[50px] bg-backgroundColor flex flex-col gap-[32px] max-2xl:gap-[25.6px] max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-md:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl ">
          <ActivitiesTable
            tableHeaders={tableHeaders}
            title={title}
            items={activities}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminActivityLog;
