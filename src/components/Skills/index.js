import React from 'react'
import "./styles.css"
import HTML from "../../assets/html.webp";
import CSS from "../../assets/css.jpg";
import JS from "../../assets/javascript.png"
import Rea from "../../assets/react.png";
import Redux from "../../assets/redux.png";
import Bootstrap from "../../assets/bootstrap.png";
import MUI from "../../assets/mui.png";
import SkillsCard from '../Cards/SkillsCard';
import Git from "../../assets/git.png";



function Skills() {

  const images=[{image:HTML},{image:CSS},{image:JS},{image:Rea},{image:Redux},{image:Bootstrap},{image:MUI},{image:Git}]

  return (
    <section className='skills'>
      <h1>Skills</h1>
      <div>
        {images.map((img)=>(
          <SkillsCard img={img.image} />
        ))}
      </div>
    </section>
  )
}

export default Skills