import React, { useState } from "react";
import EmailReminderModal from "../modal/EmailReminderModal";

const EmailVerification: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEmailReminderModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        onClick={openEmailReminderModal}
        className="text-sm font-bold transition duration-300 ease-in-out text-primary-200 dark:text-primary-400 dark:hover:text-primary-400/70 hover:text-primary-200/70"
      >
        Didn't get the code?
      </button>
      
      {/* Render the modal directly */}
      {isModalOpen && <EmailReminderModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default EmailVerification; 