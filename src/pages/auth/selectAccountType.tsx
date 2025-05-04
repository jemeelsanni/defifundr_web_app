import { useState } from "react";
import { Business, Employee, FreeLancer } from "../../assets/svg/svg";
import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/routesPath";
import { ClipLoader } from "react-spinners";
import { accountTypeSchema, AccountTypeSchemaType } from "../../utils/schema";
import { useZodForm } from "../../hooks/useZodForm";
import ErrorMessage from "../../components/form/ErrorMessage";

const accountTypes = [
  {
    image: <Business />,
    label: "Business",
  },
  {
    image: <FreeLancer />,
    label: "Freelancer",
  },
  {
    image: <Employee />,
    label: "Employee",
  },
];

const SelectAccountType = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useZodForm<AccountTypeSchemaType>(accountTypeSchema, {
    defaultValues: {
      accountType: "",
    },
  });

  const selectedAccountType = watch("accountType");

  const handleSelected = (accountType: string) => {
    setValue("accountType", accountType, { shouldValidate: true });
  };

  const onSubmit = (data: AccountTypeSchemaType) => {
    setLoading(true);
    console.log(data);

    // Mock API call with 2-second timeout
    setTimeout(() => {
      // Simply navigate to the next page
      navigate(RoutePaths.CREATE_BUSINESS_DETAIL);

      // Reset loading state
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden space-y-14 lg:space-y-16"
    >
      <AuthFormHeader
        title="Select account type"
        description="Choose an account type that best suits your usecase"
      />
      <div className="flex flex-col gap-4 2xs:flex-row relative">
        {accountTypes.map((account) => {
          const isActive = selectedAccountType === account.label;

          return (
            <div
              key={account.label}
              onClick={() => handleSelected(account.label)}
              className="w-fit"
            >
              <div
                className={
                  "mb-3  size-25 2xs:size-22 xs:size-25 lg:size-32 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-500 transition-all ease-linear " +
                  (isActive
                    ? "border-2 border-primary-200"
                    : "opacity-30 cursor-pointer")
                }
              >
                {account.image}
              </div>

              <p
                className={
                  " text-base text-center " +
                  (isActive
                    ? "text-gray-600 dark:text-gray-150 font-bold"
                    : "text-gray-400 dark:text-gray-200 font-medium")
                }
              >
                {account.label}
              </p>
            </div>
          );
        })}

        <ErrorMessage
          errorMessage={errors.accountType?.message}
          isVisible={!selectedAccountType}
        />
      </div>

      <button className="button button--secondary h-14 !w-full disabled:opacity-40">
        {loading ? <ClipLoader size={20} color="#ffffff" /> : "Continue"}
      </button>
    </form>
  );
};

export default SelectAccountType;
