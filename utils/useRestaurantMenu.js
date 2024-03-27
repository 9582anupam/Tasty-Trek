import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.585089340468148&lng=77.21407055854797&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };
    return resInfo;
}


export default useRestaurantMenu;
