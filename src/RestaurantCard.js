import StarSvg from "../utils/StarSvg";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, aggregatedDiscountInfo } =
        resData.info;
    const deliveryTime = resData.info.sla.deliveryTime;

    return (
        <div className="restaurant-card w-[250px] h-[260px] mx-auto rounded-lg bg-white hover:bg-gray-100 hover:scale-105 transform duration-200 shadow-md flex flex-col justify-between">
            <div className="relative">
                <img
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        resData.info.cloudinaryImageId
                    }
                    className="card-food-img rounded-t-lg w-full h-32 object-cover"
                    alt={name}
                />
                {aggregatedDiscountInfo && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {aggregatedDiscountInfo.header}{" "}
                        {aggregatedDiscountInfo.shortDescriptionList[0].meta}
                    </div>
                )}
            </div>
            <div className="px-4  flex flex-col flex-grow ">
                <p className="text-center font-bold text-md line-clamp-1">{name}</p>
                <p className=" text-gray-700 line-clamp-2">
                    Cuisine: {cuisines.join(", ")}
                </p>
                <span className="flex flex-row gap-1 items-center">
                    <StarSvg/>
                    <p className="text-yellow-500 font-semibold">
                    {avgRating} • {deliveryTime} mins
                    </p>
                </span>
                <p className="text-gray-700">{costForTwo}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
