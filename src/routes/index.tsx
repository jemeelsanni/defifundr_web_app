import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./routesPath";
import AuthLayout from "../layout/auth";
import SignIn from "../pages/auth/signin";
import Guide from "../pages/guide";
import GuestLayout from "../layout/guest";
import { ForgetPassword } from "../pages/auth/ForgetPassword";
import { ResetPasswordOtp } from "../pages/auth/ResetpasswordOtp";
import { ResetPassword } from "../pages/auth/ResetPassword";

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
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp",
        element: <ResetPasswordOtp />,
      },
      {
        path: "Reset-password",
        element: <ResetPassword />,
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
