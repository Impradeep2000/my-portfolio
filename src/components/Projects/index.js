import React from "react";
import "./styles.css";
import Crypto from "../../assets/crypto.png";
import Podcast from "../../assets/podcast.png";
import Google from "../../assets/GoogleSheet.png";
import ProjectCard from "../Cards/ProjectCard";

function Projects() {
  const projects = [
    {
      image: Crypto,
      name: "Crypto Tracker",
      description:
        "A comprehensive crypto tracker developed with React, Axios, Framer Motion, and Chart JS, supporting customizable watchlists.",
      link1:"https://podcast-app-react.netlify.app/",
      link2:"https://github.com/Impradeep2000/crypto-tracker"
    },
    {
      image: Podcast,
      name: "Podcast Application",
      description:
        "An online podcast platform, featuring podcast CRUD operations, a custom music player, built with React, Firebase, Redux-toolkit, and React Router Dom.",
      link1:"https://podcast-app-react.netlify.app/",
      link2:"https://github.com/Impradeep2000/podcast-app-react"
    },
    {
      image: Google,
      name: "Google Sheet Clone",
      description:
        "A feature-rich Excel clone using HTML, CSS, and JavaScript, mirroring Microsoft Excel’s functionality.",
      link1:"https://impradeep2000.github.io/Google-sheet/",
      link2:"https://github.com/Impradeep2000/Google-sheet"
    }
  ];

  return (
    <section className="project">
      <h1>My Creative Portfolio Section</h1>
      <div className="cards">
        {
          projects.map((project)=>(
            <ProjectCard img={project.image} title={project.name} description={project.description} link1={project.link1} link2={project.link2} />
          ))
        }
      </div>
    </section>
  );
}

export default Projects;
