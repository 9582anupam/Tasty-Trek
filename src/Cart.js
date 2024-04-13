import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector( (store) => store.cart.items );
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        console.log("clicked");
        dispatch(clearCart())
    }
    return (
        <div>
            <div className="flex justify-center gap-5">
                <h1 className="text-5xl font-bold text-center mt-5">Cart</h1>
                <div>
                    <button onClick={handleClearCart} className="bg-black text-white px-2 mt-8  rounded-lg text-lg">Clear Cart</button>
                </div>
            </div>
            <div className="w-6/12 flex flex-col items-center  mx-auto">
                <ItemList items={cartItems} />
            </div>
            {cartItems.length === 0 && <p className="text-center text-lg pt-10">Cart empty</p>}
        </div>
    )
}




export default Cart;
