import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        setResInfo(json.data);
        
    }

    const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage
     } = resInfo?.cards?.[2]?.card?.card?.info;

    return resInfo === null ? ( <Shimmer /> 
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(', ')}</h1>
            
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Rice</li>
                <li>Pizza</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;