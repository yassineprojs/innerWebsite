import { useState } from "react";

export const LoginPassword = ({ open, onValidation }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.text();
      if (response.ok && result === "Success") {
        onValidation(true);
      } else {
        onValidation(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (open) {
    return (
      <div className="popupContainer">
        <div className="startPopup">
          <p className="login_para">
            Ahmed Yassine Meddeb Portfolio Showcase 2024
          </p>
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <label htmlFor="password" className="login_para">
              Password:
            </label>
            <input
              type="password"
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
