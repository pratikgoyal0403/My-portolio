import Heading from "../commons/Heading";
import ProjectCard from "../commons/Project_card";
import { motion } from "framer-motion";

const fromLeft = {
  start: { opacity: 0, x: -250 },
  end: { opacity: 1, x: 0 },
};

const fromRight = {
  start: { opacity: 0, x: 250 },
  end: { opacity: 1, x: 0 },
};
export default function Projects() {
  return (
    <div className=" mx-auto">
      <Heading title="PROJECTS" />
      <div className="">
        <motion.div
          variants={fromLeft}
          initial="start"
          animate="end"
          transition={{ default: { duration: 1 } }}
        >
          <ProjectCard className="border-l-8 border-accent" />
        </motion.div>
        <motion.div
          variants={fromRight}
          initial="start"
          animate="end"
          transition={{ default: { duration: 1 } }}
        >
          <ProjectCard className="border-r-8 border-accent flex-row-reverse justify-end" />
        </motion.div>
        <motion.div
          variants={fromLeft}
          initial="start"
          animate="end"
          transition={{ default: { duration: 1 } }}
        >
          <ProjectCard className="border-l-8 border-accent" />
        </motion.div>
      </div>
    </div>
  );
}
