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

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
    return (
<div className="res-card" style={styleCard}>
    {/* This image come from as a CDN - Content Delivery Network */}
    <img className="res-logo" src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId 
        }
        />
    
        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating}</h4>
        <h4>{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}

        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
    )
}


    
export default RestaurantCard;