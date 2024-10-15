import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";


const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div className="m-[5px] p-[15px] w-[250px] bg-orange-100 rounded-lg hover:bg-emerald-200 hover:shadow-xl hover:scale-[1.1] hover:duration-100">
            {/* This image come from as a CDN - Content Delivery Network */}
            <div className="">
            <img className="object-cover h-48 w-96 rounded-lg shadow-2xl shadow-black" src=
                { CDN_URL + cloudinaryImageId }
                />
            </div>
            
            <div className=""> 
            <h3 className="text-lg font-bold py-3">{name}</h3>
            <h4><span className="font-bold">Cuisines: </span>{cuisines.join(", ")}</h4>
            <h4><span className="font-bold">Rating: </span>{avgRating}</h4>
            <h4><span className="font-bold">Cost: : </span>{costForTwo}</h4>
            <h4><span className="font-bold">Delivery Time: </span>{deliveryTime} minutes</h4>
            </div>
            
        </div>
    )
}



export default RestaurantCard;