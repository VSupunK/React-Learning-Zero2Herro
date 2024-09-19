import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search
            </div>
                <div className="restaurant-container"> 
                    {/* RestaurantCard */}
                    {/* <RestaurantCard resData = {resList[0]}/>
                    <RestaurantCard resData = {resList[1]}/>
                    <RestaurantCard resData = {resList[2]}/>
                    <RestaurantCard resData = {resList[3]}/>
                    <RestaurantCard resData = {resList[4]}/>
                    <RestaurantCard resData = {resList[5]}/>
                    <RestaurantCard resData = {resList[6]}/>
                    <RestaurantCard resData = {resList[7]}/>
                    <RestaurantCard resData = {resList[8]}/>
                    <RestaurantCard resData = {resList[9]}/>
                    <RestaurantCard resData = {resList[10]}/> */}
                    

                    {/* When we use .map -> We need to make sure to add a unique key value */}
                    {resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
                    ))}
                </div>
            
        </div>
    )
}

export default Body;