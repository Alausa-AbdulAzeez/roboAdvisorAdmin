import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { deposit, withdrawal } from "../assets/icons";

const ActivitiesDetailsModal = ({
  onClose,
  selectedActivity,
  type,
  userType,
  title,
}) => {
  return (
    <div className="w-[500px] min-h-[450px] max-lg:w-[90%] max-lg:max-w-[398px]  h-[475px] max-h-[500px] bg-white z-[100] overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px]">
      <div className="flex justify-between">
        <div className="text-mainBlue leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] font-[700] cursor-pointer hover:underline">
          Export CSV
        </div>
        <Icon
          onClick={onClose}
          icon="ic:round-close"
          className={`w-[16px] cursor-pointer max-2xl:w-[12.8px] h-[16px] max-2xl:h-[12.8px] text-blackTextColor`}
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center">
        <div className="text-[20px] max-2xl:text-[16px] font-[600] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor ">
          {title}
        </div>
        <div className="flex items-center justify-center text-silverTextColor text-[16px] max-2xl:text-[12.8px] font-[400] border border-borderColor min-w-[180px] h-[36px] rounded-[200px] max-2xl:min-w-[144px] px-2 max-2xl:h-[28.8px]">
          Log ID: {selectedActivity?.logId}
        </div>
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>

      <div className="bg-[#f8f8f8] h-[337px] justify-between max-2xl:h-[270px] p-[16px] flex flex-col gap-[24px] rounded-[8px] max-2xl:rounded-[6.4px] max-2xl:gap-[19.2px]">
        <div className="flex">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              {userType} ID
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {type === "user"
                ? selectedActivity?.userId
                : selectedActivity?.adminId}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              ACTIVITY TYPE
            </div>

            <div className="text-[16px] flex items-center max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedActivity?.activityType}
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              IP ADDRESS
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedActivity?.ipAddress}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%] ">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              TIMESTAMP
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedActivity?.timeStamp}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[4px]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Description
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedActivity?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetailsModal;
