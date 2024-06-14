import RestaurantCard from "./index";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { API_URl } from "../utils/constant";

// restaurants,infoWithStyle,gridElements,card,card,cards[1]
const Body = () => {
    const [listOfRestaurant, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // console.log(listOfRestaurant);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URl);

        const json = await data.json();
        // console.log(json?.data);

        // Optional Chaining
        setListOfRestraunt(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline, check your internet connection</h1>
        );
    }

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body pb-16">
            <div className="text-center my-4">
                <div className="flex justify-center items-center">
                    <input
                        className="search-input transition-shadow duration-300 ease-in-out w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurant.filter(
                                (res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}>
                        Search
                    </button>
                </div>
            </div>

            <div className="filter my-4 text-center">
                <button
                    className="filter-btn bg-green-500 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants({">"}4.3{"⭐"})
                </button>
            </div>

            <div className="res-container-parent mx-auto mt-10 max-w-screen-xl">
                <div className="res-container flex flex-wrap gap-10 justify-center">
                    {filteredRestaurant.map((restaurant) => (
                        <Link
                            to={"/restaurant/" + restaurant.info.id}
                            key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
