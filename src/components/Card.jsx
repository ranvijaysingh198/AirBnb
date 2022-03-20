import React from "react";
// import katie from "../Images/image12.png"

function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt = {props.alt} className="card-image"/>
            <div className="card-stats">
                <span>⭐</span>
                <span>{props.rating}</span>
                <span className="gray">({props.reziewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person </p>

        </div>
    )}
export default Card