import { motion } from "framer-motion";

export default function chip({ title }) {
  return (
    <div className="bg-grey flex items-center justify-center rounded-3xl mr-5 px-3 py-1 my-2 ">
      <p>{title}</p>
    </div>
  );
}
