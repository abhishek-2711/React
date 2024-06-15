import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurentMenu = () => {
  const params = useParams();

  const { resId } = params;

  const resInfo = useRestaurentmenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const items =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => {
        if (
          card.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        ) {
          return card;
        }
      }
    );

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="mt-32 text-center">
      <div className="mb-4 bg-slate-200 w-6/12 mx-auto rounded-lg shadow-lg cursor-pointer">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>
          {cuisines.join(",")} - {costForTwo}
        </p>
      </div>
      <div className="w-6/12 mx-auto  flex flex-col gap-5">
        {categories.map((category, index) => {
          return (
            <RestaurentCategory
              data={category}
              key={category?.card?.card?.categories?.key}
              showListItems={showIndex === index ? true : false}
              index={index}
              setShowIndex={(index) => {
                setShowIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
