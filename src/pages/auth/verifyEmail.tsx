import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import OtpInput from "../../components/auth/OtpInput";
import EmailVerification from "../../components/auth/EmailVerification";

export const VerifyEmail = () => {
  return (
    <div className="space-y-12">
      <AuthFormHeader
        title="Verify your email address"
        description="Please enter the verification code sent to 
            your email account za**ab@gmail.com"
      />
      <div className="font-normal">
        <OtpInput />
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
          {/* EmailVerification component handles the modal */}
          <EmailVerification />
        </div>
      </div>
    </div>
  );
};
