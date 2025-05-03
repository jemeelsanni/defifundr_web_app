import successEmoji from "../../assets/images/SuccessEmoji.png";
const WelcomeOnboardModal = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6 text-center">
      <div className="p-3 rounded-full size-30 bg-primary-400">
        <div className="flex items-center justify-center text-6xl rounded-full size-full bg-primary-200">
          <img src={successEmoji} alt="emoji" className="size-12" />
        </div>
      </div>

      <h2 className="text-3xl font-bold">Welcome Onboard!</h2>
      <p className="max-w-xs text-gray-400 dark:text-white">
        Experience Fast, Secure Crypto & Fiat Payroll & Invoicing with Defifundr
      </p>
    </div>
  );
};

export default WelcomeOnboardModal;
