import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import OtpInput from "../../components/auth/OtpInput";

import { useZodForm } from "../../hooks/useZodForm";
import { OtpSchemaType, otpSchema } from "../../utils/schema";

import EmailVerification from "../../components/auth/EmailVerification";

export const VerifyEmail = () => {
  const {
    control,
    formState: { errors },

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
    <div className="space-y-12">
      <AuthFormHeader
        title="Verify your email address"
        description="Please enter the verification code sent to 
            your email account za**ab@gmail.com"
      />
      <div className="font-normal">
        <OtpInput control={control} error={errors.otp} />
      </div>
      <div>
        <div className="">
          <button
            type="submit"
            className="!w-full h-14 button button--secondary"
            onClick={handleSubmit(onSubmit)}
          >
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
