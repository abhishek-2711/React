// Header Component

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header" style={styleCard}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
