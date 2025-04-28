import { useState } from "react";
import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { EyeOff, EyeOn } from "../../assets/svg/svg";

export const ResetPassword = () => {
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };
  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible((prev) => !prev);
  };
  return (
    <div>
      <div className="space-y-12">
        <AuthFormHeader
          title="Reset password"
          description="Create a new secure password to access your DefiFundr account for subsequent login"
        />
        <form className="space-y-12">
          <div className="space-y-6">
            <div className="form-control ">
              <label htmlFor="newPassword">New password</label>
              <div className="relative">
                <input
                  type={isNewPasswordVisible ? "text" : "password"}
                  name="newPassword"
                  id="newPassword"
                  placeholder="New password"
                />
                <div>
                  <button
                    type="button"
                    className="absolute transform -translate-y-1/2 right-4.5 top-1/2 focus:outline-none cursor-pointer"
                    aria-label="Toggle password visibility"
                    onClick={toggleNewPasswordVisibility}
                  >
                    {isNewPasswordVisible ? <EyeOn /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="form-control ">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="relative">
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
                <div>
                  <button
                    type="button"
                    className="absolute transform -translate-y-1/2 right-4.5 top-1/2 focus:outline-none cursor-pointer"
                    aria-label="Toggle password visibility"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {isConfirmPasswordVisible ? <EyeOn /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="!w-full h-14 button button--secondary"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
