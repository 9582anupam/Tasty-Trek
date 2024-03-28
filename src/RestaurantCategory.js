import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log(data);
    return (
        <div className="w-full">
            <div className="h-4  bg-[#F2F2F3] mx-auto "></div>

            <div className="w-full p-4 cursor-pointer">
                {/* Header */}
                <div className="w-full font-bold flex justify-between items-center">
                    <span className="text-lg pb-4">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <div className="flex items-center">
                        <span>{"⏬"}</span>
                    </div>
                </div>
                {/* Accordion Body */}
                <div className="flex justify-center w-full">
                    <ItemList items={data.itemCards} />
                </div>
            </div>
        </div>
    );
};

export default RestaurantCategory;
