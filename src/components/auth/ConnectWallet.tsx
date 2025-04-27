import {
  AppleLogo,
  GoogleLogo,
  MetaMaskBarge,
  PhantomLogo,
  StarknetLogo,
} from "../../assets/svg/svg";

export const ConnectWallet = () => {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        aria-label="Sign in with Google"
        className="flex items-center justify-center transition duration-300 ease-in-out rounded-full cursor-pointer size-14 border-1 border-gray-150 dark:border-gray-300 shrink-0 dark:hover:border-gray-400 hover:border-gray-200"
      >
        <GoogleLogo />
      </button>
      <button
        type="button"
        aria-label="Sign in with Apple"
        className="flex items-center justify-center transition duration-300 ease-in-out rounded-full cursor-pointer size-14 border-1 border-gray-150 dark:border-gray-300 shrink-0 dark:hover:border-gray-400 hover:border-gray-200"
      >
        <AppleLogo />
      </button>
      <button
        type="button"
        aria-label="Sign in with web3"
        className="flex items-center justify-center gap-2 px-4 py-2 transition duration-300 ease-in-out rounded-full cursor-pointer button border-1 border-gray-150 dark:border-gray-300 grow-1 dark:hover:border-gray-400 hover:border-gray-200"
      >
        <span className="">Connect Wallet</span>
        <div className="hidden xs:block">
          <MetaMaskBarge />
        </div>
        <div className="hidden xs:block md:hidden lg:block">
          <StarknetLogo />
        </div>
        <div className="hidden lg:block">
          <PhantomLogo />
        </div>
      </button>
    </div>
  );
};
