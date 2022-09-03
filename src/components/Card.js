import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


function Card(props){
    
    
return(
    <div className="card">

        <div className="class--img-box">     
            <img src={props.item.imageUrl} className="card--image" alt={props.item.location}/>
        </div>


        <div className="card--stats">
            <FontAwesomeIcon icon={faLocationDot} className="card--location-icon"/>
            <h2>
                {props.item.location}
            </h2>
            <a className="class--location-url" href={props.item.googleMapsUrl}>
                View on Google Maps
            </a>

            <h3 className="card--title">
                {props.item.title}
            </h3>
      
            <p className="card--date">
                {props.item.startDate} - {props.item.endDate}
            </p>

            <p className="card-description">
                {props.item.description}
            </p>
        </div>
    </div>
    );
}


export default Card;
