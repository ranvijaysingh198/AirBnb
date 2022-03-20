import React from "react";
import airbnbLogo from "../Images/airbnb-logo.png";

function Navbar(){
    return (
        <nav>
            <img src={airbnbLogo} alt="AirBnb Logo"></img>
        </nav>
    )
}

export default Navbar;