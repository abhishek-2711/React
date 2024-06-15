import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  const firstCategory = items[0];
  if (firstCategory) {
    return firstCategory.itemCards.map((item) => {
      return (
        <div className="bg-slate-50 flex flex-col gap-1 p-5 shadow-lg hover:shadow-xl hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="w-10/12">
              <div>
                <span className="font-semibold">{item?.card?.info?.name}</span>{" "}
                -
                <span className="font-semibold">{item?.card?.info?.price}</span>
              </div>
              <div>
                <p className="font-normal text-sm">
                  {item?.card?.info?.description}
                </p>
              </div>
            </div>
            <div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className="w-20 h-20 rounded-t-md"
              />
              <button className="w-20 bg-blue-400 rounded-b-md">Add</button>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div>Not Found Data</div>;
  }
};

export default ItemList;
