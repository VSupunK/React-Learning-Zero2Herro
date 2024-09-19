import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from 'react';

const Body = () => {

    //Local State Variable - useState() -> this is a react hook
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4)
                        ;
                        setListOfRestaurants(filteredList);
                    
                }}>
                    Top Rated Restaurants
                    </button>
            </div>
            {/* <div className="Search">Search
            </div> */}
                <div className="restaurant-container"> 
                    {/* When we use .map -> We need to make sure to add a unique key value */}
                    {listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
                    ))}
                </div>
            
        </div>
    )
}

export default Body;