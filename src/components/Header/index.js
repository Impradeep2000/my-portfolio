import React from "react";
import "./styles.css";

function Header() {
  const links = ["home", "about", "skills", "Projects", "contact"];

  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
