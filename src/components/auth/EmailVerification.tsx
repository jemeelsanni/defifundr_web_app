import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slice/modalSlice";
import EmailReminderContent from "../modal/EmailReminderContent";

const EmailVerification: React.FC = () => {
  const dispatch = useDispatch();

  const openEmailReminderModal = () => {
    dispatch(
      openModal({
        customComponent: <EmailReminderContent />,
        confirmText: "Close",
        size: "md",
        type: "success",
        onConfirm: () => {
          // Any additional action needed on close
        }
      })
    );
  };

  return (
    <button
      onClick={openEmailReminderModal}
      className="text-sm font-bold transition duration-300 ease-in-out text-primary-200 dark:text-primary-400 dark:hover:text-primary-400/70 hover:text-primary-200/70"
    >
      Didn't get the code?
    </button>
  );
};

export default EmailVerification; 