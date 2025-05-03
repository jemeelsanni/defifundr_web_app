import React from "react";
import faceWithMonocle from "../../assets/images/face-with-monocle.png";

const EmailReminderContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
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
      <ul className="space-y-0.5 mb-8 mx-1 text-xs w-full">
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
    </div>
  );
};

export default EmailReminderContent; 