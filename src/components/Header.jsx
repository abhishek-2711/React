// Header Component

import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // useEffect() will be called everytime if no dependency array (default behaviour)
  // useEffect() will be called once if we provide [] dependency array
  // useEffect() will
  useEffect(() => {
    console.log("useEffect() called");
  }, []);

  console.log("header rendered");
  return (
    <div className="header" style={styleCard}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
