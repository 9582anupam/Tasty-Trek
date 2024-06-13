import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => {
        return store.cart.items;
    });
    // console.log(cartItems);

    return (
        <div className="header flex justify-between items-center bg-pink-100 p-4 shadow-md">
            <div className="logo-container">
                <Link to="/">
                    <img
                        className="logo h-20 rounded-full"
                        src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148983042.jpg?size=626&ext=jpg&ga=GA1.1.453055445.1705870325&semt=ais"
                        alt="Logo"
                    />
                </Link>
            </div>

            <div className="nav-items flex items-center space-x-8">
                <ul className="flex gap-6 text-lg items-center">
                    <li className="text-green-600">
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li>
                        <Link
                            className="hover:text-pink-500 transition-colors"
                            to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-pink-500 transition-colors"
                            to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-pink-500 transition-colors"
                            to="/cart">
                                <div className="flex items-baseline gap-2">
                                    <FaShoppingCart />
                                    Cart({cartItems.length})
                                </div>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    <button
                        className="log-btn text-white bg-gray-800 rounded-lg px-3 py-1.5 transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}>
                        {btnNameReact}
                    </button>
                    <li className="text-sm text-gray-700">{loggedInUser}</li>
                </div>
            </div>
        </div>
    );
};

export default Header;
