// Header Component

import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  console.log("header rendered");
  return (
    <div className="flex justify-between bg-blue-300 h-20 fixed top-0 left-0 w-full  shadow-2xl z-10">
      <div className="">
        <img className="h-20 rounded-e-full" src={LOGO_URL} alt="" />
      </div>

      <div className="my-auto px-8">
        <ul className="flex gap-5">
          <li className="hover:cursor-pointer hover:text-white">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="hover:cursor-pointer hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-white">
            <Link to="/groccery">Groccery</Link>
          </li>
          <button
            className="hover:cursor-pointer hover:text-white border border-black w-36 bg-blue-600 rounded-lg"
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
