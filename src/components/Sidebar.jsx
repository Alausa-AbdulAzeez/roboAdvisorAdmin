import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  activityLogInactive,
  arrowDown,
  dashboardInactive,
  dashboarrdActive,
  portfoliosActive,
  portfoliosInactive,
  transactionsActive,
  transactionsInactive,
  usersActive,
  usersInactive,
} from "../assets/icons";

const ActiveSidebarBorder = () => {
  return <div className="h-[36px] w-[9px] bg-mainBlue rounded-[56px]"></div>;
};
const InactiveSidebarBorder = () => {
  return <div className="h-[36px] w-[9px] bg-none rounded-[56px]"></div>;
};

const Sidebar = () => {
  // Sidebar data
  const sidebarData = [
    {
      title: "Dashboard",
      activeImage: dashboarrdActive,
      inActiveImage: dashboardInactive,
      url: "/",
    },
    {
      title: "Users",
      activeImage: usersActive,
      inActiveImage: usersInactive,
      url: "/users",
    },
    {
      title: "Portfolios",
      activeImage: portfoliosActive,
      inActiveImage: portfoliosInactive,
      url: "/portfolios",
    },
    {
      title: "Transactions",
      activeImage: transactionsActive,
      inActiveImage: transactionsInactive,
      url: "/transactions",
    },
  ];

  return (
    <div className="zoom h-full w-[271px] bg-white border-r border-borderColor">
      <div className="mx-auto w-[207px] h-[64px] flex items-center text-left text-mainBlue text-[24px] font-[900] leading-[28px]">
        <Link to={"/"}>Robovisor</Link>
      </div>
      <div className="mt-[16px] w-full">
        {sidebarData?.map((singleSidebarData) => (
          <NavLink to={singleSidebarData.url}>
            {({ isActive }) => (
              <div className="w-full h-[60px] flex items-center gap-[21px]">
                {isActive ? <ActiveSidebarBorder /> : <InactiveSidebarBorder />}

                <div className="flex gap-[8px]">
                  <img
                    src={
                      isActive
                        ? singleSidebarData.activeImage
                        : singleSidebarData.inActiveImage
                    }
                    alt="dashboardIcon"
                  />
                  <div
                    className={`text-[16px] font-[400] leading-[28px] ${
                      isActive ? "text-mainBlue" : "text-blackTextColor"
                    }`}
                  >
                    {singleSidebarData.title}
                  </div>
                </div>
              </div>
            )}
          </NavLink>
        ))}
        <div className="w-full h-[60px] flex items-center gap-[21px]">
          <InactiveSidebarBorder />
          <div className="flex w-full justify-between">
            <div className="flex gap-[8px]">
              <img src={activityLogInactive} alt="activityLogInactive" />
              <div
                className={`text-[16px] font-[400] leading-[28px] text-blackTextColor`}
              >
                Activity Log
              </div>
            </div>
            <img src={arrowDown} alt="arrowDown" className="mr-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
