import React, { Fragment } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import faceWithMonocle from "../../assets/images/face-with-monocle.png";

interface EmailReminderModalProps {
  onClose: () => void;
}

const EmailReminderModal: React.FC<EmailReminderModalProps> = ({ onClose }) => {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={onClose}
      >
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            aria-hidden="true"
          />
        </Transition.Child>

        {/* Modal container */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className="w-full max-w-md flex-col flex rounded-[24px] bg-white dark:bg-gray-500 text-black dark:text-white relative px-6 py-[4.25rem] shadow-xl transform transition-all duration-300 ease-out"
              >
                {/* Close button */}
                <button onClick={onClose} className="self-start absolute top-5 left-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500 dark:text-gray-200"
                  >
                    <path
                      d="M23.4532 6.66675L15.9998 14.1201L8.5465 6.66675L6.6665 8.54675L14.1198 16.0001L6.6665 23.4534L8.5465 25.3334L15.9998 17.8801L23.4532 25.3334L25.3332 23.4534L17.8798 16.0001L25.3332 8.54675L23.4532 6.66675Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                {/* Emoji icon in circle */}
                <div className="flex justify-center mb-6 mt-5">
                  <div className="w-24 h-24 rounded-full bg-primary-200/30 flex items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full bg-primary-200 flex items-center justify-center">
                      <img 
                        src={faceWithMonocle}
                        alt="Face with monocle"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-left px-1 mb-3 dark:text-white">
                  Didn't Get the Email?
                </h3>

                {/* Bullet points */}
                <ul className="space-y-0.5 mb-8 mx-1 text-xs">
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0 dark:text-gray-200">•</span>
                    <span className="text-gray-700 dark:text-gray-200">Check your spam or junk folder - Sometimes, emails get filtered.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0 dark:text-gray-200">•</span>
                    <span className="text-gray-700 dark:text-gray-200">Wait a few minutes – It may take a moment to arrive.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0 dark:text-gray-200">•</span>
                    <span className="text-gray-700 dark:text-gray-200">Resend the email - Tap the button to send it again.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0 dark:text-gray-200">•</span>
                    <span className="text-gray-700 dark:text-gray-200">Check if your email is correct - Sometimes, we make mistakes.</span>
                  </li>
                </ul>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="button !w-full py-3 rounded-full bg-primary-200 text-white hover:bg-primary-100 transition-colors duration-200"
                >
                  Close
                </button>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EmailReminderModal; 