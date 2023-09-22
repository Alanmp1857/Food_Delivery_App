import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        // setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="search-btn" onClick={() => {
                    console.log(searchText);

                    const filteredRestaurant = listOfRestaurants.filter((res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />))}
            </div>
        </div>
    )
}

export default Body;