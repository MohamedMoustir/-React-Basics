
import React from "react";
import '../assets/style/style.css';

export default function Card({title ,description ,image}){

    return (
   <div className="card">
    <img src={image} alt={title}  className="card-image"/>
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
   </div>
    );
}