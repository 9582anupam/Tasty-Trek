const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData.info;
    const deliveryTime = resData.info.sla.deliveryTime;
  
    return (
      <div className="restaurant-card pb-4 w-[300px] h-[400px] mx-auto rounded-xl bg-gray-200 hover:bg-slate-300 hover:scale-105 transform duration-200 shadow-md flex flex-col justify-between">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          className="card-food-img rounded-t-lg w-full h-40 object-cover"
          alt={name}
        />
        <div className="p-4 flex-grow">
          <p className="text-center font-bold text-lg mb-2">{name}</p>
          <p className="text-center text-gray-700 mb-1">Cuisine: {cuisines.join(", ")}</p>
          <p className="text-center text-yellow-500 font-semibold mb-1">Rating: {avgRating}</p>
          <p className="text-center text-gray-700 mb-1">{costForTwo}</p>
          <p className="text-center text-gray-700">Delivery Time: {deliveryTime} mins</p>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;
  