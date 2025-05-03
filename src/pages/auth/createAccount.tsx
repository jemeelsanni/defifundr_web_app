import { Check } from "lucide-react";
import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form/FormInput";
import { useZodForm } from "../../hooks/useZodForm";
import {
  CreateAccountSchemaType,
  createAccountSchema,
} from "../../utils/schema";
import { ClipLoader } from "react-spinners";
import { useFormError } from "../../hooks/useFormError";
import ErrorMessage from "../../components/form/ErrorMessage";
import { RoutePaths } from "../../routes/routesPath";
import { useState } from "react";

const CreateAccount = () => {
  const {
    register,
    formState: { errors, touchedFields, isValid },
    handleSubmit,
  } = useZodForm<CreateAccountSchemaType>(createAccountSchema);

  const agreeToTerms = useFormError(
    errors.agreeToTerms,
    touchedFields.agreeToTerms
  );

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    setLoading(true);

    // Mock API call with 2-second timeout
    setTimeout(() => {
      // Simply navigate to the next page
      navigate(RoutePaths.CREATE_PASSWORD);

      // Reset loading state
      setLoading(false);
    }, 2000);
  };

  return (
    <form className="space-y-8 lg:space-y-12" onSubmit={handleSubmit(onSubmit)}>
      <AuthFormHeader
        title="Welcome to DefiFundr!"
        description="Let’s get to know you! Provide the details below to continue"
      />

      <div className="space-y-6">
        <FormInput
          label="First Name"
          register={register}
          error={errors.firstName}
          touched={touchedFields.firstName}
          id="firstName"
          placeholder="Provide your first name"
        />

        <FormInput
          label="Last Name"
          register={register}
          error={errors.lastName}
          touched={touchedFields.lastName}
          id="lastName"
          placeholder="Provide your last name"
        />

        <FormInput
          label="Email address"
          register={register}
          error={errors.email}
          touched={touchedFields.email}
          id="email"
          placeholder="Provide email address"
          type="email"
        />
      </div>

      <div className="relative flex gap-2">
        <div className="relative size-5">
          <input
            type="checkbox"
            id="policy"
            className={
              "border-2 rounded appearance-none size-5 peer checked:border-0 checked:bg-primary-200 " +
              (agreeToTerms.hasError ? "border-warning" : "border-gray-150")
            }
            {...register("agreeToTerms")}
          />
          <div className="absolute inset-0 items-center justify-center hidden pointer-events-none peer-checked:flex">
            <Check className="text-white size-3 stroke-3 dark:text-gray-600" />
          </div>
        </div>
        <label
          htmlFor="policy"
          className="text-xs font-medium text-gray-400 dark:text-gray-200"
        >
          By creating an account, I agree to our{" "}
          <Link
            to=""
            className="font-bold text-primary-200 dark:text-primary-400 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to=""
            className="font-bold text-primary-200 dark:text-primary-400 hover:underline "
          >
            Privacy Policy
          </Link>{" "}
          and confirm that I am 18 years and older.
        </label>

        <ErrorMessage errorMessage={agreeToTerms.message} />
      </div>

      <button
        type="submit"
        className="!w-full h-14 button button--secondary !text-base dark:!bg-primary-200 dark:hover:!bg-primary-200/80"
        disabled={!isValid}
      >
        {loading ? <ClipLoader size={20} color="#ffffff" /> : "Continue"}
      </button>
    </form>
  );
};

export default CreateAccount;
