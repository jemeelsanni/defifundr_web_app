import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./routesPath";
import AuthLayout from "../layout/auth";
import SignIn from "../pages/auth/signin";
import Guide from "../pages/guide";
import GuestLayout from "../layout/guest";

import { ForgotPassword } from "../pages/auth/forgotPassword";
import CreateAccount from "../pages/auth/createAccount";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { VerifyEmail } from "../pages/auth/verifyEmail";
import { ResetPasswordOtp } from "../pages/auth/ResetpasswordOtp";
import { CreatePassword } from "../pages/auth/CreatePassword";

import { CreateBusinessDetail } from "../pages/auth/createBusinessDetails";

import SelectAccountType from "../pages/auth/selectAccountType";

export const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Navigate to="/auth/signin" replace />, // Redirect root to sign in
  },

  {
    path: "/auth",
    element: <AuthLayout />, // Separate layout for authentication pages
    children: [
      {
        path: RoutePaths.SIGNIN,
        element: <SignIn />,
      },

      {
        path: RoutePaths.CREATE_PASSWORD,
        element: <CreatePassword />,
      },

      {
        path: RoutePaths.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
      {
        path: RoutePaths.RESET_OTP,
        element: <ResetPasswordOtp />,
      },
      {
        path: RoutePaths.RESET_PASSWORD,
        element: <ResetPassword />,
      },
      {
        path: RoutePaths.VERIFY_EMAIL,
        element: <VerifyEmail />,
      },
      {
        path: RoutePaths.CREATE_ACCOUNT,
        element: <CreateAccount />,
      },
      {
        path: RoutePaths.CREATE_BUSINESS_DETAIL,
        element: <CreateBusinessDetail />,
      },
      {
        path: RoutePaths.SELECT_ACCOUNT_TYPE,
        element: <SelectAccountType />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />, // Separate layout for authentication pages
    children: [
      {
        path: "guide",
        element: <Guide />,
      },
    ],
  },
]);
