// import React, { useState } from "react";
// import { bigBlueBubble, blueBubble, signUp } from "../assets/images";
// import { Icon } from "@iconify/react";

// const Login = () => {
//   // Set password visibility state
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   return (
//     <div className="relative h-[100vh] bg-white overflow-hidden">
//       {/* <img
//         src={bigBlueBubble}
//         alt="bubble"
//         className="absolute right-[-10px] bottom-[-10px] select-none drag"
//       /> */}
//       <img
//         src={blueBubble}
//         alt="bubble"
//         className="absolute z-[1] right-[-40px] bottom-[-80px] w-[55%] max-md:hidden"
//       />
//       <div className="text-mainBlue text-[28px] max-2xl:text-[23.7px] font-[900] leading-[28px] max-2xl:leading-[22.4px] tracking-[-0.41px] max-2xl:tracking-[-0.33px] mt-[32px] max-2xl:mt-[27px] ml-[100px] max-2xl:ml-[84.7px] max-md:ml-[16px]">
//         Robovisor Admin
//       </div>
//       <form className="ml-[200px] max-md:ml-[16px]  items-start max-2xl:ml-[169.31px] mt-[100px] max-2xl:mt-[84.7px] flex flex-col gap-[32px] max-2xl:gap-[27.1px] w-[463px] max-2xl:w-[392px] max-md:w-[90%] max-md:overflow-y-auto">
//         <div className="font-bold text-blackTextColor leading-[40px] max-2xl:leading-[34px] text-[32px] max-2xl:text-[27.1px] ">
//           Sign In
//         </div>
//         <div className="h-[60px] max-2xl:h-[51.1px] w-full border-b border-b-[#616161] box-border px-[8px] max-2xl:px-[6.77px] py-[16px] max-2xl:py-[13.54px]">
//           <input
//             type="email"
//             className="w-full h-full outline-none text-[#1E1E1E99] z-[20] "
//             placeholder="Email Address"
//           />
//         </div>
//         <div className="h-[60px] max-2xl:h-[51.1px] w-full border-b border-b-[#616161] box-border px-[8px] max-2xl:px-[6.77px] py-[16px] max-2xl:py-[13.54px] flex items-center">
//           <input
//             type={isPasswordVisible ? "text" : "password"}
//             className="w-full h-full outline-none text-[#1E1E1E99] z-[20] "
//             placeholder="Password"
//           />
//           <Icon
//             onClick={() => setIsPasswordVisible((prev) => !prev)}
//             icon={
//               isPasswordVisible
//                 ? "mingcute-eye-2-line"
//                 : "mingcute-eye-close-line"
//             }
//             className={`w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] text-blackTextColor cursor-pointer `}
//           />
//         </div>
//         <button
//           type="submit"
//           className="font-bold px-[16px] py-[8px] max-2xl:py-[6.77px] max-2xl:px-[13.54px] bg-borderColor  text-[#1E1E1E99] rounded-[8px] max-2xl:rounded-[6.77px] hover:bg-mainBlue hover:text-white transition-all"
//         >
//           Sign In
//         </button>
//         <div className="font-normal text-[16px] max-2xl:text-[13.54px]">
//           Don’t have an account? Contact administrator
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useRef, useState, useEffect } from "react";
import { blueBubble } from "../assets/images";
import { Icon } from "@iconify/react";
import { publicRequest } from "../utils/requestMethods";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  // State for email, password, password visibility, and loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toastId = useRef(null);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Check if email and password fields are filled
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  // Simulate an API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);

    try {
      toastId.current = toast("Please wait...", {
        autoClose: false,
        isLoading: true,
        position: "bottom-right",
      });

      await publicRequest
        .post("auth/admin/login", { email, password })
        .then((res) => {
          toast.update(toastId.current, {
            render: "Login succesful!",
            type: "success",
            isLoading: false,
            autoClose: 1200,
          });

          // dispatch(loggedIn());
          // dispatch(loginSuccess(res?.data));
          setIsLoading(false);

          // setTimeout(() => {
          //   navigate("/");
          // }, 500);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
      toast.update(toastId.current, {
        type: "error",
        autoClose: 1500,
        isLoading: false,
        render: `${
          error?.response?.data?.message ||
          "Something went wrong, please try again"
        }`,
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Process the response (here you would handle the actual response)
    // alert("Login successful!");

    setIsLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="relative h-[100vh] bg-white overflow-hidden">
        <img
          src={blueBubble}
          alt="bubble"
          className="absolute z-[1] right-[-40px] bottom-[-80px] w-[55%] max-md:hidden"
        />
        <div className="text-mainBlue text-[28px] max-2xl:text-[23.7px] font-[900] leading-[28px] max-2xl:leading-[22.4px] tracking-[-0.41px] max-2xl:tracking-[-0.33px] mt-[32px] max-2xl:mt-[27px] ml-[100px] max-2xl:ml-[84.7px] max-md:ml-[16px]">
          Robovisor Admin
        </div>
        <form
          className="ml-[200px] max-md:ml-[16px] items-start max-2xl:ml-[169.31px] mt-[100px] max-2xl:mt-[84.7px] max-md:mt-[27px] flex flex-col gap-[32px] max-2xl:gap-[27.1px] w-[463px] max-2xl:w-[392px] max-md:w-[90%] max-md:overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-blackTextColor leading-[40px] max-2xl:leading-[34px] text-[32px] max-2xl:text-[27.1px]">
            Sign In
          </div>
          <div className="h-[60px] max-2xl:h-[51.1px] w-full border-b border-b-[#616161] box-border px-[8px] max-2xl:px-[6.77px] py-[16px] max-2xl:py-[13.54px]">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full h-full outline-none text-[#1E1E1E99] z-[20]"
              placeholder="Email Address"
            />
          </div>
          <div className="h-[60px] max-2xl:h-[51.1px] w-full border-b border-b-[#616161] box-border px-[8px] max-2xl:px-[6.77px] py-[16px] max-2xl:py-[13.54px] flex items-center">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="w-full h-full outline-none text-[#1E1E1E99] z-[20]"
              placeholder="Password"
            />
            <Icon
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              icon={
                isPasswordVisible
                  ? "mingcute-eye-2-line"
                  : "mingcute-eye-close-line"
              }
              className="w-[24px] max-2xl:w-[19.2px] h-[24px] max-2xl:h-[19.2px] text-blackTextColor cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className={`font-bold px-[16px] py-[8px] max-2xl:py-[6.77px] max-2xl:px-[13.54px] bg-borderColor text-[#1E1E1E99] rounded-[8px] ${
              isFormValid &&
              !isLoading &&
              "hover:bg-mainBlue hover:text-white transition-all"
            } max-2xl:rounded-[6.77px]  ${
              !isFormValid || isLoading
                ? "cursor-not-allowed"
                : "bg-mainBlue text-white"
            }`}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
          <div className="font-normal text-[16px] max-2xl:text-[13.54px]">
            Don’t have an account? Contact administrator
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
