import React from "react";
import { accountIcon, arrowDown, bellIcon } from "../assets/icons";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Topbar = ({ title, toggleSidebar, hasIcon }) => {
  console.log(title);
  console.log(hasIcon);
  return (
    <>
      <div className="hidden z-[3] max-lg:flex flex-col p-[16px] pt-0 gap-[16px] w-full border border-l-0 border-[#D4D4D4] bg-white sticky top-0 ">
        <div className="flex justify-between">
          <div
            className="w-[32px]  h-[32px] flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <Icon
              icon="bitcoin-icons:menu-filled"
              className={` text-blackTextColor w-full h-full`}
            />
          </div>
          <div className=" text-mainBlue text-[20px] font-[900] leading-[28px] tracking-[-0.41px]">
            <Link to={"/"}>Robovisor</Link>
          </div>
          <div className="w-[32px]  h-[32px] flex items-center justify-center opacity-0 invisible">
            <Icon
              icon="bitcoin-icons:menu-filled"
              className={` text-blackTextColor w-full h-full`}
            />
          </div>
        </div>
        <div className="z-[3] flex items-center justify-between ">
          <div className="text-blackTextColor text-[32px] leading-[40px] max-2xl:text-[25.6px]  max-2xl:leading-[32px] font-[700]">
            {title}
          </div>
          <div className="flex gap-[32px] max-2xl:gap-[25.6px] cursor-pointer">
            <img
              src={bellIcon}
              alt="notifications"
              className="cursor-pointer max-2xl:h-[25.6px] max-2xl:w-[25.6px] "
            />
            <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
              <img
                src={accountIcon}
                alt="account"
                className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] "
              />
              <div className=" max-md:hidden font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
                Bonmichael Udeh
              </div>
              <img
                src={arrowDown}
                alt="arrowDonw"
                className="max-2xl:h-[12.8px] max-2xl:w-[12.8px]   text-blackTextColor"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:hidden max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-md:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl  z-[3]  h-[76px] px-[32px] max-2xl:h-[60.8px] max-2xl:px-[25.6px]   w-full border border-l-0 border-[#D4D4D4] bg-white flex items-center justify-between sticky top-0">
        <div className="hidden max-md:flex h-[28px] bg-white"></div>
        <div className="text-blackTextColor flex items-center gap-[8px] text-[32px] leading-[40px] max-2xl:text-[25.6px]  max-2xl:leading-[32px] font-[700]">
          {hasIcon && (
            <Link to={"/users/portfolio"}>
              <div className="w-[16px] h-[16px] flex items-center justify-center cursor-pointer ">
                <Icon
                  icon="mynaui:arrow-left"
                  className={` text-blackTextColor w-full h-full`}
                />
              </div>
            </Link>
          )}
          <span>{title}</span>
        </div>
        <div className="flex gap-[32px] max-2xl:gap-[25.6px] cursor-pointer">
          <img
            src={bellIcon}
            alt="notifications"
            className="cursor-pointer max-2xl:h-[25.6px] max-2xl:w-[25.6px] "
          />
          <div className="flex gap-[8px] max-2xl:gap-[6.4px] items-center">
            <img
              src={accountIcon}
              alt="account"
              className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] "
            />
            <div className=" max-md:hidden font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
              Bonmichael Udeh
            </div>
            <img
              src={arrowDown}
              alt="arrowDonw"
              className="max-2xl:h-[12.8px] max-2xl:w-[12.8px]   text-blackTextColor"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
// import React from "react";
// import { accountIcon, arrowDown, bellIcon } from "../assets/icons";

// const Topbar = ({ title }) => {
//   return (
//     <div className="z-[2]  h-[76px] px-[32px] max-2xl:h-[60.8px] max-2xl:px-[25.6px] max-lg:h-[52.38px] max-lg:px-[21.67px] max-md:h-[39.29px] max-md:px-[16.25px] max-md:h-[32.24px] max-md:px-[13.54px]  w-full border border-[#D4D4D4] bg-white flex items-center justify-between sticky top-0">
//       <div className="text-blackTextColor text-[32px] leading-[40px] max-2xl:text-[25.6px]  max-2xl:leading-[32px] max-lg:text-[21.67px]  max-lg:leading-[27.1px] max-md:text-[16.25px]  max-md:leading-[20.3px] max-md:text-[13.54px]  max-md:leading-[16.9px] font-[700]">
//         {title}
//       </div>
//       <div className="flex gap-[32px] max-2xl:gap-[25.6px] max-lg:gap-[21.67px] max-md:gap-[16.25px] max-md:gap-[13.54px] cursor-pointer">
//         <img
//           src={bellIcon}
//           alt="notifications"
//           className="cursor-pointer max-2xl:h-[25.6px] max-2xl:w-[25.6px] max-lg:h-[21.67px] max-lg:w-[21.67px] max-md:h-[16.25px] max-md:w-[16.25px] max-md:h-[13.54px] max-md:w-[13.54px]"
//         />
//         <div className="flex gap-[8px] max-2xl:gap-[6.4px] max-lg:gap-[5.42px] max-md:gap-[4.06px] max-md:gap-[3px] items-center">
//           <img
//             src={accountIcon}
//             alt="account"
//             className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] max-lg:h-[16.25px] max-lg:w-[16.25px] max-md:h-[12.19px] max-md:w-[12.19px]  max-md:h-[10.16px] max-md:w-[10.16px]"
//           />
//           <div className="font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] max-lg:text-[10.84px] max-lg:leading-[19px] max-md:text-[8.13px] max-md:leading-[14.2px] max-md:text-[6.77px] max-md:leading-[11.9px] text-nowrap">
//             Bonmichael Udeh
//           </div>
//           <img
//             src={arrowDown}
//             alt="arrowDonw"
//             className="max-2xl:h-[12.8px] max-2xl:w-[12.8px]  max-lg:h-[10.84px] max-lg:w-[10.84px] max-md:h-[8.13px] max-md:w-[8.13px] max-md:h-[6.77px] max-md:w-[6.77px] text-blackTextColor"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
