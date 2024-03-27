import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus(); 

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
                    <li><Link to="/">Cart</Link></li>
                    <button 
                    className="log-btn text-white bg-[#24292F]  rounded-lg px-3 py-1.5 text-center inline-flex items-center v me-2 mb-2" 
                    onClick={
                        () => {
                            btnNameReact==="Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }
                    }>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;