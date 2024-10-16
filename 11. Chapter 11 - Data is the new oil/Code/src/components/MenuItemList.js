import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CDN_URL } from "../utils/constants";

const MenuItemList = (items) => {
  return (
    <div>
        {items.items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2">
            <div className="flex justify-between pb-5">
                <div className="font-bold bg-orange-300 py-1 px-4 rounded-full">{item.card.info.name}</div>
                <div className="flex gap-1 items-center bg-green-400 py-1 px-4 rounded-full"><label className="font-bold">{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</label>
                <FaIndianRupeeSign />
                </div>
                
            </div>
            <div className="flex gap-10">
            <img src={CDN_URL + item.card.info.imageId} className="object-cover w-[150px] h-[150px] rounded-full"></img>
            <div className="justify-start">
              <p className="text-md text-left">{item.card.info.description}</p>
              <button className=" bg-green-800 border-black text-white px-4 py-2 rounded-lg">Add+</button>
            </div>
            
            </div>
            
        </div>
      ))}
      
      
    </div>
  );
};

export default MenuItemList;