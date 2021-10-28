import React from "react";
import Css3 from "../imgs/Icons/Css3.png";
import Git from "../imgs/Icons/Git.png";
import HTMLimg from "../imgs/Icons/HTML5.png";
import Java from "../imgs/Icons/Java.png";
import Javascript from "../imgs/Icons/Javascript.png";
import PostgreSQL from "../imgs/Icons/Postgresql.png";
import Python from "../imgs/Icons/Python.png";
import Reactimg from "../imgs/Icons/react.png";
import Redux from "../imgs/Icons/redux.png";
import Spring from "../imgs/Icons/Spring Framework.png";
import { motion } from "framer-motion";

function Skills() {
  const skills1 = [
    { name: "CSS", img: Css3 },
    { name: "Git", img: Git },
    { name: "HTML", img: HTMLimg },
    { name: "Java", img: Java },
    { name: "Javascript", img: Javascript },
  ];

  const skills2 = [
    { name: "PostgreSQL", img: PostgreSQL },
    { name: "Python", img: Python },
    { name: "React", img: Reactimg },
    { name: "Redux", img: Redux },
    { name: "Spring Framework", img: Spring },
  ];

  return (
    <motion.div
      className="Skills"
      initial={{ opacity: 0, scale: 1, x: 200 }}
      animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, scale: 1, x: 200, transition: { duration: 1 } }}
    >
      <div className="Row1">
        {skills1.map((skill) => (
          <div>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="Row2">
        {skills2.map((skill) => (
          <div>
            <p>{skill.name}</p>
            <img src={skill.img} alt={skill.name} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
