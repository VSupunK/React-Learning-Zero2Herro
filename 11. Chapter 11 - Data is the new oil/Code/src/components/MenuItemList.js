import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const MenuItemList = (items) => {
  console.log(items.items?.card?.info.id);
  return (
    <div>
        {items.items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2">
            <div>
                <span>{item.card.info.name}</span>
                <span>{item.card.info.price}<span><FaIndianRupeeSign /></span></span>
            </div>
            <p className="text-xs text-left">{item.card.info.description}</p>
        </div>
      ))}
      
      
    </div>
  );
};

export default MenuItemList;