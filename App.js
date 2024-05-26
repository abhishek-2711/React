import React from "react";
import ReactDOM from "react-dom/client";
import { restaurents } from "./restaurentList";

// Header Component

const Header = () => {
  return (
    <div className="header" style={styleCard}>
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUqQytDY6G57y6jHGjP-qJSubpEEBDKm7D1l5tnYwMQ&s"
          alt=""
        />
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

// const restaurents = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

const RestaurentCard = (props) => {
  const { restaurent } = props;
  const restaurentInfo = restaurent.info;
  const { name, cuisines, avgRating, costForTwo, sla } = restaurentInfo;
  const { deliveryTime } = sla;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurentInfo.cloudinaryImageId
        }
        alt=""
      />
      <h3>Name - {name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Rating - {avgRating}</h4>
      <h4>Cost For Two - {costForTwo}</h4>
      <h4>Delivery Time - {deliveryTime} Mins</h4>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// Body Component

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurents.map((restaurent) => (
          <RestaurentCard restaurent={restaurent} key={restaurent.info.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
