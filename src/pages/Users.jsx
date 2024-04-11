import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import GeneralTable from "../components/GeneralTable";
import UserPortfolio from "../components/UserPortfolio";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import GoalPerformance from "../components/GoalPerformance";

const Users = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const queryParams = new URLSearchParams(location.search);
  // // let uiToBeDisplayed = queryParams.get("uiToBeDisplayed");

  // // State that handles UI to be displayed
  // const [uiToBeDisplayed, setUiToBeDisplayed] = useState(
  //   queryParams.get("uiToBeDisplayed")
  // );

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // End of function to toggle sidebar

  // Function that handles the UI to be displayed
  // const handleUiToBeDisplayed = (requestedUi) => {
  //   setUiToBeDisplayed(requestedUi);
  //   // uiToBeDisplayed = requestedUi;
  // };
  // End of function that handles the UI to be displayed

  // Function to render certain component based on current page the user requests
  const renderPageUi = () => {
    switch (uiToBeDisplayed) {
      case "userList":
        return (
          <GeneralTable
            tableHeaders={tableHeaders}
            title={title}
            items={items}
            handleUiToBeDisplayed={handleUiToBeDisplayed}
          />
        );
      case "userPortfolio":
        return (
          <UserPortfolio
            tableHeaders={tableHeaders}
            title={title}
            items={items}
            handleUiToBeDisplayed={handleUiToBeDisplayed}
          />
        );
      case "goalPerformance":
        return (
          <GoalPerformance handleUiToBeDisplayed={handleUiToBeDisplayed} />
        );

      default:
        return (
          <GeneralTable
            tableHeaders={tableHeaders}
            title={title}
            items={items}
            handleUiToBeDisplayed={handleUiToBeDisplayed}
          />
        );
    }
  };

  // useEffect(() => {
  //   console.log(uiToBeDisplayed);
  //   // Update URL query parameter when UI state changes
  //   navigate(`?uiToBeDisplayed=${uiToBeDisplayed}`, { replace: true });
  // }, [uiToBeDisplayed, navigate]);
  const name = "Your name";
  return (
    <>
      <div className="h-[100vh] flex bg-backgroundColor ">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet context={[toggleSidebar]} />
      </div>
    </>
  );
};

export default Users;
