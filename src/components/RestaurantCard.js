import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    // if (!resData) {
    //     return null; // or some other fallback UI
    // }

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData;

    return (
        <div className="m-3 p-4 w-56 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img className="rounded-lg w-56 h-44" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="font-bold my-2">{name}</h3>
            <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
            <ul className="flex mt-2">
                <li><h4 className="start-0 bg-green-300 rounded-lg pl-1">{avgRating}⭐</h4></li>
                <li><h4 className="ml-9 font-semibold bg-orange-300 rounded-lg px-1">{costForTwo}</h4></li>
            </ul>
            <h4 className="ml-12 mt-2 font-semibold rounded-lg px-1">{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;