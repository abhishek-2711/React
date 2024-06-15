import { useState } from "react";
import ItemList from "./ItemList";
export default RestaurentCategory = ({
  data,
  showListItems,
  setShowIndex,
  index,
}) => {
  const toggleItems = () => {
    if (showListItems) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className="flex flex-col bg-slate-100 shadow-xl h-auto p-5 rounded-lg hover:shadow-2xl ">
      <div
        className="flex justify-between px-2 hover:cursor-pointer"
        onClick={() => {
          toggleItems();
        }}
      >
        <span className="font-bold text-lg">
          {data?.card?.card?.title} ({data?.card?.card?.categories?.length})
        </span>
        <span className="text-2xl cursor-pointer">
          {showListItems ? "⬆️" : "⬇️"}
        </span>
      </div>
      <div className="text-start px-2 flex flex-col gap-3 shadow-sm p-2">
        {showListItems && <ItemList items={data.card.card.categories} />}
      </div>
    </div>
  );
};
