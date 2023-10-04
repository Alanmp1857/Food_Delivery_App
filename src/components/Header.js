import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // console.log("Header Render")

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser)

    // Subscribing to store using Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-orange-300 shadow-lg">
            <div className="logo-container">
                <img className="w-20 rounded-full m-4" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-semibold">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4 cursor-pointer font-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 cursor-pointer font-semibold">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 cursor-pointer font-semibold">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 cursor-pointer font-semibold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-semibold">Cart - ({cartItems.length} items)</li>
                    <li className="px-4 cursor-pointer font-semibold">
                        {loggedInUser}
                    </li>
                    <button className="font-semibold px-3 pb-1 bg-green-200 rounded-lg drop-shadow-lg hover:bg-green-300" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;