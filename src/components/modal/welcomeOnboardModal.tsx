import successEmoji from "../../assets/images/SuccessEmoji.png";
const WelcomeOnboardModal = ( ) => {
    return (
      <div className="flex flex-col items-center space-y-6 text-center p-4">
        <div className="size-30 rounded-full bg-primary-400 p-3">
            <div className="size-full rounded-full bg-primary-200 flex items-center justify-center text-6xl">
               <img src={successEmoji} alt="emoji" className="size-12" />
            </div>
        </div>
  
        <h2 className="text-3xl font-bold">Welcome Onboard!</h2>
        <p className="text-gray-400 max-w-xs">
           Experience Fast, Secure Crypto & Fiat Payroll & Invoicing with Defifundr
        </p>
  
       
      </div>
    );
  };
  
  export default WelcomeOnboardModal;
  