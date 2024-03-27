import RestaurantCard from "./index"
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.585089340468148&lng=77.21407055854797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data);
        
        // Optional Chaining
        setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like you are offline, check your internet connection</h1>
    }

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (

        <div className="body">
            <div>
                <input
                className="search-input"
                type="text"
                placeholder="Search Restaurants"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => {
                const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                }}>
                    Search
                </button>

            </div>
            <div className="filter">
                <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4.3
                    );
                    setFilteredRestaurant(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-container-parent mx-auto w-10/12 mt-10">
                <div className="res-container flex flex-wrap gap-40 ">
                {filteredRestaurant.map((restaurant) => (
                    <Link to={"/restaurant/"+ restaurant.info.id}
                        key={restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
                </div>
            </div>

        </div >
        );
    };


export default Body;