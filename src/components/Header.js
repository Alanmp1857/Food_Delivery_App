import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render")

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="about">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="contact">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="grocery">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="cart">Cart</li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;