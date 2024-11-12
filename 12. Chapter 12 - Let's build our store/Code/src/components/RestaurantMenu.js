import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import {MENU_API} from '../utils/constants'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //  console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards )

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <div className="bg-orange-100 py-4">
        <h1 className="font-bold text-xl pb-5  text-center">{name}</h1>
        <h3 className="font-semibold text-lg text-center">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        {categories.map((category, index) => (
            // controlled component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card}
            showItems={ index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
