import React from "react";
import "./styles.css";

function Home() {
  return (
    <section className="home">
      <section className="name">
        <p>Hi,</p>
        <p className="gap">I'm Pradeep Kumar</p>
      </section>
      <section className="intro">
        <p>
          I am a passionate frontend developer with a knack for creating
          engaging and user-centric web experiences. I specialize in crafting intuitive user
          interfaces using modern web technologies.
        </p>
        <p>
          I am constantly exploring new tools and frameworks to stay updated
          with the latest trends in frontend development. My goal is to leverage
          my expertise to build visually stunning and highly functional web
          applications that leave a lasting impression.
        </p>
      </section>
    </section>
  );
}

export default Home;
