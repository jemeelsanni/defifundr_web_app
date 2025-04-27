export const AuthFooter = () => {
  return (
    <div className="hidden w-full p-5 text-sm text-gray-600 lg:block md:block">
      <div className="flex justify-between">
        <p className="text-[#757575]">© 2025, All rights reserved</p>

        <div className="flex gap-4 text-black dark:text-gray-150">
          {/* // TODO: Change to react router link */}
          <a className="transition duration-300 ease-in-out cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
            Privacy Policy
          </a>
          <a className="transition duration-300 ease-in-out cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
            Terms and condition
          </a>
        </div>
      </div>
    </div>
  );
};
