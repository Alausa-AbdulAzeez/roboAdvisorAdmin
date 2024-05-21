import React, { useEffect, useRef, useState } from "react";
import { accountIcon, arrowDown, bellIcon } from "../assets/icons";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../utils/requestMethods";
import { loggedOut } from "../redux/globalSlice";
import Overlay from "./Overlay";
import LogoutConfirmationModal from "./LogoutConfirmationModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Topbar = ({ title, toggleSidebar, hasIcon }) => {
  // MISCELLANEOUS
  // REACT ROUTER DOM
  const navigate = useNavigate();
  // REDUX TOOL KIT
  const dispatch = useDispatch();

  // Toast
  const toastId = useRef(null);

  // GET LOGGED IN  USER
  const { data: loggedInUser } = useSelector(
    (state) => state?.globalState?.user
  );

  const { firstname, surname } = loggedInUser;

  // State to check if profile was clicked
  const [clickedProfile, setClickedProfile] = useState(false);

  // State of logout confirmation modal
  const [isOpen, setIsOpen] = useState(false);

  //   Ref linked to the select profile pop up element
  const profilePopupRef = useRef(null);

  // Function to close user details modal
  const handleClose = () => {
    setIsOpen(false);
  };
  // End of function to close user details modal

  // FUNCTION TO HANDLE USER LOGOUT
  const handleLogout = async () => {
    try {
      toastId.current = toast("Please wait while we sign you out...", {
        autoClose: false,
        isLoading: true,
        position: "bottom-right",
      });

      await publicRequest
        .get("auth/logout")
        .then(() => {
          toast.update(toastId.current, {
            render: "Successfully signed out",
            type: "success",
            isLoading: false,
            autoClose: 1200,
          });
          dispatch(loggedOut());
          navigate("/login");
        })
        .catch((err) => {
          navigate("/login");
          throw err;
        });
    } catch (error) {
      toast.update(toastId.current, {
        render: "Successfully signed out",
        type: "success",
        isLoading: false,
        autoClose: 1200,
      });
      console.log(error);
    }
  };
  // END OF FUNCTION TO HANDLE USER LOGOUT

  // FUNCTION TO HANDLE PROFILE DROPDOWN  TOGGLE
  const handleClickedProfile = (event) => {
    // Check if the click occurred on the Profile toggle element
    if (event.target.classList.contains("profileToggle")) {
      setClickedProfile((prev) => !prev);
    } else {
      // If not, check if the click occurred outside the ProfileHolder
      if (
        profilePopupRef.current &&
        !profilePopupRef.current.contains(event.target) &&
        !event.target.classList.contains("miniLogout")
      ) {
        setClickedProfile(false);
      }
    }
  };
  // END OF FUNCTION TO HANDLE TIMEFRAME DROPDOWN  TOGGLE

  // USE EFFECT TO HANDLE CLICKS AWAY FROM THE PREFERRED DETAILS HANDLER
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickedProfile, true);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickedProfile, true);
    };
  }, []);
  // END OF USE EFFECT TO HANDLE CLICKS AWAY FROM THE PREFERRED DETAILS HANDLER

  return (
    <>
      <ToastContainer />
      <Overlay isOpen={isOpen} onClose={handleClose}>
        <LogoutConfirmationModal onClose={handleClose} logout={handleLogout} />
      </Overlay>
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
        <div className="z-[999] flex items-center justify-between ">
          <div className="text-blackTextColor text-[32px] leading-[40px] max-2xl:text-[25.6px]  max-2xl:leading-[32px] font-[700]">
            {title}
          </div>
          <div className="relative flex gap-[32px] max-2xl:gap-[25.6px] cursor-pointer">
            {clickedProfile && (
              <div className="absolute flex flex-col top-[48px] right-0  bg-white hover:bg-[#e6e6e6]  border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] shadow-accountDropShadow">
                {/* <div className="absolute flex flex-col top-[76px] right-0 max-2xl:top-[49.6px] py-[8px] max-2xl:py-[6.4px] bg-white  border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] shadow-accountDropShadow"> */}
                <div
                  onClick={() => setIsOpen(true)}
                  ref={profilePopupRef}
                  className="miniLogout relative flex gap-[8px] max-2xl:gap-[6.4px] items-center px-[24px] py-[16px] max-2xl:px-[19.2px] max-2xl:py-[12.8px] w-[238px] max-2xl:w-[190.4px] box-border"
                >
                  <Icon
                    icon="clarity:logout-line"
                    className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] "
                  />

                  <div className="font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
                    Logout
                  </div>
                  {/* <div className="absolute bottom-0 h-[1px] mx-auto w-[78%] bg-borderColor"></div> */}
                </div>
              </div>
            )}
            <img
              src={bellIcon}
              alt="notifications"
              className="cursor-pointer max-2xl:h-[25.6px] max-2xl:w-[25.6px] "
            />
            <div className="profileToggle flex gap-[8px] max-2xl:gap-[6.4px] items-center">
              <img
                src={accountIcon}
                alt="account"
                className="profileToggle max-2xl:h-[19.2px] max-2xl:w-[19.2px] "
              />
              <div className=" max-md:hidden font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
                {firstname} {surname}
              </div>
              <img
                src={arrowDown}
                alt="arrowDonw"
                className="profileToggle max-2xl:h-[12.8px] max-2xl:w-[12.8px]   text-blackTextColor"
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
        <div className=" flex gap-[32px] max-2xl:gap-[25.6px] cursor-pointer relative">
          {clickedProfile && (
            <div className="absolute flex flex-col top-[76px] right-0 max-2xl:top-[49.6px]  bg-white hover:bg-[#EEEEEE]  border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] shadow-accountDropShadow w-[192.39px] max-2xl:w-[153.9px] box-border">
              {/* <div className="absolute flex flex-col top-[76px] right-0 max-2xl:top-[49.6px] py-[8px] max-2xl:py-[6.4px] bg-white  border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] shadow-accountDropShadow"> */}
              <div
                ref={profilePopupRef}
                onClick={() => setIsOpen(true)}
                className="relative flex gap-[8px] max-2xl:gap-[6.4px] items-center px-[24px] py-[16px] max-2xl:px-[19.2px] max-2xl:py-[12.8px] "
              >
                <Icon
                  icon="clarity:logout-line"
                  className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] "
                />

                <div className=" max-md:hidden font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
                  Logout
                </div>
                {/* <div className="absolute bottom-0 h-[1px] mx-auto w-[78%] bg-borderColor"></div> */}
              </div>
            </div>
          )}
          <img
            src={bellIcon}
            alt="notifications"
            className="cursor-pointer max-2xl:h-[25.6px] max-2xl:w-[25.6px] "
          />
          <div className="profileToggle flex gap-[8px] max-2xl:gap-[6.4px] items-center">
            <img
              src={accountIcon}
              alt="account"
              className="max-2xl:h-[19.2px] max-2xl:w-[19.2px] profileToggle"
            />
            <div className=" profileToggle max-md:hidden font-[400] text-[16px] leading-[28px] max-2xl:text-[12.8px] max-2xl:leading-[22.4px] text-nowrap">
              {firstname} {surname}
            </div>
            <img
              src={arrowDown}
              alt="arrowDonw"
              className="profileToggle max-2xl:h-[12.8px] max-2xl:w-[12.8px] text-blackTextColor"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
