import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import FormInput from "../../components/form/FormInput";
import { useZodForm } from "../../hooks/useZodForm";
import {
  ForgotPasswordSchemaType,
  forgotPasswordSchema,
} from "../../utils/schema";

export const ForgotPassword = () => {
  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
  } = useZodForm<ForgotPasswordSchemaType>(forgotPasswordSchema, {
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordSchemaType) => {
    console.log("data", data);
  };

  console.log(errors);
  return (
    <div className="flex flex-col gap-14">
      <AuthFormHeader
        title="Forgot your password?"
        description="Provide the email address linked to your DefiFundr account to reset your password and login"
      />
      <form className="flex flex-col gap-14" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email address"
          register={register}
          error={errors.email}
          touched={touchedFields.email}
          id="email"
          placeholder="Provide email address"
          type="email"
        />
        <div className="space-y-8">
          <div className="">
            <button
              type="submit"
              className="!w-full h-14 button button--secondary"
            >
              {" "}
              Continue
            </button>
          </div>
          <div className="flex items-center justify-center">
            {/* // TODO: change to use react router link */}
            <a
              href=""
              className="text-sm font-bold transition duration-300 ease-in-out text-primary-200 dark:text-primary-400 dark:hover:text-primary-400/70 hover:text-primary-200/70"
            >
              Back to login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
