import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//Design for our food delivery app
// Header
//     -Logo
//     -Nav-items
// Body
//     -Search
//     -RestaurantContainer
//         -RestaurantCard
//              - RestaurantImage, RestaurantName, Cuisine, Rating, etc
// Footer
//     -Copyright
//     -Links
//     -Address
//     -Contact

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);