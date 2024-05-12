import { useState } from "react";

export const LoginPassword = ({ open, onValidation }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword === "02062001") {
      onValidation(true);
    }
  };

  if (open) {
    return (
      <div className="popupContainer">
        <div className="startPopup">
          <p className="login_para">
            Ahmed Yassine Meddeb Portfolio Showcase 2024
          </p>
          <form className="login-form">
            <label htmlFor="password" className="login_para">
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="blinking-cursor-input"
              autoFocus
            />
          </form>
        </div>
      </div>
    );
  }
};

export default LoginPassword;
