import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        console.log("clicked");
        setShowItems(!showItems)
    }
    return (
        <div className="menu w-full">
            <div className="h-4  bg-[#F2F2F3] mx-auto "></div>

            <div className="w-full p-2 cursor-pointer " >
                {/* Header */}
                <div className="w-full font-bold flex justify-between items-start" onClick={handleClick}>
                    <span className="text-lg pb-4">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <div className="flex items-center">
                        <span>{"⏬"}</span>
                    </div>
                </div>
                {/* Accordion Body */}
                <div className="flex justify-center w-full">
                    {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCategory;
