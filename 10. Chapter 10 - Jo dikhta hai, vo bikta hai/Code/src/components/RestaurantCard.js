import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";

//If we need to add styles in here, we can do it as JS object
const styleCard = {
    margin: "5px",
    padding: "5px",
    width: "200px",
    padding: "10px",
    // border: "1px solid black",
    backgroundColor: "#fff0e0"
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;
    return (
        <div className="m-[5px] p-[15px] w-[250px] bg-orange-100 rounded-lg hover:bg-emerald-200 hover:shadow-xl">
            {/* This image come from as a CDN - Content Delivery Network */}
            <div className="">
            <img className="w-full rounded-lg" src=
                { CDN_URL + cloudinaryImageId }
                />
            </div>
            
            <div className=""> 
            <h3 className="text-lg font-bold py-3">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
            </div>
            
        </div>
    )
}



export default RestaurantCard;