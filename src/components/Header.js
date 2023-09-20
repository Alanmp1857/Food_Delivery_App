import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
                    <li className="home">Home</li>
                    <li className="about">About Us</li>
                    <li className="contact">Contact Us</li>
                    <li className="cart">Cart</li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;