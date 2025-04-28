import { AuthFormHeader } from "../../common/auth/AuthFormHeader";

export const ForgetPassword = () => {
  return (
    <div className="flex flex-col gap-14">
      <AuthFormHeader
        title="Forgot your password?"
        description="Provide the email address linked to your DefiFundr account to reset your password and login"
      />
      <form className="flex flex-col gap-14">
        <div className="form-control ">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Provide email address"
          />
        </div>
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
