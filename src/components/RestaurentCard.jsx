// const restaurents = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

import { CDN_URL } from "../utils/constants";

export default RestaurentCard = (props) => {
  const { restaurent } = props;
  const restaurentInfo = restaurent.info;
  const { name, cuisines, avgRating, costForTwo, sla } = restaurentInfo;
  const { deliveryTime } = sla;

  return (
    <div className="res-card w-60 min-h-96 border border-blue-100 bg-slate-100 hover:bg-slate-200 rounded-2xl">
      <img
        className="w-full max-h-64 px-4 my-4"
        src={CDN_URL + restaurentInfo.cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4> {deliveryTime} Mins</h4>
    </div>
  );
};

export const withPromotedRestaurent = (RestaurentCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-green-500 text-white w-32 rounded-r-2xl z-0">
          Opened
        </label>
        <RestaurentCard {...props} />
      </>
    );
  };
};
