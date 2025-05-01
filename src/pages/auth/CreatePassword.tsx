import { useState } from "react";
import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { EyeOff, EyeOn } from "../../assets/svg/svg";

export const CreatePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prev) => !prev);
    };

    const rules = [
        {
            label: "Minimum of 8 characters",
            isValid: newPassword.length >= 8,
        },
        {
            label: "At least one uppercase letter (A–Z)",
            isValid: /[A-Z]/.test(newPassword),
        },
        {
            label: "At least one number (0–9)",
            isValid: /\d/.test(newPassword),
        },
        {
            label: "At least one special character (!@#$%^&*)",
            isValid: /[!@#$%^&*]/.test(newPassword),
        },
    ];

    return (
        <div>
            <div className="space-y-12">
                <AuthFormHeader
                    title="Add a password"
                    description="Create a secure password to access your DefiFundr account for subsequent login"
                />
                <form className="space-y-12">
                    <div className="space-y-6">
                        <div className="form-control">
                            <label htmlFor="newPassword">New password</label>
                            <div className="relative">
                                <input
                                    type={isNewPasswordVisible ? "text" : "password"}
                                    name="newPassword"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full border rounded px-4 py-2"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4.5 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                    aria-label="Toggle password visibility"
                                    onClick={toggleNewPasswordVisibility}
                                >
                                    {isNewPasswordVisible ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <div className="relative">
                                <input
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm password"
                                    className="w-full border rounded px-4 py-2"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4.5 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                    aria-label="Toggle password visibility"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {isConfirmPasswordVisible ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="!w-full h-14 button button--secondary">
                            Create password
                        </button>
                    </div>
                    <ul className="space-y-3 mt-4">
                        {rules.map((rule, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                                {rule.isValid ? (
                                    <span className="size-4 rounded-full border border-[#6C4EF2] bg-white flex items-center justify-center">
                                        <span className="size-2 rounded-full bg-[#6C4EF2]"></span>
                                    </span>
                                ) : (
                                    <span className="w-4 h-4 rounded-full border border-gray-300"></span>
                                )}
                                <span className="text-gray-400 text-xs">{rule.label}</span>
                            </li>
                        ))}


                    </ul>
                </form>
            </div>
        </div>
    );
};
