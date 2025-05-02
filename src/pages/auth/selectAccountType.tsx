import { useState } from "react";
import { Business, Employee, FreeLancer } from "../../assets/svg/svg";
import { AuthFormHeader } from "../../common/auth/AuthFormHeader";

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
  const [isSelected, setIsSelected] = useState("");

  const handleSelected = (accountType: string) => setIsSelected(accountType);

  return (
    <div className="space-y-14 lg:space-y-16 overflow-hidden">
      <AuthFormHeader
        title="Select account type"
        description="Choose an account type that best suits your usecase"
      />
      <div className="flex gap-4 flex-col 2xs:flex-row">
        {accountTypes.map((account) => {
          const isActive = isSelected === account.label;
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
      </div>

      <button
        className="button button--secondary h-14 !w-full disabled:opacity-40"
        disabled={isSelected === ""}
      >
        Continue
      </button>
    </div>
  );
};

export default SelectAccountType;
