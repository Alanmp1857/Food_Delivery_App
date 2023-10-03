import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import image from '../utils/image.jpg';
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [searchText, setSearchText] = useState("");

    const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } = useRestaurantList();

    // console.log("Body Rendered", listOfRestaurants);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you're Offline! Please check your internet connection.</h1>
                <img src={image} alt="no-internet" />
            </div>
        )
    }

    const { setUserName, loggedInUser } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="m-2 p-2 flex items-center">
                {/* Search Feature */}
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="ml-2 p-1 bg-green-200 rounded-lg hover:bg-green-300 shadow-lg" onClick={() => {
                    // console.log(searchText);

                    const filteredRestaurant = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>

                {/* Top Rated Restaurant feature */}
                <button
                    className="ml-4 bg-blue-200 rounded-lg p-2 hover:bg-blue-300 shadow-lg"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>

                <div className="m-4 p-4">
                    <label>UserName: </label>
                    <input className="border border-black p-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>



            {/* Promoted filter */}
            <div className="flex flex-wrap ml-2">
                {filteredRestaurant.map((restaurant) => (<Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>{
                    restaurant.info.avgRating > 4.4 ? (
                        <RestaurantCardPromoted resData={restaurant?.info} />
                    ) : (
                        <RestaurantCard resData={restaurant?.info} />
                    )
                }</Link>))}
            </div>
        </div >
    )
}

export default Body;