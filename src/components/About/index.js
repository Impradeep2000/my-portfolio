import React from "react";
import "./styles.css";
import AboutCard from "../Cards/AboutCard";
import ITM from "../../assets/itm.png";
import Octanet from "../../assets/octaner.jpeg";
import Acciojob from "../../assets/acciojob.jpeg";

function About() {
  const data = [
    {
      id: 1,
      time: "(2018-2022)",
      degree: "Bachelors of technology",
      college: "Institute of Technology & Management",
      location: "Gwalior, Madhya Pradesh",
      image:ITM
    },
    {
      id: 2,
      time: "(Feb 2024 -March-2024)",
      degree: "Web Dev Internship",
      college: "Tech Octanet Services Pvt .Ltd.",
      location: "Remote",
      image:Octanet
    },
    {
      id: 3,
      time: "(2023-Present)",
      degree: "MERN Stack Course",
      college: "Acciojob",
      location: "Remote",
      image:Acciojob
    }
  ];
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="cards">
       { data.map((item)=>(
        <AboutCard
          key={item.id}
          img={item.image}
          id={item.id}
          time={item.time}
          degree={item.degree}
          college={item.college}
          location={item.location}
        />
        ))
       }
      </div>
    </section>
  );
}

export default About;
