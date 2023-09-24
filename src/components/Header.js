import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="about">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="contact">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="cart">Cart</li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;