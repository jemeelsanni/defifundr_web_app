import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form/FormInput";
import { useZodForm } from "../../hooks/useZodForm";
import {
  CreateAccountSchemaType,
  createAccountSchema,
} from "../../utils/schema";
import { ClipLoader } from "react-spinners";
import { RoutePaths } from "../../routes/routesPath";
import { useState } from "react";
import FormPrivacy from "../../components/form/FormPrivacy";

const CreateAccount = () => {
  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
  } = useZodForm<CreateAccountSchemaType>(createAccountSchema, {
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      agreeToTerms: false,
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: CreateAccountSchemaType) => {
    setLoading(true);
    console.log(data);

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
        currentStep={1}
        totalSteps={4}
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

      <FormPrivacy
        id="agreeToTerms"
        register={register}
        error={errors.agreeToTerms}
        touched={touchedFields.agreeToTerms}
      />

      <button
        type="submit"
        className="!w-full h-14 button button--secondary !text-base dark:!bg-primary-200 dark:hover:!bg-primary-200/80"
      >
        {loading ? <ClipLoader size={20} color="#ffffff" /> : "Continue"}
      </button>
    </form>
  );
};

export default CreateAccount;
