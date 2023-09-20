import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    // if (!resData) {
    //     return null; // or some other fallback UI
    // }

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" /> */}
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;