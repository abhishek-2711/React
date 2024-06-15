import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

export default Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [copyListOfRestaurents, setCopyListOfRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();

    const restaurentData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurents(restaurentData);

    setCopyListOfRestaurents(restaurentData);
  }

  // data.cards[1].card.card.gridElements.infoWithStyle.restaurants

  function getTopRatedRestaurants() {
    let filteredRestaurents = listOfRestaurents.filter((res) => {
      return res.info.avgRating > 4.5;
    });
    setListOfRestaurents(filteredRestaurents);
  }

  const searchRestaurents = () => {
    searchedResult = copyListOfRestaurents.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurents(searchedResult);
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-5">
      {/* <div className="search">Search</div> */}
      <div className="flex mb-5 align-middle justify-center">
        <div className="mr-6">
          <input
            type="text"
            name=""
            id="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border border-black pl-1 rounded-lg"
          />
          <button
            className="w-20 bg-blue-400 border border-black rounded-lg hover:text-white"
            onClick={() => {
              searchRestaurents();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="w-60 bg-blue-400 rounded-lg border-black hover:text-white"
          onClick={() => {
            getTopRatedRestaurants();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap gap-16 justify-around">
        {listOfRestaurents.map((restaurent) => (
          <Link
            to={"restaurents/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestaurentCard restaurent={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};
