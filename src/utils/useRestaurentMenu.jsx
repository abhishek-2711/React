import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurentMenu(resId);
  }, []);

  const fetchRestaurentMenu = async (resId) => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurentMenu;
