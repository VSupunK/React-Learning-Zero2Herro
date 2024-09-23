import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {
    //Local State Variable - useState() -> this is a react hook
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect (() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING" this is not working for this app
            "https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284&isDineoutCollection=false"
        );

        const json = await data.json();

        console.log(json);
        setListOfRestaurants(
            //Optional Chaining
            json?.data?.success?.cards[1]?.card?.card.gridElements.infoWithStyle
              .restaurants
          );
    };

    // //Coditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     //return <h1>Loading...</h1>
    //     return (
    //         //Shimmer UI
    //         <Shimmer />
    //     )
    // }

    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
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
                        <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                    ))}
                </div>
            
        </div>
    )
}

export default Body;