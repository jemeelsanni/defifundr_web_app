import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import {
  NewPasswordFormSchemaType,
  newPasswordSchema,
} from "../../utils/schema";
import { useZodForm } from "../../hooks/useZodForm";
import FormPasswordInput from "../../components/form/FormPasswordInput";
import { useState } from "react";
import { RoutePaths } from "../../routes/routesPath";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


export const ResetPassword = () => {
  const {
    register,
    formState: { errors, touchedFields, isValid },
    handleSubmit,
  } = useZodForm<NewPasswordFormSchemaType>(newPasswordSchema, {
    defaultValues: {
      confirmPassword: "",
      newPassword: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: NewPasswordFormSchemaType) => {
    setLoading(true);

    // Mock API call with 2-second timeout
    setTimeout(() => {
      // Simply navigate to the next page
      navigate(RoutePaths.SIGNIN);

      // Reset loading state
      setLoading(false);
      console.log("data", data);
    }, 2000);
  };

  return (
    <div>
      <div className="space-y-12">
        <AuthFormHeader
          title="Reset password"
          description="Create a new secure password to access your DefiFundr account for subsequent login"
        />
        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <FormPasswordInput
              label="New password"
              register={register}
              error={errors.newPassword}
              touched={touchedFields.newPassword}
              id="newPassword"
              placeholder="New password"
            />

            <FormPasswordInput
              label="Confirm password"
              register={register}
              error={errors.confirmPassword}
              touched={touchedFields.confirmPassword}
              id="confirmPassword"
              placeholder="Confirm password"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="!w-full h-14 button button--secondary"
              disabled={!isValid}
            >
              {loading ? (
                <ClipLoader size={20} color="#ffffff" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
