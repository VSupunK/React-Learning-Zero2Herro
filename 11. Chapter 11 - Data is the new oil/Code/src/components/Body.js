import RestaurantCard, {withOpenedRestaurantLabel} from "./RestaurantCard";
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

    const OpenedRestaurantCard = withOpenedRestaurantLabel(RestaurantCard);

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
    };
   
    
    console.log('re rendered')


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline! Please check your online connection.</h1>

    if (listOfRestaurants.length === 0) {
        <Shimmer />
    }

    // Function to handle search logic
    const handleSearch = () => {
        const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFiteredRestaurant(filteredRestaurant);
    };


    return (
        <div className="body">
            <div className="filter flex items-center">
            <div className="search m-2 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black rounded-sm" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch(); // Trigger search on Enter key press
                            }
                        }}
                    />
                    <button className="ml-5 px-4 hover:bg-gray-400 rounded-md bg-blue-400 hover:text-white"
                    onClick={handleSearch}> {/* Trigger search on button click */}
                        Search
                    </button>
                </div>
                <div className="m-2 p-4">
                <button className="px-4 hover:bg-gray-400 rounded-md bg-green-500 hover:text-white" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.6)
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
                        {restaurant.info.isOpen ? (<OpenedRestaurantCard  resData = {restaurant} />) : (<RestaurantCard  resData = {restaurant} />)}

                        {/* <RestaurantCard  resData = {restaurant} /> */}

                        </Link>
                    ))}
                </div>
            
        </div>)
}

export default Body;

