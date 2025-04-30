import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import ResetPasswordOtpInput from "../../components/auth/ResetpasswordOtpInput";

export const VerifyEmail = () => {
  return (
    <div className="space-y-12">
      <AuthFormHeader
        title="Verify your email address"
        description="Please enter the verification code sent to 
            your email account za**ab@gmail.com"
      />
      <div className="font-normal">
        <ResetPasswordOtpInput />
      </div>
      <div>
        <div className="">
          <button
            type="submit"
            className="!w-full h-14 button button--secondary"
          >
            {" "}
            Continue
          </button>
        </div>
        <div className="flex items-center justify-center pt-8">
          {/* // TODO: change to use react router link */}
          <a
            href=""
            className="text-sm font-bold transition duration-300 ease-in-out text-primary-200 dark:text-primary-400 dark:hover:text-primary-400/70 hover:text-primary-200/70"
          >
            Didn’t get the code?
          </a>
        </div>
      </div>
    </div>
  );
};
