const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { name, cuisines, avgRating, costForTwo } = resData.info;

    const deliveryTime = resData.info.sla.deliveryTime;

    return (
        <div className="restaurant-card pb-4 w-[300px] mx-auto rounded-xl bg-gray-200 hover:bg-slate-300 hover:scale-110 duration-200">
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    resData.info.cloudinaryImageId
                }
                className="card-food-img rounded-lg"
            ></img>
            <div>
                <p className="text-center font-bold text-lg">{name}</p>
                <p className="text-center">Cuisine: {cuisines.join(", ")}</p>
                <p className="text-center">Rating: {avgRating}</p> 
                <p className="text-center">{costForTwo}</p>
                <p className="text-center">Delivery Time: {deliveryTime} mins</p>
            </div>

            
            {/* Categories Accordions */}


        </div>
    );
};






export default RestaurantCard