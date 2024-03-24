import React from "react";
import "./styles.css";
import { FaEye } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";



function ProjectCard({img,title,description,link1,link2}) {
  return (
    <div className="card-project">
      <img src={img} alt="img"  />
      <div className="eye">
        <div><a href={link1}><FaEye className="eyee"/></a></div>
        <div><a href={link2}><VscGithubInverted className="eyee" /></a></div>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
