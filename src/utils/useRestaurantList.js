import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";
import axios from "axios";

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const data = await fetch(SWIGGY_API);
        const data = await axios.get(SWIGGY_API);

        // const json = await data.json();
        const json = data.data;
        console.log(json);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
}

export default useRestaurantList;