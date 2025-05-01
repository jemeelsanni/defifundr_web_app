import { Check } from "lucide-react";
import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <form className="space-y-8 lg:space-y-12">
      <AuthFormHeader
        title="Welcome to DefiFundr!"
        description="Let’s get to know you! Provide the details below to continue"
      />

      <div className="space-y-6">
        <div className="form-control ">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Provide your first name"
            required
          />
        </div>

        <div className="form-control ">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Provide your last name"
            required
          />
        </div>

        <div className="form-control ">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Provide your last name"
            required
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="relative size-5">
          <input
            type="checkbox"
            id="policy"
            className="border-2 rounded appearance-none size-5 peer border-gray-150 checked:border-0 checked:bg-primary-200"
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
      </div>

      <button
        type="submit"
        className="!w-full h-14 button button--secondary !text-base dark:!bg-primary-200 dark:hover:!bg-primary-200/80"
      >
        Continue
      </button>
    </form>
  );
};

export default CreateAccount;
