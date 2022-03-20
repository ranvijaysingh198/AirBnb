import React from "react";

function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card">
            {badgeText && <div className="card-badge" >{badgeText}</div>}
            <img src={props.coverImg} alt = {props.alt} className="card-image"/>
            <div className="card-stats">
                <span>⭐</span>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span>/person </p>

        </div>
    )}
export default Card