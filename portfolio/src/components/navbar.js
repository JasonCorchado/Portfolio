import React from "react";
import { Link } from "react-router-dom";
import Jc from "../imgs/JC.png";
import github from "../imgs/Icons/Github.png";
import linkedin from "../imgs/Icons/icons8-linkedin-480.png";
import gmail from "../imgs/Icons/icons8-gmail-480.png";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={Jc} alt="gif logo" />
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <div className="Contact">
        <div className="wrapperC">
          <a
            href="https://github.com/JasonCorchado"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>

          <a
            href="https://www.linkedin.com/in/jason-corchado/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>

          <a
            href="mailto:corchadojason@gmail.com?subject=Message%20from%20portfolio%20site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
