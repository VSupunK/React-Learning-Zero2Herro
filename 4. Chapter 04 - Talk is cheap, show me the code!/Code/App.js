import React from "react";
import ReactDOM from "react-dom/client";

//If we need to add styles in here, we can do it as JS object
const styleCard = {
    padding: "5px",
    width: "200px",
    height: "300px",
    padding: "10px",
    border: "1px solid black",
    backgroundColor: "yellow"
}

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
<div className="res-card" style={styleCard}>
    <img className="res-logo" src="https://www.southernliving.com/thmb/j_6gABRIAMegN6RFHxOgbUqBxjA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="pizza-img"/>
    
        <h3>Pizza Hut</h3>
        <h4>Itali</h4>
        <h4>4.4 Stars</h4>
        <h4>26 minutes</h4>
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