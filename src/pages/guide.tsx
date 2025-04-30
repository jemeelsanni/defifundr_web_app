import { ThemeToggle } from "../common/ThemeToggler";

import OTPInput from "../components/OtpInput";
import useModal from "../hooks/useModal";

const Guide = () => {
  const handleOTPComplete = (code: string) => {
    console.log("OTP completed:", code);
    showSuccessModal(
      "OTP Verified",
      `Your OTP (${code}) has been verified successfully.`
    );
  };
  const {
    showInfoModal,
    showSuccessModal,
    showErrorModal,
    showWarningModal,
    showConfirmModal,
    showCustomModal,
  } = useModal();

  const handleDelete = () => {
    // Simulate delete action
    console.log("Delete action confirmed");
    // Show success message after delete
    showSuccessModal("Deleted", "Item has been successfully deleted.");
  };

  const handleCustomModal = () => {
    const CustomContent = (
      <div className="flex flex-col items-center space-y-6 text-center">
        {/* Close button at top right */}

        {/* Emoji container with purple background */}
        <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-primary-200">
          <span className="text-4xl">🤔</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold">Custom?</h2>

        {/* Bullet points list */}
        <ul className="space-y-2 text-left">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Check your spam or junk folder - Sometimes, emails get filtered.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Wait a few minutes - it may take a moment to arrive.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Resend the email - Tap the button to send it again.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Check if your email is correct - Sometimes, we make mistakes.
            </span>
          </li>
        </ul>
      </div>
    );

    showCustomModal(CustomContent, "md");
  };
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="h2">Form Controls Guide</h1>
        <ThemeToggle />
      </div>

      {/* OTP Section */}
      <div className="p-6 mb-12 bg-gray-100 rounded-lg dark:bg-gray-500">
        <h2 className="mb-6 h3">OTP Verification</h2>
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <OTPInput onComplete={handleOTPComplete} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left column - Text & Number inputs */}
        <div className="space-y-6">
          <h2 className="mb-4 h3">Text Inputs</h2>

          {/* Regular text input */}
          <div className="form-control">
            <label htmlFor="name">Regular Text Input</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          {/* Email input */}
          <div className="form-control">
            <label htmlFor="email">Email Input</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          {/* Password input */}
          <div className="form-control">
            <label htmlFor="password">Password Input</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Number input - with appearance-none to remove spinners */}
          <div className="form-control">
            <label htmlFor="amount">Number Input (No Spinners)</label>
            <input
              type="number"
              id="amount"
              placeholder="0.00"
              className="appearance-none"
            />
          </div>

          {/* Textarea */}
          <div className="form-control">
            <label htmlFor="message">Textarea</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Right column - Select, Radio & Checkbox */}
        <div className="space-y-6">
          <h2 className="mb-4 h3">Selection Controls</h2>

          {/* Basic Select dropdown */}
          <div className="form-control">
            <label htmlFor="category">Default Select Dropdown</label>
            <select id="category">
              <option value="">Select a category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Disabled Select */}
          <div className="form-control">
            <label htmlFor="disabledSelect">Disabled Select</label>
            <select id="disabledSelect" disabled>
              <option value="">Select is disabled</option>
              <option value="option1">Option 1</option>
            </select>
          </div>

          {/* Select with error */}
          <div className="form-control form-control--invalid">
            <label htmlFor="errorSelect">Select with Error</label>
            <select id="errorSelect">
              <option value="">Please select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <div className="error-message">This field is required</div>
          </div>

          {/* Checkbox */}
          <div className="mt-8">
            <h3 className="mb-3 h4">Checkboxes</h3>
            <div className="space-y-3">
              <div className="form-control--checkbox">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  className="accent-primary-200 bg-primary-200 checked:bg-primary-200 focus:ring-primary-200"
                />
                <label htmlFor="agreeToTerms">
                  I agree to the terms and conditions
                </label>
              </div>

              <div className="form-control--checkbox">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="accent-primary-200 bg-primary-200 checked:bg-primary-200 focus:ring-primary-200"
                  defaultChecked
                />
                <label htmlFor="subscribe">Subscribe to newsletter</label>
              </div>
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="mt-6">
            <h3 className="mb-3 h4">Radio Buttons</h3>
            <div className="space-y-3">
              <div className="form-control--checkbox">
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioGroup"
                  className="accent-primary-200 bg-primary-200 checked:bg-primary-200 focus:ring-primary-200"
                  defaultChecked
                />
                <label htmlFor="radioOption1">Option 1</label>
              </div>
              <div className="form-control--checkbox">
                <input
                  type="radio"
                  id="radioOption2"
                  name="radioGroup"
                  className="accent-primary-200 bg-primary-200 checked:bg-primary-200 focus:ring-primary-200"
                />
                <label htmlFor="radioOption2">Option 2</label>
              </div>
              <div className="form-control--checkbox">
                <input
                  type="radio"
                  id="radioOption3"
                  name="radioGroup"
                  className="accent-primary-200 bg-primary-200 checked:bg-primary-200 focus:ring-primary-200"
                />
                <label htmlFor="radioOption3">Option 3</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button examples */}
      <div className="mt-8 space-y-4">
        <h2 className="mb-4 h3">Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <button className="button button--primary">Primary Button</button>
          <button className="button button--secondary">Secondary Button</button>
          <button className="button button--primary" disabled>
            Disabled Button
          </button>
        </div>
      </div>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="h2">Modal Examples</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <button
            className="button button--primary"
            onClick={() =>
              showInfoModal("Information", "This is an informational message.")
            }
          >
            Show Info Modal
          </button>

          <button
            className="button button--primary"
            onClick={() =>
              showSuccessModal("Success", "Operation completed successfully!")
            }
          >
            Show Success Modal
          </button>

          <button
            className="button button--primary"
            onClick={() =>
              showErrorModal(
                "Error",
                "An error occurred while processing your request."
              )
            }
          >
            Show Error Modal
          </button>

          <button
            className="button button--primary"
            onClick={() =>
              showWarningModal("Warning", "This action cannot be undone.")
            }
          >
            Show Warning Modal
          </button>

          <button
            className="button button--primary"
            onClick={() =>
              showConfirmModal(
                "Confirm Delete",
                "Are you sure you want to delete this item?",
                handleDelete,
                "Delete",
                "Cancel"
              )
            }
          >
            Show Confirm Modal
          </button>

          <button
            className="button button--primary"
            onClick={handleCustomModal}
          >
            Show Custom Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
