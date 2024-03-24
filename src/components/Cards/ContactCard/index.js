import React from "react";
import "./styles.css";

function ContactCard({ icon, name,link }) {
  return (
    <div className="contact-card">
      <div className="icn">{icon}</div>
      <div className="nam">
        <a href={link}>{name}</a>
      </div>
    </div>
  );
}

export default ContactCard;
