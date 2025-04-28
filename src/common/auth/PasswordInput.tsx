import { useState } from "react";
import { EyeOff, EyeOn } from "../../assets/svg/svg";

function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <div className="form-control ">
      <label htmlFor="password">Password</label>
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <div>
          <button
            type="button"
            className="absolute transform -translate-y-1/2 right-4.5 top-1/2 focus:outline-none cursor-pointer"
            aria-label="Toggle password visibility"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOn /> : <EyeOff />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
