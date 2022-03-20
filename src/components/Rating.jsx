import React from "react";

function Rating(props){
    return (
        <div>
        <img src={props.img} alt = {props.alt} />
        <p>⭐{props.rating} USA</p>
        <p>{props.review}</p>
        <p><strong>From ${props.price}</strong>/person</p>
    </div>
    )
}
export default Rating;