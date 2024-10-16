import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data }) => {
  //console.log(data);
  //console.log(data.card.title);

  const handleClick = () => {
    setShowItems(!showItems)
  };

  const [showItems, setShowItems]= useState(false);

  const { title, itemCards } = data.card;
  return (
    <div className="mx-auto my-4 w-6/12 bg-slate-50 shadow-lg p-4 justify-center text-center hover:bg-red-100 rounded-lg">
      {/* Header */}
      <div>
        <h1 className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
          <span className="font-black">{title} ({itemCards.length})</span>
          <span className="cursor-pointer">
            <MdKeyboardDoubleArrowDown />
          </span>
        </h1>
      </div>
      <div>
        {/* Accordion Body */}
        {showItems && <MenuItemList items={itemCards}/>}
      
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
