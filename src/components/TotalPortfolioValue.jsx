import React, { useEffect, useRef, useState } from "react";
import { arrowDown } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";
import TotalPortfolioValueGraph from "./TotalPortfolioValueGraph";

const TotalPortfolioValue = () => {
  // Dummy data for graph
  const data = [
    {
      name: "Jan",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 50,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 20,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 10,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 15,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 1,
      pv: 3800,
      amt: 2500,
    },
  ];

  //   Ref linked to the select preferred details pop up element
  const popupRef = useRef(null);

  //   Ref linked to the select timeframe pop up element
  const timeframePopupRef = useRef(null);

  // Preferred details STATE
  const [clickedPreferredDetails, setClickedPreferredDetails] = useState(false);

  // Preferred details STATE
  const [clickedTimeframe, setClickedTimeframe] = useState(false);

  // SELECTED TIMEFRAME STATE
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("6M");

  // SELECTED PREFERRED DETAILS STATE
  const [selectedPreferredDetails, setSelectedPreferredDetails] = useState(
    "Total portfolio value"
  );

  // Function to preferred details selection
  const selectPreferredDetails = (preferredDetail) => {
    setSelectedPreferredDetails(preferredDetail);
    setClickedPreferredDetails(false);
  };
  // End of function to preferred details selection

  // Function to handle timeframe selection
  const selectTimeFrame = (timeframe) => {
    setSelectedTimeFrame(timeframe);
    setClickedTimeframe(false);
  };
  // End of function to handle timeframe selection

  // FUNCTION TO HANDLE PREFERRED DETAILS TOGGLE
  const handleClickedPreferredDetails = (event) => {
    // Check if the click occurred on the PreferredDetails toggle element
    if (event.target.classList.contains("timeframe-toggle")) {
      setClickedPreferredDetails((prev) => !prev);
    } else {
      // If not, check if the click occurred outside the PreferredDetailsHolder
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setClickedPreferredDetails(false);
      }
    }
  };
  // END OF FUNCTION TO HANDLE PREFERRED DETAILS TOGGLE

  // USE EFFECT TO HANDLE CLICKS AWAY FROM THE PREFERRED DETAILS HANDLER
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickedPreferredDetails, true);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener(
        "click",
        handleClickedPreferredDetails,
        true
      );
    };
  }, []);
  // END OF USE EFFECT TO HANDLE CLICKS AWAY FROM THE PREFERRED DETAILS HANDLER

  // FUNCTION TO HANDLE TIMEFRAME DROPDOWN  TOGGLE
  const handleClickedSelectTimeFrame = (event) => {
    // Check if the click occurred on the Timeframe toggle element
    if (event.target.classList.contains("timeframeToggle")) {
      setClickedTimeframe((prev) => !prev);
    } else {
      // If not, check if the click occurred outside the TimeframeHolder
      if (
        timeframePopupRef.current &&
        !timeframePopupRef.current.contains(event.target)
      ) {
        setClickedTimeframe(false);
      }
    }
  };
  // END OF FUNCTION TO HANDLE TIMEFRAME DROPDOWN  TOGGLE

  // USE EFFECT TO HANDLE CLICKS AWAY FROM THE PREFERRED DETAILS HANDLER
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickedSelectTimeFrame, true);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickedSelectTimeFrame, true);
    };
  }, []);
  // END OF USE EFFECT TO HANDLE CLICKS AWAY FROM THE PREFERRED DETAILS HANDLER

  return (
    <div className="overflow-auto w-[62%] flex flex-col gap-[30px] max-2xl:gap-[24px] bg-white border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px]  p-[24px] max-2xl:p-[19.2px] h-full max-sm:h-[466px] max-sm:w-full">
      <div className="flex justify-between h-fit">
        <div className="flex flex-col gap-[8px] max-2xl:gap-[6.4px]">
          <div className="relative w-fit min-w-[200px] flex gap-[16px] max-2xl:gap-[12.8px] justify-between cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px]">
            <div className="uppercase timeframe-toggle text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor flex-1">
              {selectedPreferredDetails}
            </div>
            <img
              src={arrowDown}
              alt="arrowDonw"
              className="max-2xl:w-[12.8px] max-2xl:h-[12.8px]"
            />
            {clickedPreferredDetails && (
              <div
                ref={popupRef}
                className="z-[2] flex flex-col absolute top-[calc(100%+5px)] right-[0px] bg-[#F8F8F8]  shadow-md w-fit text-nowrap h-fit rounded-[8px] max-2xl:w-[100%] "
              >
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor  flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-tr-[8px] rounded-tl-[8px]  uppercase max-2xl:rounded-tr-[8px] max-2xl:rounded-tl-[8px]"
                  onClick={() =>
                    selectPreferredDetails("Total portfolio value")
                  }
                >
                  Total portfolio value
                </div>
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor  flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-tr-[8px] rounded-tl-[8px]  uppercase max-2xl:rounded-tr-[8px] max-2xl:rounded-tl-[8px]"
                  onClick={() =>
                    selectPreferredDetails("Average portfolio value")
                  }
                >
                  Average portfolio value
                </div>
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]    uppercase  "
                  onClick={() => selectPreferredDetails("On course")}
                >
                  On course
                </div>
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-br-[8px] rounded-bl-[8px]  uppercase max-2xl:rounded-br-[8px] max-2xl:rounded-bl-[8px]"
                  onClick={() => selectPreferredDetails("Off course")}
                >
                  Off course
                </div>
              </div>
            )}
          </div>
          <div className="text-[24px] max-2xl:text-[19.2px] text-blackTextColor font-[700] leading-[30px] max-2xl:leading-[24px]">
            N300,810,565,830.11
          </div>
          <div className="flex items-center gap-[8px] max-2xl:gap-[6.4px]  mt-[4px] max-2xl:mt-[3.2px]">
            <PercentageIndicator type={"positive"} text={"+12.9%"} />
            <div className="font-[400] text-[14px] max-2xl:text-[11.2px] leading-[18px] max-2xl:leading-[14.4px] text-silverTextColor">
              {(selectedTimeFrame === "6M" && "In 6 months") ||
                (selectedTimeFrame === "1M" && "In 1 month") ||
                (selectedTimeFrame === "1YR" && "In 1 year") ||
                (selectedTimeFrame === "ALL" && "All time")}
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-sm:hidden w-[226px] max-2xl:w-[180.8px] h-[35px] max-2xl:h-[28px]  py-[2px] max-2xl:py-[1.6px] flex bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px]">
            <div
              className={` ${
                selectedTimeFrame === "1M" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px] `}
              onClick={() => selectTimeFrame("1M")}
            >
              1M
            </div>
            <div
              className={`${
                selectedTimeFrame === "6M" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px]`}
              onClick={() => selectTimeFrame("6M")}
            >
              6M
            </div>
            <div
              className={`${
                selectedTimeFrame === "1YR" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px]`}
              onClick={() => selectTimeFrame("1YR")}
            >
              1YR
            </div>
            <div
              className={`${
                selectedTimeFrame === "ALL" &&
                "border border-borderColor bg-white"
              } w-[56.5px] max-2xl:w-[45.2px] h-[31px] max-2xl:h-[24.8px] flex items-center justify-center pt-[8px] max-2xl:pt-[6.4px] py-[10px] max-2xl:py-[8px] cursor-pointer hover:bg-white hover:border hover:border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] text-[12px] max-2xl:text-[9.6px]`}
              onClick={() => selectTimeFrame("ALL")}
            >
              ALL
            </div>
          </div>
          <div className="hidden max-sm:flex relative w-fit gap-[16px] max-2xl:gap-[12.8px] cursor-pointer bg-[#F8F8F8] items-center border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px]">
            <div className="timeframeToggle text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor">
              {selectedTimeFrame}
            </div>
            <img
              src={arrowDown}
              alt="arrowDonw"
              className="max-2xl:w-[12.8px] max-2xl:h-[12.8px]"
            />
            {clickedTimeframe && (
              <div
                ref={timeframePopupRef}
                className="z-[2] flex flex-col absolute top-[calc(100%+5px)] right-[0px] bg-[#F8F8F8]  shadow-md w-fit text-nowrap h-fit rounded-[8px] max-2xl:w-[100%] "
              >
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor  flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-tr-[8px] rounded-tl-[8px]  uppercase max-2xl:rounded-tr-[8px] max-2xl:rounded-tl-[8px]"
                  onClick={() => selectTimeFrame("1M")}
                >
                  1M
                </div>
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor  flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-tr-[8px] rounded-tl-[8px]  uppercase max-2xl:rounded-tr-[8px] max-2xl:rounded-tl-[8px]"
                  onClick={() => selectTimeFrame("6M")}
                >
                  6M
                </div>
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor  flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-tr-[8px] rounded-tl-[8px]  uppercase max-2xl:rounded-tr-[8px] max-2xl:rounded-tl-[8px]"
                  onClick={() => selectTimeFrame("1YR")}
                >
                  1YR
                </div>
                <div
                  className="pt-[4px] max-2xl:pt-[3.2px] px-[8px] max-2xl:px-[6.4px] text-[14px] max-2xl:text-[11.2px] font-[400] leading-[28px] max-2xl:leading-[22.4px] text-blackTextColor  flex flex-1 items-center border-b border-b-[#D4D4D4] cursor-pointer hover:bg-[#D4D4D4]   rounded-tr-[8px] rounded-tl-[8px]  uppercase max-2xl:rounded-tr-[8px] max-2xl:rounded-tl-[8px]"
                  onClick={() => selectTimeFrame("ALL")}
                >
                  ALL
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex-1 bg-red-900"></div> */}
      <TotalPortfolioValueGraph data={data} />
      {/* <div className="flex-1 bg-black w-full h-28"></div> */}
    </div>
  );
};

export default TotalPortfolioValue;
