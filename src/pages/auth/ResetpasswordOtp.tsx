import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import OtpInput from "../../components/auth/OtpInput";
import { useZodForm } from "../../hooks/useZodForm";
import { OtpSchemaType, otpSchema } from "../../utils/schema";

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

  const onSubmit = (data: OtpSchemaType) => {
    console.log("data", data);
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
              Continue
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
