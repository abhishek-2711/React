// const restaurents = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

import { CDN_URL } from "../utils/constants";

export default RestaurentCard = (props) => {
  const { restaurent } = props;
  const restaurentInfo = restaurent.info;
  const { name, cuisines, avgRating, costForTwo, sla } = restaurentInfo;
  const { deliveryTime } = sla;

  return (
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + restaurentInfo.cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4> {deliveryTime} Mins</h4>
    </div>
  );
};
