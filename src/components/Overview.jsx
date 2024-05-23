import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { average, offCourse, onCourse, sum } from "../assets/icons";
import PercentageIndicator from "./PercentageIndicator";
import OverviewCard from "./OverviewCard";
import {
  averageMobile,
  offCourseMobile,
  onCourseMobile,
  sumMobile,
} from "../assets/images";
import { privateRequest, publicRequest } from "../utils/requestMethods";
import { useDispatch } from "react-redux";
import { loggedOut } from "../redux/globalSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Overview = () => {
  // MISCELLANEOUS
  // REACT ROUTER DOM
  const navigate = useNavigate();
  // REDUX TOOL KIT
  const dispatch = useDispatch();

  // Overview data state
  const [overviewData, setOverviewData] = useState();

  // Overview data loading state
  const [loadingOverviewData, setLoadingOverviewData] = useState(false);

  // Overview data error state
  const [errorLoadingOverviewData, setErrorLoadingOverviewData] =
    useState(false);

  const fetchDasboardData = async () => {
    setLoadingOverviewData(true);
    setErrorLoadingOverviewData(false);

    try {
      const { data } = await publicRequest.get(
        "admin/dashboard/getPortfolioData"
      );
      if (data) {
        console.log(data);
        setOverviewData(data);
        // errorLoadingOverviewData && setErrorLoadingOverviewData(false);
        setLoadingOverviewData(false);
      }
    } catch (error) {
      console.log(error);
      setLoadingOverviewData(false);
      setErrorLoadingOverviewData(true);
      if (error?.response?.status === 401) {
        toast(
          "You're not authenticated. You'll be redirected to the login page.",
          {
            autoClose: false,
            isLoading: true,
            position: "bottom-right",
            type: "error",
          }
        );
        dispatch(loggedOut());
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchDasboardData();
  }, []);

  const {
    totalPortfolioValue = 0,
    averagePortfolioValue = 0,
    totalOnCourse = 0,
    totalOffCourse = 0,
  } = overviewData?.portfolioData?.currentStats ?? {};

  const {
    totalPortfolioValueChange = 0,
    averagePortfolioValueChange = 0,
    totalOnCourseChange = 0,
    totalOffCourseChange = 0,
  } = overviewData?.portfolioData?.changes ?? {};

  return (
    <div className="w-full">
      <ToastContainer />
      <div className="flex justify-between mb-[16px] max-2xl:mb-[12.8px] max-md:mb-[8px]">
        <div className="text-silverTextColor leading-[30px] font-[700] text-[24px] max-2xl:leading-[24px]  max-2xl:text-[19.2px] max-md:text-[20px]">
          Overview
        </div>
        <div className="text-mainBlue leading-[28px] max-2xl:leading-[22.4px] text-[16px] max-2xl:text-[12.8px] max-md:text-[16px] font-[700] cursor-pointer hover:underline">
          Export CSV
        </div>
      </div>
      <div className="w-full h-[337px] max-2xl:h-[269.6px] max-md:h-fit p-[24px] max-2xl:p-[19.2px] max-md:p-[16px] bg-white relative border border-borderColor rounded-[8px] max-2xl:rounded-[6.4px] flex-wrap">
        {!loadingOverviewData && errorLoadingOverviewData && (
          <div className="  h-full flex items-center justify-center">
            <div
              className="px-[16px] text-mainBlue hover:text-white hover:bg-mainBlue rounded-[8px] font-bold py-[8px] text-[16px] bg-[#fff] border border-mainBlue  text-center leading-[28px] cursor-pointer max-2xl:text-[12.8px] max-2xl:rounded-[6.4px]   max-2xl:leading-[22.4px] max-2xl:px-[12.8px] max-2xl:py-[6.4px]"
              onClick={fetchDasboardData}
            >
              Click to reload
            </div>
          </div>
        )}

        {!errorLoadingOverviewData && (
          <>
            <div className="w-[100%] h-[50%] max-md:h-fit  border-b-[1px] border-borderColor max-md:border-none flex max-md:flex-col max-md:gap-[14px] max-md:mb-[14px]">
              <>
                <OverviewCard
                  title={"Total Portfolio value"}
                  amount={totalPortfolioValue}
                  time={"This Week"}
                  img={sum}
                  cardName={"sum"}
                  mobileImg={sumMobile}
                  percentText={totalPortfolioValueChange}
                  percentType={
                    totalPortfolioValueChange >= 0 ? "positive" : "negative"
                  }
                  imgPosition={"right"}
                  absolutePosition={"bottom"}
                  index={1}
                  loadingOverviewData={loadingOverviewData}
                />
                <OverviewCard
                  title={"Average Portfolio value"}
                  amount={averagePortfolioValue}
                  time={"This Week"}
                  img={average}
                  mobileImg={averageMobile}
                  percentText={averagePortfolioValueChange}
                  percentType={
                    averagePortfolioValueChange >= 0 ? "positive" : "negative"
                  }
                  imgPosition={"left"}
                  absolutePosition={"bottom"}
                  loadingOverviewData={loadingOverviewData}
                />
              </>
            </div>
            <div className="w-[100%] h-[50%] max-md:h-fit flex  max-md:flex-col max-md:gap-[14px]">
              <OverviewCard
                title={"On Course"}
                amount={totalOnCourse}
                time={"This Week"}
                img={onCourse}
                mobileImg={onCourseMobile}
                percentText={totalOnCourseChange}
                percentType={totalOnCourse >= 0 ? "positive" : "negative"}
                imgPosition={"right"}
                absolutePosition={"top"}
                loadingOverviewData={loadingOverviewData}
              />
              <OverviewCard
                title={"Off course"}
                amount={totalOffCourse}
                time={"This Week"}
                img={offCourse}
                mobileImg={offCourseMobile}
                percentText={totalOffCourseChange}
                percentType={
                  averagePortfolioValueChange >= 0 ? "positive" : "negative"
                }
                imgPosition={"left"}
                absolutePosition={"top"}
                index={4}
                loadingOverviewData={loadingOverviewData}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Overview;
