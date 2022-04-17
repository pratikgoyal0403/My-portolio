import { motion } from "framer-motion";

const containerVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const alternateContainerVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};
// const containerMoveOut = {
//   start: { x: 0 },
//   end: { x: "-100%" },
// };
// const alternateMoveOut = {
//   start: { x: 0 },
//   end: { x: "100%" },
// };

export default function Hero() {
  return (
    <div className="grid  grid-cols-1 h-hero sm:grid-cols-2   ">
      <motion.div
        className="flex items-center justify-center flex-col order-2 sm:order-1 sm:items-end "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ default: { duration: 1 } }}
      >
        {/* <motion.div
          className="absolute bg-white w-full h-1/2"
          // animate={{ x: [0, 100] }}
          variants={containerMoveOut}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 1.5 },
          }}
        ></motion.div> */}
        <div className="w-3/4">
          <p className="text-2xl sm:text-4xl text-slate-600 mb-2">
            Welcome I{"'"}m
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold text-accent">
            {/* text-slate-800 */}
            PRATEEK GOYAL
          </h1>
          <p className="text-xl text-slate-500 mt-2">Web Developer</p>
          <p className="mt-2 text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sint
            maxime amet cupiditate omnis quasi praesentium iusto rem,
            perspiciatis incidunt.amet cupiditate omnis quasi praesentium.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center order-1 sm:order-2 sm:justify-end "
        variants={alternateContainerVariants}
        initial="hidden"
        animate="visible"
        transition={{ default: { duration: 1 } }}
      >
        {/* <motion.div
          className="absolute bg-white w-full h-full"
          // animate={{ x: [0, 100] }}
          variants={alternateMoveOut}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 1.5 },
          }}
        ></motion.div> */}
        <img src="/images/hero.png" alt="hero image" className="w-10/12" />
      </motion.div>
    </div>
  );
}
