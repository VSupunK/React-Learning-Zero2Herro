import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //Local State Variable - useState() -> this is a react hook
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFiteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("") 

    useEffect (() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        setListOfRestaurants(
            //Optional Chaining
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          

          setFiteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
    };
   
    
    console.log('re rendered')


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline! Please check your online connection.</h1>

    if (listOfRestaurants.length === 0) {
        <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searcg-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button 
                    onClick={() => {
                        //Filter the restaurant cards and update the UI
                        //searchText

                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFiteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5)
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
                    {filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> <RestaurantCard  resData = {restaurant} /></Link>
                    ))}
                </div>
            
        </div>
    )
}

export default Body;

