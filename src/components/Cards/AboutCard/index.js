import React from "react";
import "./styles.css";

function AboutCard({id,img,degree,time,college,location}) {
  return (
    <div className="card" key={id}>
      <img src={img} alt="img" />
      <div className="data">
        <h3>{degree}</h3>
        <p>{time}</p>
        <p>{college}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default AboutCard;
