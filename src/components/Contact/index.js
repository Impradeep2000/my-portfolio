import React from "react";
import "./styles.css";
import ContactCard from "../Cards/ContactCard";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Contact() {
  const contact = [
    { name: "pk695283@gmail.com",link:"#pk695283@gmail.com", icon: <MdAlternateEmail className="icon" /> },
    { name: "pradeepkumar2000",link:"https://www.linkedin.com/in/pradeepkumar2000/", icon: <FaLinkedin className="icon" /> },
    { name: "Impradeep2000",link:"https://github.com/Impradeep2000", icon: <FaSquareGithub className="icon" /> },
    { name: "im_pradeep_k",link:"https://www.instagram.com/im_pradeep_k/", icon: <FaSquareInstagram className="icon" /> }
  ];

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="card-contact">
        {contact.map((item) => (
          <ContactCard icon={item.icon} name={item.name} link={item.link} />
        ))}
      </div>
    </section>
  );
}

export default Contact;