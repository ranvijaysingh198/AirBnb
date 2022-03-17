import React from "react";
import image12 from "../images/image12.png";
import weddingImg from "../images/wedding-photography.png";
import mountainBbike from "../images/mountain-bike.png";
import Rating from "./Rating";

function Card(){
    return (
        <div className = "middleComponent">
            
           <Rating img = {image12} alt = "zeferPicture" review = "Life Lessions with katie zaferes" money = "136"/>
           <Rating img = {weddingImg} alt = "weddingPicture" review = "Learn wedding photography" money = "125"/>

          

            <div>
                <img src={weddingImg} alt = "weddingPicture " />
                <p>⭐5.0</p>
                <p>Learn wedding photography</p>
                <p><strong>From $125</strong>/person</p>
            </div>

            <div>
                <img src={mountainBbike} alt="mountain bike" />
                <p>⭐5.0</p>
                <p>Group Mountain Biking</p>
                <p><strong>From $50</strong>/person</p>
            </div>
        </div>
    )
}

export default Card