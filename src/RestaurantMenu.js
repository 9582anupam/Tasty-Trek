import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const resInfo = useRestaurantMenu();
    if (resInfo === null) return <Shimmer />;
    // console.log(resInfo);
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // const itemCards = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    // console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( item => {
        return item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    // console.log(categories);

    return (
        <div className="menu px-5 flex flex-col gap-6">
            <h1 className="text-center font-bold text-5xl pt-5">{name}</h1>
            <h3 className="text-center font-black text-xl">Cuisines: {cuisines.join(", ")}</h3>
            <h3 className="text-center text-xl">{costForTwoMessage}</h3>

            <div className="w-6/12 flex flex-col items-center gap-10  mx-auto">
                {categories.map( (category, index) => {
                    // console.log(category);
                    return <RestaurantCategory key={index} data={category?.card?.card} />
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;