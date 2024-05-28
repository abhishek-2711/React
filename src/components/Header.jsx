// Header Component

import { LOGO_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
