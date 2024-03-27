const ItemList = ({items}) => {
    console.log(items);
    return (
        <div className="w-full"> 
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 py-2 flex justify-between items-end">
                    <div className="w-8/12 ">
                        <p className="py-4 font-bold text-xl ">{item.card.info.name}</p>
                        <p className="pb-2">₹{(item.card.info.defaultPrice/100) || (item.card.info.price/100)}</p>
                        <p className="pb-6">{item.card.info.description}</p>
                    </div>
                    <div>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} className="h-[144px] w-[156px] max-w-full rounded-lg mb-4" alt="Item Image" />

                    </div>

                </div>
            ))}
        </div>
    );
};

export default ItemList;
