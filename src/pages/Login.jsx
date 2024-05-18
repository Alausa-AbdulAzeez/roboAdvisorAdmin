import React, { useState } from "react";
import { bigBlueBubble, blueBubble, signUp } from "../assets/images";
import { Icon } from "@iconify/react";

const Login = () => {
  // Set password visibility state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative h-[100vh] bg-white overflow-hidden">
      {/* <img
        src={bigBlueBubble}
        alt="bubble"
        className="absolute right-[-10px] bottom-[-10px] select-none drag"
      /> */}
      <img
        src={blueBubble}
        alt="bubble"
        className="absolute z-[1] right-[-40px] bottom-[-80px] w-[55%]S"
      />
      <div className="text-mainBlue text-[28px] max-2xl:text-[23.7px] font-[900] leading-[28px] max-2xl:leading-[22.4px] tracking-[-0.41px] max-2xl:tracking-[-0.33px] mt-[32px] max-2xl:mt-[27px] ml-[100px] max-2xl:ml-[84.7px]">
        Robovisor Admin
      </div>
      <form className="ml-[200px] items-start max-2xl:ml-[169.31px] mt-[100px] max-2xl:mt-[84.7px] flex flex-col gap-[32px] max-2xl:gap-[27.1px] w-[463px] max-2xl:w-[392px]">
        <div className="font-bold text-blackTextColor leading-[40px] max-2xl:leading-[34px] text-[32px] max-2xl:text-[27.1px] ">
          Sign In
        </div>
        <div className="h-[60px] max-2xl:h-[51.1px] w-full border-b border-b-[#616161] box-border px-[8px] max-2xl:px-[6.77px] py-[16px] max-2xl:py-[13.54px]">
          <input
            type="email"
            className="w-full h-full outline-none text-[#1E1E1E99] z-[20] "
            placeholder="Email Address"
          />
        </div>
        <div className="h-[60px] max-2xl:h-[51.1px] w-full border-b border-b-[#616161] box-border px-[8px] max-2xl:px-[6.77px] py-[16px] max-2xl:py-[13.54px] flex items-center">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full h-full outline-none text-[#1E1E1E99] z-[20] "
            placeholder="Password"
          />
          <Icon
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            icon={
              isPasswordVisible
                ? "mingcute-eye-2-line"
                : "mingcute-eye-close-line"
            }
            className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] text-blackTextColor cursor-pointer `}
          />
        </div>
        <button
          type="submit"
          className="font-bold px-[16px] py-[8px] max-2xl:py-[6.77px] max-2xl:px-[13.54px] bg-borderColor  text-[#1E1E1E99] rounded-[8px] max-2xl:rounded-[6.77px] hover:bg-mainBlue hover:text-white transition-all"
        >
          Sign In
        </button>
        <div className="font-normal text-[16px] max-2xl:text-[13.54px]">
          Don’t have an account? Contact administrator
        </div>
      </form>
    </div>
  );
};

export default Login;
