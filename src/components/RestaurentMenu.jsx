import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../utils/useRestaurentMenu";
const RestaurentMenu = () => {
  const params = useParams();
  const { resId } = params;
  const resInfo = useRestaurentmenu(resId);

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const items =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards || [];

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-4 items-center border border-black w-96 mx-auto my-24 h-96 bg-slate-200 rounded-3xl">
      <h2 className="font-bold">{name}</h2>
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
