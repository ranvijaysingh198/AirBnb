import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";

function Navbar(){
    return (
        <nav>
            <img src={airbnbLogo} alt="AirBnb Logo"></img>
        </nav>
    )
}

export default Navbar;