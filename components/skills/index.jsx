import Heading from "../commons/Heading";
import { FiMonitor, FiServer, FiTool } from "react-icons/fi";
import Chip from "../commons/chip";
import { motion } from "framer-motion";

const skillVariant = {
  start: { x: "-25%", opacity: 0 },
  end: { x: 0, opacity: 1 },
};
const skillVariant2 = {
  start: { x: "-100%", opacity: 0 },
  end: { x: 0, opacity: 1 },
};
const skillVariant3 = {
  start: { x: "-200%", opacity: 0 },
  end: { x: 0, opacity: 1 },
};
const chipVariant = {
  start: { opacity: 0, x: -50 },
  end: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.4 + 1 } }),
  // end: { opacity: 0, x: 100 },
};

const frontEndSkills = ["Javascript", "Sass", "React", "Redux", "Next.js"];
const backendSkills = ["Node.js", "MongoDB", "MySQL", "REST API", "Express"];
const tools = ["Git & Github", "Typescript", "Yarn", "Visual Studio Code"];

export default function Skills() {
  return (
    <div className="w-10/12 mx-auto">
      <Heading title="Skills" />
      <div>
        <div className="grid grid-cols-3 gap-10 my-20 ">
          <motion.div
            className="flex items-center justify-center "
            initial="start"
            animate="end"
            variants={skillVariant}
            transition={{ default: { duration: 1 } }}
          >
            <div>
              <FiMonitor
                style={{ fontSize: "3.8rem" }}
                className="text-accent"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-medium mb-2">Front End</h1>
              <div className="flex items-center justify-start flex-wrap">
                {frontEndSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="start"
                    animate="end"
                    variants={chipVariant}
                    // animate={{ x: [-50, 100] }}
                    // transition={{ delay: 3 }}
                  >
                    <Chip title={skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center "
            initial="start"
            animate="end"
            variants={skillVariant2}
            transition={{ default: { duration: 1 } }}
          >
            <div>
              <FiServer
                style={{ fontSize: "3.8rem" }}
                className="text-accent"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-medium mb-2">Back End</h1>
              <div className="flex items-center justify-start flex-wrap">
                {backendSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="start"
                    animate="end"
                    variants={chipVariant}
                    // animate={{ x: [-50, 100] }}
                  >
                    <Chip title={skill} key={i} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center "
            initial="start"
            animate="end"
            variants={skillVariant3}
            transition={{ default: { duration: 1 } }}
          >
            <div>
              <FiTool style={{ fontSize: "3.8rem" }} className="text-accent" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-medium mb-2">Tools</h1>
              <div className="flex items-center justify-start flex-wrap">
                {tools.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="start"
                    animate="end"
                    variants={chipVariant}
                  >
                    <Chip title={skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// LEGECY CODE
{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-0">
      <div className="flex items-center justify-start flex-col">
        <h1 className="text-3xl text-slate-900 font-semibold mb-5">
          Professional Skill Works
        </h1>
        <div>
          <p className="text-slate-500 text-center px-5 sm:px-0 sm:text-right ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            expedita.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 sm:gap-20 py-10 align-center justify-items-center">
            <CircularProgress
              text="Css"
              percentage={85}
              strokeColor="#3e98c7"
            />
            <CircularProgress
              text="Javascript"
              percentage={84}
              strokeColor="green"
            />
            <CircularProgress
              text="React JS"
              percentage={80}
              strokeColor="purple"
            />
            <CircularProgress
              text="Node JS"
              percentage={70}
              strokeColor="orange"
            />
            <CircularProgress
              text="Mongo Db"
              percentage={70}
              strokeColor="crimson"
              className="col-span-2"
            />
          </div>
          <p className="my-10 text-slate-600 text-xl text-center px-5 sm:px-0">
            some extra skills like Express Js, React Native, Flutter etc
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col h-full">
        <h1 className="text-3xl text-slate-900 font-semibold mb-5">
          My Experience
        </h1>
        <Experience />
      </div>
    </div> */
}
