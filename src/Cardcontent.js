import React from "react";

export default function Cardcontent(props)
{
    let badge;
    if(props.obj.openSpots ===0)
        badge="Sold";
    else if(props.obj.location==="Online")
        badge="Online"
    console.log(badge); 
    return(
        <div className="card">
        {badge && <div className="cardbadge">{badge}</div>}
        <img src={`Images/${props.obj.coverImg}`} className="card--image" />
        <div className="card--stats">
            <img src="Images/Star 1.png" className="card--star" />
            <span>{props.obj.stats.rating}</span>
            <span className="gray">({props.obj.stats.reviewCount}) • </span>
            <span className="gray">{props.obj.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.obj.price}</span> / person</p>
    </div>
    )
}