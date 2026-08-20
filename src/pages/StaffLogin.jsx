import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffLogin.css";
import buildingImage from "../assets/jengo.png";

function StaffLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("staffLoggedIn", "true");

      navigate("/staff-dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
   <div
  className="staff-login-page"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(15,61, 145, 0.78),
        rgba(15, 61, 145, 0.78)
      ),
      url(${buildingImage})
    `,
  }}
>

      <div className="staff-login-card">

        <div className="staff-login-header">
          <div className="staff-login-icon">
            🔐
          </div>

          <h1>Staff Login</h1>

          <p>
            Iyunga Technical School
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="login-form-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
            />
          </div>

          <div className="login-form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="staff-login-btn"
          >
            Login
          </button>

        </form>

        <div className="login-info">
          <p>Staff access only</p>
        </div>

      </div>

    </div>
  );
}

export default StaffLogin;