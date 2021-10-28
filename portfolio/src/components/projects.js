import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 200 }}
      animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, scale: 1, x: 200, transition: { duration: 1 } }}
    >
      <h2>Project 1</h2>
      <h2>Project 2</h2>
      <h2>Project 3</h2>
      <h2>Project 4</h2>
    </motion.div>
  );
}

export default Projects;
