import React from "react";

function Rating(props){
    return (
        <div>
        <img src={props.img} alt = {props.alt} />
        <p>⭐5.0 USA</p>
        <p>{props.review}</p>
        <p><strong>From ${props.money}</strong>/person</p>
    </div>
    )
}
export default Rating;