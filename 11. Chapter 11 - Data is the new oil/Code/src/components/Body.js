import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";

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
            RES_API //This is the restaurant API from "../utils/constants"
        );

        const json = await data.json();
        
        setListOfRestaurants(
            //Optional Chaining
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          

          setFiteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );

          console.log(json?.data?.cards[1])
    };
   
    
    console.log('re rendered')


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline! Please check your online connection.</h1>

    if (listOfRestaurants.length === 0) {
        <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-2 p-4">
                    <input type="text" className="border border-solid border-black rounded-sm" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="ml-5 px-4 hover:bg-gray-400 rounded-md bg-blue-400 hover:text-white"
                    onClick={() => {
                        //Filter the restaurant cards and update the UI
                        //searchText

                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFiteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-2 p-4">
                <button className="px-4 hover:bg-gray-400 rounded-md bg-green-500 hover:text-white" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5)
                        ;
                        setListOfRestaurants(filteredList);
                    
                }}>
                    Top Rated Restaurants
                    </button>
                </div>
                
            </div>
            {/* <div className="Search">Search
            </div> */}
                <div className="flex flex-wrap justify-center gap-4"> 
                    {/* When we use .map -> We need to make sure to add a unique key value */}
                    {filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> 
                        {/* If the restaurant is promoted then add a promoted label to it */}
                        <RestaurantCard  resData = {restaurant} /></Link>
                    ))}
                </div>
            
        </div>
    )
}

export default Body;

