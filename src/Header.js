import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus(); 
    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector( (store) => {
        return store.cart.items
    } )
    // console.log(cartItems);

    return (
        <div className="header flex justify-between bg-pink-100 ">
            <div className="logo-container">
                <Link to="/">
                        <img
                            className="logo h-20"
                            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148983042.jpg?size=626&ext=jpg&ga=GA1.1.453055445.1705870325&semt=ais"
                        /> 
                </Link>
            </div>

            <div className="nav-items my-auto mx-4">
                <ul className="flex gap-6 text-2xl items-center">
                    <li>Online Status: {onlineStatus?"✅":"❌"}</li>
                    <li><Link to="/about">about us</Link></li>
                    <li><Link to="/contact">contact us</Link></li>
                    <li><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <div>
                        <button 
                        className="log-btn text-white bg-[#24292F]  rounded-lg px-3 py-1.5 text-center inline-flex items-center v me-2 mb-2" 
                        onClick={
                            () => {
                                btnNameReact==="Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            }
                        }>
                            {btnNameReact}
                        </button>
                        <li className="text-sm">{loggedInUser}</li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;