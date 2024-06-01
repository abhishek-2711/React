import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  console.log(params);
  const { resId } = params;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const json = await fetch(MENU_API + resId);
    const data = await json.json();
    const resInfo = data;
    setResInfo(resInfo);
  };

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const items =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards || [];

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(",")} - {costForTwo}
      </p>

      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
