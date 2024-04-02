import React from "react";
import { accountIcon, arrowDown, bellIcon } from "../assets/icons";

const Topbar = ({ title }) => {
  return (
    <div className="max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-sm:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl  z-[2]  h-[76px] px-[32px] max-2xl:h-[60.8px] max-2xl:px-[25.6px]   w-full border border-l-0 border-[#D4D4D4] bg-white flex items-center justify-between sticky top-0">
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
          <div className="font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
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
  );
};

export default Topbar;
// import React from "react";
// import { accountIcon, arrowDown, bellIcon } from "../assets/icons";

// const Topbar = ({ title }) => {
//   return (
//     <div className="z-[2]  h-[76px] px-[32px] max-2xl:h-[60.8px] max-2xl:px-[25.6px] max-lg:h-[52.38px] max-lg:px-[21.67px] max-md:h-[39.29px] max-md:px-[16.25px] max-sm:h-[32.24px] max-sm:px-[13.54px]  w-full border border-[#D4D4D4] bg-white flex items-center justify-between sticky top-0">
//       <div className="text-blackTextColor text-[32px] leading-[40px] max-2xl:text-[25.6px]  max-2xl:leading-[32px] max-lg:text-[21.67px]  max-lg:leading-[27.1px] max-md:text-[16.25px]  max-md:leading-[20.3px] max-sm:text-[13.54px]  max-sm:leading-[16.9px] font-[700]">
//         {title}
//       </div>
//       <div className="flex gap-[32px] max-2xl:gap-[25.6px] max-lg:gap-[21.67px] max-md:gap-[16.25px] max-sm:gap-[13.54px] cursor-pointer">
//         <img
//           src={bellIcon}
//           alt="notifications"
//           className="cursor-pointer max-2xl:h-[25.6px] max-2xl:w-[25.6px] max-lg:h-[21.67px] max-lg:w-[21.67px] max-md:h-[16.25px] max-md:w-[16.25px] max-sm:h-[13.54px] max-sm:w-[13.54px]"
//         />
//         <div className="flex gap-[8px] max-2xl:gap-[6.4px] max-lg:gap-[5.42px] max-md:gap-[4.06px] max-sm:gap-[3px] items-center">
//           <img
//             src={accountIcon}
//             alt="account"
//             className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] max-lg:h-[16.25px] max-lg:w-[16.25px] max-md:h-[12.19px] max-md:w-[12.19px]  max-sm:h-[10.16px] max-sm:w-[10.16px]"
//           />
//           <div className="font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] max-lg:text-[10.84px] max-lg:leading-[19px] max-md:text-[8.13px] max-md:leading-[14.2px] max-sm:text-[6.77px] max-sm:leading-[11.9px] text-nowrap">
//             Bonmichael Udeh
//           </div>
//           <img
//             src={arrowDown}
//             alt="arrowDonw"
//             className="max-2xl:h-[12.8px] max-2xl:w-[12.8px]  max-lg:h-[10.84px] max-lg:w-[10.84px] max-md:h-[8.13px] max-md:w-[8.13px] max-sm:h-[6.77px] max-sm:w-[6.77px] text-blackTextColor"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
