import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { profilePicture } from "../assets/images";
import { verified } from "../assets/icons";
import Overlay from "./Overlay";
import UserModificationConfirmation from "./UserModificationConfirmation";
import { Link } from "react-router-dom";

const UserDetailsModal = ({ onClose, selectedUser, handleUiToBeDisplayed }) => {
  // State for user details modal visibility
  const [isOpen, setIsOpen] = useState(false);

  //   Function to close user modal
  const handleClose = () => {
    setIsOpen(false);
  };
  //   End of function to close user modal

  return (
    <div className="w-[500px] max-lg:w-[90%] max-lg:max-w-[400px] min-h-[500px]  h-[90%] max-h-[700px] bg-white z-[100] overflow-auto rounded-[8px] max-2xl:rounded-[6.4px] p-[24px] max-2xl:p-[19.2px] flex flex-col gap-[24px] max-2xl:gap-[19.2px]">
      <Overlay isOpen={isOpen} onClose={handleClose}>
        <UserModificationConfirmation
          onClose={handleClose}
          selectedUser={selectedUser}
        />
      </Overlay>
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
          User Details
        </div>
        <div className="flex items-center justify-center text-silverTextColor text-[16px] max-2xl:text-[12.8px] font-[400] border border-borderColor min-w-[120px] h-[36px] rounded-[200px] max-2xl:min-w-[96px] max-2xl:h-[28.8px]">
          User ID: {selectedUser?.location?.postalCode?.slice(0, 4)}
        </div>
        <div
          className={`${
            selectedUser?.status === "inactive" && "text-textRedColor"
          } ${
            selectedUser?.status === "active" && "text-textGreenColor"
          } text-[16px] font-normal max-2xl:text-[12.8px]`}
        >
          {selectedUser?.status === "inactive" && "Deactivated"}
          {selectedUser?.status === "active" && "Active"}
        </div>
      </div>
      <div className="border border-[#d4d4d457] w-full"></div>
      <div className="flex gap-[16px]">
        <div className="w-[97px] h-[97px] rounded-full max-2xl:h-[77.6px] max-2xl:w-[77.6px]">
          <img
            src={profilePicture}
            alt="profilePicture"
            className="h-full w-full obj"
          />
        </div>
        <div className="my-[6.5px]  flex flex-col justify-between max-2xl:my-[5.2px]">
          <div className="flex gap-[8px] items-center">
            <div className="text-[18px] font-semibold text-blackTextColor max-2xl:text-[14.4px]">
              {selectedUser?.firstname} {selectedUser?.lastname}
            </div>
            <img
              src={verified}
              alt="verified"
              className="w-[16px] h-[16px] max-2xl:w-[12.8px] max-2xl:h-[12.8px] "
            />
          </div>
          <div className="text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
            {selectedUser?.location?.state},{" "}
            <span>{selectedUser?.location?.country}</span>
          </div>

          <div className="text-[16px] max-2xl:text-[12.8px] font-[400] text-silverTextColor">
            {selectedUser?.tier}
          </div>
        </div>
      </div>
      <div className="bg-backgroundBlueColor p-[16px] flex flex-col gap-[24px] rounded-[8px] max-2xl:rounded-[6.4px] max-2xl:gap-[19.2px]">
        <div className="text-[18px] font-semibold text-blackTextColor max-2xl:text-[14.4px]">
          Account Information
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Total Portfolio Value
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-mainBlue leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.totalPortfolioValue}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              RISK PROFILE
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-mainBlue leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.riskProfile}
            </div>
          </div>
        </div>
        <div className="flex">
          {selectedUser?.status === "active" && (
            <Link to={"/users/portfolio"}>
              <div className="px-[16px] rounded-[8px] font-bold text-white py-[8px] text-[16px] bg-mainBlue leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]">
                View Portfolio
              </div>
            </Link>
          )}
          {selectedUser?.status === "inactive" && (
            <Link to={"/users/portfolio"}>
              <div
                className="px-[16px] rounded-[8px] font-bold text-blackTextColor py-[8px] text-[16px] bg-borderColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
                onClick={() => handleUiToBeDisplayed("userPortfolio")}
              >
                View Portfolio
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="bg-[#f8f8f8] p-[16px] flex flex-col gap-[24px] rounded-[8px] max-2xl:rounded-[6.4px] max-2xl:gap-[19.2px]">
        <div className="text-[18px] font-semibold text-blackTextColor max-2xl:text-[14.4px]">
          Personal Information
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              FIRST NAME
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.firstname}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Last name
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.lastname}
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              EMAIL ADDRESS
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.email}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%] ">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Phone number
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.phone}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[4px]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Date of birth
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.dateOfBirth}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] p-[16px] flex flex-col gap-[24px] rounded-[8px] max-2xl:rounded-[6.4px] max-2xl:gap-[19.2px]">
        <div className="text-[18px] font-semibold text-blackTextColor max-2xl:text-[14.4px]">
          Address
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Country
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.location?.country}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              City/State
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.location?.state}
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-[4px] w-[60%]">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Postal code
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.location?.postalCode}
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-[40%] ">
            <div className=" uppercase text-[14px] text-silverTextColor max-2xl:text-[11.2px] leading-[28px] max-2xl:leading-[22.4px] font-[400]">
              Street
            </div>
            <div className="text-[16px] max-2xl:text-[12.8px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]">
              {selectedUser?.location?.street}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        {selectedUser?.status === "active" && (
          <div
            className="px-[16px] rounded-[8px] text-white font-bold py-[8px] text-[16px] bg-textRedColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
            onClick={() => setIsOpen(true)}
          >
            Deactivate user
          </div>
        )}
        {selectedUser?.status === "inactive" && (
          <div
            className="px-[16px] rounded-[8px] font-bold py-[8px] text-[16px] bg-[#EEEEEE] text-blackTextColor leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
            onClick={() => setIsOpen(true)}
          >
            Reactivate user
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailsModal;
