import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    // if (!resData) {
    //     return null; // or some other fallback UI
    // }

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData;

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="res-name">{name}</h3>
            <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
            <h4 className="res-avg">{avgRating}⭐</h4>
            <h4 className="res-cost">{costForTwo}</h4>
            <h4 className="res-time">{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;