import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import {
  NewPasswordFormSchemaType,
  newPasswordSchema,
} from "../../utils/schema";
import { useZodForm } from "../../hooks/useZodForm";
import FormPasswordInput from "../../components/form/FormPasswordInput";

export const CreatePassword = () => {
  // const [newPassword, setNewPassword] = useState("");

  const {
    register,
    watch,
    formState: { errors, touchedFields, isValid },
    handleSubmit,
  } = useZodForm<NewPasswordFormSchemaType>(newPasswordSchema, {
    defaultValues: {
      confirmPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (data: NewPasswordFormSchemaType) => {
    console.log("data", data);
  };

  const newPassword = watch("newPassword");

  const rules = [
    {
      label: "Minimum of 8 characters",
      isValid: newPassword.length >= 8,
    },
    {
      label: "At least one uppercase letter (A–Z)",
      isValid: /[A-Z]/.test(newPassword),
    },
    {
      label: "At least one number (0–9)",
      isValid: /\d/.test(newPassword),
    },
    {
      label: "At least one special character (!@#$%^&*)",
      isValid: /[!@#$%^&*]/.test(newPassword),
    },
  ];

  return (
    <div>
      <div className="space-y-12">
        <AuthFormHeader
          title="Add a password"
          description="Create a secure password to access your DefiFundr account for subsequent login"
        />
        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <FormPasswordInput
              label="New password"
              register={register}
              id="newPassword"
              placeholder="Enter password"
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

          <div>
            <button
              type="submit"
              className="!w-full h-14 button button--secondary"
              disabled={!isValid}
            >
              Create password
            </button>
          </div>
          <ul className="space-y-3 mt-4">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                {rule.isValid ? (
                  <span className="size-4 rounded-full border border-[#6C4EF2] bg-white flex items-center justify-center">
                    <span className="size-2 rounded-full bg-[#6C4EF2]"></span>
                  </span>
                ) : (
                  <span className="w-4 h-4 rounded-full border border-gray-300"></span>
                )}
                <span className="text-gray-400 text-xs">{rule.label}</span>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};
