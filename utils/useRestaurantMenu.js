import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "./constant";

const useRestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(FETCH_MENU_URL+resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };
    return resInfo;
}


export default useRestaurantMenu;
