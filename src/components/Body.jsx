import RestaurentCard from "./RestaurentCard";
import { restaurents } from "../utils/restaurentList";
import { useState } from "react";

export default Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(restaurents);

  function getTopRatedRestaurants() {
    let filteredRestaurents = listOfRestaurents.filter((res) => {
      return res.info.avgRating > 4.5;
    });
    setListOfRestaurents(filteredRestaurents);
  }

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            getTopRatedRestaurants();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard restaurent={restaurent} key={restaurent.info.id} />
        ))}
      </div>
    </div>
  );
};
