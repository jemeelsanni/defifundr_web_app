import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import OtpInput from "../../components/auth/OtpInput";
import { useZodForm } from "../../hooks/useZodForm";
import { OtpSchemaType, otpSchema } from "../../utils/schema";
import { useState } from "react";
import { RoutePaths } from "../../routes/routesPath";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


export const ResetPasswordOtp = () => {
  const {
    control,
    formState: { errors, isValid },

    handleSubmit,
  } = useZodForm<OtpSchemaType>(otpSchema, {
    defaultValues: {
      otp: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const onSubmit = (data: OtpSchemaType) => {
    setLoading(true);

    // Mock API call with 2-second timeout
    setTimeout(() => {
      // Simply navigate to the next page
      navigate(RoutePaths.RESET_PASSWORD);

      // Reset loading state
      setLoading(false);
      console.log("data", data);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-12">
        <AuthFormHeader
          title="Provide 6-digit code"
          description="Please enter the authentication code sent to 
        your email account za**ab@gmail.com"
        />
        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <OtpInput control={control} error={errors.otp} />
          </div>

          <div className="">
            <button
              type="submit"
              className="!w-full h-14 button button--secondary"
              disabled={!isValid}
            >
              {" "}
              {loading ? (
                <ClipLoader size={20} color="#ffffff" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center">
        {/* // TODO: change to use react router link */}
        <a
          href=""
          className="text-sm font-bold transition duration-300 ease-in-out text-primary-200 dark:text-primary-400 dark:hover:text-primary-400/70 hover:text-primary-200/70"
        >
          Didn’t get the code?
        </a>
      </div>
    </div>
  );
};
