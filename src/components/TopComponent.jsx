import React from "react";
import groupImage from "../Images/Group-77.png";
function TopComponent(){
    return (
        <div>
            <img className="center" src = {groupImage} alt = "Group Logo"/>
            <div className="firstText">
                <h1 >Online Experience</h1>
                <p style={{fontSize:'20px'}} > Join unique interactive activities led by one-of-a-kind hosts-all without leaving home </p>
            </div>
        </div>
    )
}

export default TopComponent;