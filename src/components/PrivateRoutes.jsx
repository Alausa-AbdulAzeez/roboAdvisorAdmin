import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../redux/globalSlice";
import { baseUrl } from "../utils/config";

/**
 * PrivateRoutes component protects routes that require authentication.
 * It checks the user's authentication status and redirects to the login page if not authenticated.
 */

const PrivateRoutes = () => {
  // MISCELLANEOUS
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get logged-in state of the user from Redux store
  const { isLoggedIn } = useSelector((state) => state?.globalState);

  // Setup request headers with authentication token
  const headers = {
    "Content-Type": "application/json",
    // Add other headers as needed
  };

  useEffect(() => {
    const getUserLoggedInStatus = async () => {
      const cancelToken = axios.CancelToken.source();

      try {
        const response = await axios.get(`${baseUrl}/user/checkAuthStatus`, {
          cancelToken: cancelToken.token,
          headers: headers,
          withCredentials: true,
        });

        // Check if the user is not authenticated and dispatch logout action
        if (!response?.data?.authenticated) {
          dispatch(loggedOut());
        }
      } catch (error) {
        // Handle errors, e.g., log to console or show error message to user
        console.log(error);
        dispatch(loggedOut());
      }

      return () => {
        // Cancel the request if the component unmounts
        cancelToken.cancel();
      };
    };

    getUserLoggedInStatus();
  }, []);

  // If user is authenticated, render the protected routes, otherwise redirect to login page
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
