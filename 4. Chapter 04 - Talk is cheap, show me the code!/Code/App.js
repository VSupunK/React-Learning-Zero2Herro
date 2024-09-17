import React from "react";
import ReactDOM from "react-dom/client";

//header
const Header = () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn6.f-cdn.com/contestentries/138969/13901059/54b67fa240afc_thumb900.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const RestaurantCard = () => {
    return (
<div className="res-card">
        <h3>Pizza Hut</h3>
    </div>
    )
    
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search
            </div>
                <div className="restaurant-container"> 
                    {/* RestaurantCard */}
                    <RestaurantCard />
                </div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);