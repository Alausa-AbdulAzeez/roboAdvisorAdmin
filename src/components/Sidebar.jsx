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
    <div className="max-sm:w-0 h-full max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-sm:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl  w-[271px] max-2xl:w-[216.8px]  bg-white border-r border-borderColor">
      <div className="mx-auto w-[207px] max-2xl:w-[165.6px] h-[64px] flex items-center text-left text-mainBlue text-[24px] max-2xl:text-[19.2px] font-[900] leading-[28px] max-2xl:leading-[22.4px] tracking-[-0.41px] max-2xl:tracking-[-0.33px]">
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
        <div className="w-full h-[60px] max-2xl:h-[48px] flex items-center gap-[21px] max-2xl:gap-[16.8px]">
          <InactiveSidebarBorder />
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-[8px] max-2xl:gap[6.4px] items-center">
              <Icon
                icon="icon-park-solid:activity-source"
                className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] text-blackTextColor`}
              />

              <div
                className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] font-[400] text-blackTextColor`}
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
//       className="h-[36px] max-2xl:h-[28.8px] max-lg:h-[24.38px] max-md:h-[18.29px] max-sm:h-[15.24px]
//   w-[9px] max-2xl:w-[7.2px] max-lg:w-[6.1px] max-md:w-[4.57px] max-sm:w-[3.81px] bg-mainBlue rounded-[56px]"
//     ></div>
//   );
// };
// const InactiveSidebarBorder = () => {
//   return (
//     <div
//       className="h-[36px] max-2xl:h-[28.8px] max-lg:h-[24.38px] max-md:h-[18.29px] max-sm:h-[15.24px]
//   w-[9px] max-2xl:w-[7.2px] max-lg:w-[6.1px] max-md:w-[4.57px] max-sm:w-[3.81px] bg-none rounded-[56px]"
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
//     <div className="h-full  w-[271px] max-2xl:w-[216.8px]  max-lg:w-[183.53px] max-md:w-[137.65px] max-sm:w-[114.71px] bg-white border-r border-borderColor">
//       <div
//         className="mx-auto w-[207px] max-2xl:w-[165.6px]  max-lg:w-[140.19px] max-md:w-[105.14px] max-sm:w-[87.62px] h-[64px] max-2xl:h-[51.8px] max-xl:h-[54.48px] max-lg:h-[43.38px] max-md:h-[33.29px] max-sm:h-[27.24px]
//  flex items-center text-left text-mainBlue text-[24px] max-2xl:text-[19.2px]  max-lg:text-[16.25px] max-md:text-[12.19px] max-sm:text-[10.16px]
//  font-[900] leading-[28px] max-2xl:leading-[22.4px]   max-lg:leading-[19px] max-md:leading-[14.2px] max-sm:leading-[11.9px]
//  tracking-[-0.41px] max-2xl:tracking-[-0.33px]"
//       >
//         <Link to={"/"}>Robovisor</Link>
//       </div>
//       <div
//         className="mt-[16px] max-2xl:mt-[12.8px] max-lg:mt-[10.84px] max-md:mt-[8.13px] max-sm:mt-[6.77px]
//  w-full"
//       >
//         {sidebarData?.map((singleSidebarData) => (
//           <NavLink to={singleSidebarData.url}>
//             {({ isActive }) => (
//               <div
//                 className="w-full h-[60px] max-2xl:h-[48px] max-lg:h-[40.67px] max-md:h-[31.25px] max-sm:h-[25.54x]
//  flex items-center gap-[21px] max-2xl:gap-[16.8px]  max-lg:gap-[13.58px] max-md:gap-[9.68px] max-sm:gap-[7.74px]"
//               >
//                 {isActive ? <ActiveSidebarBorder /> : <InactiveSidebarBorder />}

//                 <div
//                   className="flex gap-[8px] max-2xl:gap[6.4px] max-lg:gap-[5.42px] max-md:gap-[4.06px] max-sm:gap-[3.39px]
//   items-center"
//                 >
//                   <Icon
//                     icon={singleSidebarData.iconName}
//                     className={`w-[24px] max-2xl:w-[19.2px] max-lg:w-[16.25px] max-md:w-[12.19px] max-sm:w-[10.16px]
//  h-[24px] max-2xl:h-[19.2px] max-lg:h-[16.25px] max-md:h-[12.19px] max-sm:h-[10.16px] ${
//    isActive ? "text-mainBlue" : "text-blackTextColor"
//  }`}
//                   />
//                   <div
//                     className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px]  max-lg:text-[10.84px] max-lg:leading-[19px] max-md:text-[8.13px] max-md:leading-[14.2px] max-sm:text-[6.77px] max-sm:leading-[11.9px] font-[400]   ${
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
//           className="w-full h-[60px] max-2xl:h-[48px] max-lg:h-[40.67px] max-md:h-[31.25px] max-sm:h-[25.54x]
//  flex items-center gap-[21px] max-2xl:gap-[16.8px]  max-lg:gap-[13.58px] max-md:gap-[9.68px] max-sm:gap-[7.74px]"
//         >
//           <InactiveSidebarBorder />
//           <div className="flex w-full justify-between items-center">
//             <div
//               className="flex gap-[8px] max-2xl:gap[6.4px] max-lg:gap-[5.42px] max-md:gap-[4.06px] max-sm:gap-[3.39px]
//   items-center"
//             >
//               <Icon
//                 icon="icon-park-solid:activity-source"
//                 className={`w-[24px] max-2xl:w-[19.2px] max-lg:w-[16.25px] max-md:w-[12.19px] max-sm:w-[10.16px]
//  h-[24px] max-2xl:h-[19.2px] max-lg:h-[16.25px] max-md:h-[12.19px] max-sm:h-[10.16px] text-blackTextColor`}
//               />

//               <div
//                 className={`text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px]  max-lg:text-[10.84px] max-lg:leading-[19px] max-md:text-[8.13px] max-md:leading-[14.2px] max-sm:text-[6.77px] max-sm:leading-[11.9px] font-[400] text-blackTextColor`}
//               >
//                 Activity Log
//               </div>
//             </div>
//             <img
//               src={arrowDown}
//               alt="arrowDown"
//               className="mr-[32px] max-2xl:mr-[25.6px] max-2xl:h-[12.8px] max-2xl:w-[12.8px] max-lg:mr-[21.67px] max-lg:h-[10.84px] max-lg:w-[10.84px] max-md:mr-[16.25px] max-md:h-[8.13px] max-md:w-[8.13px] max-sm:mr-[9.39px] max-sm:h-[6.77px] max-sm:w-[6.77px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
