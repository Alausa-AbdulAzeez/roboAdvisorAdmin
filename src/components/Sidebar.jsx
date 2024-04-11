import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
    <div
      className="h-[36px] max-2xl:h-[28.8px] 
  w-[9px] max-2xl:w-[7.2px]  bg-mainBlue rounded-[56px]"
    ></div>
  );
};
const InactiveSidebarBorder = () => {
  return (
    <div
      className="h-[36px] max-2xl:h-[28.8px] 
  w-[9px] max-2xl:w-[7.2px]  bg-none rounded-[56px]"
    ></div>
  );
};

const Sidebar = ({ isSidebarOpen, toggleSidebar, setIsSidebarOpen }) => {
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
  const location = useLocation();
  const navigte = useNavigate();

  // Activity log state
  const [isActivityLogOpen, setIsActivityLogOpen] = useState(
    sessionStorage.getItem("activityLogStatus")
  );
  // Activity log state
  const [isActivityLogParentActive, setIsActivityLogParentActive] = useState(
    location.pathname.includes("/activityLog")
  );

  // Activity log sub links
  const activityLogSubLinks = [
    {
      title: "Admin Activity Log",
      url: "/activityLog/admin",
    },
    {
      title: "User Activity Log",
      url: "/activityLog/users",
    },
  ];

  // Function to toggle activitylog status
  const toggleActivityLog = () => {
    setIsActivityLogOpen(!isActivityLogOpen);
    if (!location.pathname.includes("/activityLog")) {
      navigte("/activityLog/admin");
    }
  };
  // End of function to toggle activitylog status

  useEffect(() => {
    // Check if the current location matches any activity log sublink
    const isActivityLogSublinkActive =
      location.pathname.includes("/activityLog");
    if (!isActivityLogOpen) {
      setIsActivityLogParentActive(isActivityLogSublinkActive);
    }
    // Update the state of Activity Log based on whether any sublink is active
  }, [location]);

  // Useeffect to store activity log status
  useEffect(() => {
    sessionStorage.setItem("activityLogStatus", isActivityLogOpen);
  }, [isActivityLogOpen]);

  // USE EFFECT TO CHECK SCREEN SIZE AND SET SIDEBAR STATE
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Update sidebarOpen based on screen size
      if (isSidebarOpen && window.innerWidth > 1023) {
        setIsSidebarOpen(false); // You can adjust the threshold as needed
      }
    };

    // Initial call to handleResize
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]); // Empty dependency array ensures the effect runs only once during mount

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`${
          isSidebarOpen
            ? "fixed top-0 left-0 h-full w-[271px] max-2xl:w-[216.8px] bg-white border-r border-borderColor z-50"
            : "max-lg:w-0 h-full block w-[271px] max-2xl:w-[216.8px]  bg-white border-r border-borderColor"
        } `}
      >
        {/* <div
        className={`${
          isSidebarOpen ? "fixed" : "hidden"
        } top-0 left-0 h-full maxw-[271px] max-2xl:w-[216.8px] bg-white border-r border-borderColor z-50`}
      > */}
        <div className="mx-auto w-[207px] max-2xl:w-[165.6px] h-[64px] flex items-center text-left text-mainBlue text-[24px] max-2xl:text-[19.2px] font-[900] leading-[28px] max-2xl:leading-[22.4px] tracking-[-0.41px] max-2xl:tracking-[-0.33px]">
          <Link to={"/"}>Robovisor</Link>
        </div>
        <div className="mt-[16px] max-2xl:mt-[12.8px] w-full">
          {sidebarData?.map((singleSidebarData) => (
            <NavLink to={singleSidebarData.url}>
              {({ isActive }) => (
                <div className="w-full h-[60px] max-2xl:h-[48px] flex items-center gap-[21px] max-2xl:gap-[16.8px]">
                  {isActive ? (
                    <ActiveSidebarBorder />
                  ) : (
                    <InactiveSidebarBorder />
                  )}

                  <div className="flex gap-[8px] max-2xl:gap[6.4px] items-center">
                    <Icon
                      icon={singleSidebarData.iconName}
                      className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] ${
                        isActive ? "text-mainBlue" : "text-blackTextColor"
                      }`}
                    />
                    <div
                      className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] font-[400] ${
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
          <div
            className="w-full cursor-pointer h-[60px] max-2xl:h-[48px] flex items-center gap-[21px] max-2xl:gap-[16.8px]"
            onClick={toggleActivityLog}
          >
            {isActivityLogParentActive ? (
              <ActiveSidebarBorder />
            ) : (
              <InactiveSidebarBorder />
            )}
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-[8px] max-2xl:gap[6.4px] items-center">
                <Icon
                  icon="icon-park-solid:activity-source"
                  className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] ${
                    isActivityLogParentActive
                      ? "text-mainBlue"
                      : "text-blackTextColor"
                  } `}
                />

                <div
                  className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] font-[400] ${
                    isActivityLogParentActive
                      ? "text-mainBlue"
                      : "text-blackTextColor"
                  } `}
                >
                  Activity Log
                </div>
              </div>
              <Icon
                icon="ep:arrow-up-bold"
                className={`mr-[32px] max-2xl:mr-[25.6px] max-2xl:h-[12.8px] max-2xl:w-[12.8px] ${
                  isActivityLogParentActive
                    ? "transform rotate-180 text-mainBlue"
                    : "text-blackTextColor"
                }`}
              />
            </div>
          </div>
          {isActivityLogOpen &&
            activityLogSubLinks?.map((activityLogSubLink) => {
              return (
                <NavLink to={activityLogSubLink.url}>
                  {({ isActive }) => (
                    <div className="w-full pl-[64px] max-2xl:pl-[51.2px]  h-[60px] max-2xl:h-[48px] flex justify-between items-center gap-[21px] max-2xl:gap-[16.8px]">
                      <div className="flex gap-[8px] max-2xl:gap[6.4px] items-center">
                        <div
                          className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] font-[400] ${
                            isActive ? "text-mainBlue" : "text-blackTextColor"
                          }`}
                        >
                          {activityLogSubLink.title}
                        </div>
                      </div>
                      {isActive ? (
                        <ActiveSidebarBorder />
                      ) : (
                        <InactiveSidebarBorder />
                      )}
                    </div>
                  )}
                </NavLink>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import {
//   activityLogInactive,
//   arrowDown,
//   dashboardInactive,
//   dashboarrdActive,
//   portfoliosActive,
//   portfoliosInactive,
//   transactionsActive,
//   transactionsInactive,
//   usersActive,
//   usersInactive,
// } from "../assets/icons";

// const ActiveSidebarBorder = () => {
//   return (
//     <div
//       className="h-[36px] max-2xl:h-[28.8px] max-lg:h-[24.38px] max-md:h-[18.29px] max-md:h-[15.24px]
//   w-[9px] max-2xl:w-[7.2px] max-lg:w-[6.1px] max-md:w-[4.57px] max-md:w-[3.81px] bg-mainBlue rounded-[56px]"
//     ></div>
//   );
// };
// const InactiveSidebarBorder = () => {
//   return (
//     <div
//       className="h-[36px] max-2xl:h-[28.8px] max-lg:h-[24.38px] max-md:h-[18.29px] max-md:h-[15.24px]
//   w-[9px] max-2xl:w-[7.2px] max-lg:w-[6.1px] max-md:w-[4.57px] max-md:w-[3.81px] bg-none rounded-[56px]"
//     ></div>
//   );
// };

// const Sidebar = () => {
//   // Sidebar data
//   const sidebarData = [
//     {
//       title: "Dashboard",
//       activeImage: dashboarrdActive,
//       inActiveImage: dashboardInactive,
//       iconName: "mage:dashboard-chart-fill",
//       url: "/",
//     },
//     {
//       title: "Users",
//       activeImage: usersActive,
//       inActiveImage: usersInactive,
//       iconName: "heroicons:user-20-solid",
//       url: "/users",
//     },
//     {
//       title: "Portfolios",
//       activeImage: portfoliosActive,
//       inActiveImage: portfoliosInactive,
//       iconName: "dashicons:portfolio",
//       url: "/portfolios",
//     },
//     {
//       title: "Transactions",
//       activeImage: transactionsActive,
//       inActiveImage: transactionsInactive,
//       iconName: "icon-park-solid:transaction",
//       url: "/transactions",
//     },
//   ];

//   return (
//     <div className="h-full  w-[271px] max-2xl:w-[216.8px]  max-lg:w-[183.53px] max-md:w-[137.65px] max-md:w-[114.71px] bg-white border-r border-borderColor">
//       <div
//         className="mx-auto w-[207px] max-2xl:w-[165.6px]  max-lg:w-[140.19px] max-md:w-[105.14px] max-md:w-[87.62px] h-[64px] max-2xl:h-[51.8px] max-xl:h-[54.48px] max-lg:h-[43.38px] max-md:h-[33.29px] max-md:h-[27.24px]
//  flex items-center text-left text-mainBlue text-[24px] max-2xl:text-[19.2px]  max-lg:text-[16.25px] max-md:text-[12.19px] max-md:text-[10.16px]
//  font-[900] leading-[28px] max-2xl:leading-[22.4px]   max-lg:leading-[19px] max-md:leading-[14.2px] max-md:leading-[11.9px]
//  tracking-[-0.41px] max-2xl:tracking-[-0.33px]"
//       >
//         <Link to={"/"}>Robovisor</Link>
//       </div>
//       <div
//         className="mt-[16px] max-2xl:mt-[12.8px] max-lg:mt-[10.84px] max-md:mt-[8.13px] max-md:mt-[6.77px]
//  w-full"
//       >
//         {sidebarData?.map((singleSidebarData) => (
//           <NavLink to={singleSidebarData.url}>
//             {({ isActive }) => (
//               <div
//                 className="w-full h-[60px] max-2xl:h-[48px] max-lg:h-[40.67px] max-md:h-[31.25px] max-md:h-[25.54x]
//  flex items-center gap-[21px] max-2xl:gap-[16.8px]  max-lg:gap-[13.58px] max-md:gap-[9.68px] max-md:gap-[7.74px]"
//               >
//                 {isActive ? <ActiveSidebarBorder /> : <InactiveSidebarBorder />}

//                 <div
//                   className="flex gap-[8px] max-2xl:gap[6.4px] max-lg:gap-[5.42px] max-md:gap-[4.06px] max-md:gap-[3.39px]
//   items-center"
//                 >
//                   <Icon
//                     icon={singleSidebarData.iconName}
//                     className={`w-[24px] max-2xl:w-[19.2px] max-lg:w-[16.25px] max-md:w-[12.19px] max-md:w-[10.16px]
//  h-[24px] max-2xl:h-[19.2px] max-lg:h-[16.25px] max-md:h-[12.19px] max-md:h-[10.16px] ${
//    isActive ? "text-mainBlue" : "text-blackTextColor"
//  }`}
//                   />
//                   <div
//                     className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px]  max-lg:text-[10.84px] max-lg:leading-[19px] max-md:text-[8.13px] max-md:leading-[14.2px] max-md:text-[6.77px] max-md:leading-[11.9px] font-[400]   ${
//                       isActive ? "text-mainBlue" : "text-blackTextColor"
//                     }`}
//                   >
//                     {singleSidebarData.title}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </NavLink>
//         ))}
//         <div
//           className="w-full h-[60px] max-2xl:h-[48px] max-lg:h-[40.67px] max-md:h-[31.25px] max-md:h-[25.54x]
//  flex items-center gap-[21px] max-2xl:gap-[16.8px]  max-lg:gap-[13.58px] max-md:gap-[9.68px] max-md:gap-[7.74px]"
//         >
//           <InactiveSidebarBorder />
//           <div className="flex w-full justify-between items-center">
//             <div
//               className="flex gap-[8px] max-2xl:gap[6.4px] max-lg:gap-[5.42px] max-md:gap-[4.06px] max-md:gap-[3.39px]
//   items-center"
//             >
//               <Icon
//                 icon="icon-park-solid:activity-source"
//                 className={`w-[24px] max-2xl:w-[19.2px] max-lg:w-[16.25px] max-md:w-[12.19px] max-md:w-[10.16px]
//  h-[24px] max-2xl:h-[19.2px] max-lg:h-[16.25px] max-md:h-[12.19px] max-md:h-[10.16px] text-blackTextColor`}
//               />

//               <div
//                 className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px]  max-lg:text-[10.84px] max-lg:leading-[19px] max-md:text-[8.13px] max-md:leading-[14.2px] max-md:text-[6.77px] max-md:leading-[11.9px] font-[400] text-blackTextColor`}
//               >
//                 Activity Log
//               </div>
//             </div>
//             <img
//               src={arrowDown}
//               alt="arrowDown"
//               className="mr-[32px] max-2xl:mr-[25.6px] max-2xl:h-[12.8px] max-2xl:w-[12.8px] max-lg:mr-[21.67px] max-lg:h-[10.84px] max-lg:w-[10.84px] max-md:mr-[16.25px] max-md:h-[8.13px] max-md:w-[8.13px] max-md:mr-[9.39px] max-md:h-[6.77px] max-md:w-[6.77px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
