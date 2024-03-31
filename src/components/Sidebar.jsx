import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
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
  return (
    <div className="h-[36px] max-2xl:h-[28.8px]  w-[9px] max-2xl:w-[7.2px] bg-mainBlue rounded-[56px]"></div>
  );
};
const InactiveSidebarBorder = () => {
  return (
    <div className="h-[36px] max-2xl:h-[28.8px] w-[9px]  max-2xl:w-[7.2px] bg-none rounded-[56px]"></div>
  );
};

const Sidebar = () => {
  // Sidebar data
  const sidebarData = [
    {
      title: "Dashboard",
      activeImage: dashboarrdActive,
      inActiveImage: dashboardInactive,
      iconName: "mage:dashboard-chart-fill",
      url: "/",
    },
    {
      title: "Users",
      activeImage: usersActive,
      inActiveImage: usersInactive,
      iconName: "heroicons:user-20-solid",
      url: "/users",
    },
    {
      title: "Portfolios",
      activeImage: portfoliosActive,
      inActiveImage: portfoliosInactive,
      iconName: "dashicons:portfolio",
      url: "/portfolios",
    },
    {
      title: "Transactions",
      activeImage: transactionsActive,
      inActiveImage: transactionsInactive,
      iconName: "icon-park-solid:transaction",
      url: "/transactions",
    },
  ];

  return (
    <div className="h-full max-2xl:w-[216.8px] w-[271px] bg-white border-r border-borderColor">
      <div className="mx-auto w-[207px] max-2xl:w-[165.6px] h-[64px] max-2xl:h-[51.8px] flex items-center text-left text-mainBlue text-[24px] max-2xl:text-[19.2px font-[900] leading-[28px] max-2xl:leading-[22.4px] tracking-[-0.41px] max-2xl:tracking-[-0.33px]">
        <Link to={"/"}>Robovisor</Link>
      </div>
      <div className="mt-[16px] max-2xl:mt-[12.8px] w-full">
        {sidebarData?.map((singleSidebarData) => (
          <NavLink to={singleSidebarData.url}>
            {({ isActive }) => (
              <div className="w-full h-[60px] max-2xl:h-[48px] flex items-center gap-[21px] max-2xl:gap-[16.8px]">
                {isActive ? <ActiveSidebarBorder /> : <InactiveSidebarBorder />}

                <div className="flex gap-[8px] max-2xl:gap[6.4px] items-center">
                  <Icon
                    icon={singleSidebarData.iconName}
                    className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] ${
                      isActive ? "text-mainBlue" : "text-blackTextColor"
                    }`}
                  />
                  {/* <img
                    src={
                      isActive
                        ? singleSidebarData.activeImage
                        : singleSidebarData.inActiveImage
                    }
                    alt="dashboardIcon"
                  /> */}
                  <div
                    className={`text-[16px] max-2xl:text-[12.8px] font-[400] leading-[28px] max-2xl:leading-[22.4px] ${
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
        <div className="w-full h-[60px] max-2xl:h-[48px] flex items-center gap-[21px] max-2xl:gap-[16.8px]">
          <InactiveSidebarBorder />
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-[8px] max-2xl:gap[6.4px] items-center">
              <Icon
                icon="icon-park-solid:activity-source"
                className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] text-blackTextColor`}
              />

              <div
                className={`text-[16px] max-2xl:text-[12.8px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor`}
              >
                Activity Log
              </div>
            </div>
            <img
              src={arrowDown}
              alt="arrowDown"
              className="mr-[32px] max-2xl:mr-[25.6px] max-2xl:h-[12.8px] max-2xl:w-[12.8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
