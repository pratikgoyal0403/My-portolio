import { AiFillCheckCircle } from "react-icons/ai";

export default function ProjectCard({ className }) {
  return (
    <div
      className={
        "w-full px-1 md:px-3 py-6 bg-light-grey my-10 grid grid-cols-1 md:grid-cols-5  rounded-md shadow-lg " +
        className
      }
    >
      <div className="px-5 md:col-span-3 order-2 md:order-1">
        <h1 className="font-medium text-lg mt-2 mb-1">Financial Portal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa,
          illum asperiores rerum voluptates, sed cum aliquam perspiciatis sequi
          amet sit. Soluta amet tempore consequatur doloribus facilis magnam
          doloremque natus reiciendis, impedit tenetur quos distinctio quo esse
          aut tempora ea.
        </p>
        <h1 className="font-medium text-lg mt-2 mb-1">Skills</h1>
        <div className="flex flex-wrap">
          <ProjectSkills />
          <ProjectSkills />
          <ProjectSkills />
          <ProjectSkills />
        </div>
      </div>
      {/* <div></div> */}
      <div className=" flex justify-center md:col-span-2 order-1 md:order-2">
        <img src="/images/hero.png" alt="hero image" className="w-1/3" />
      </div>
    </div>
  );
}

function ProjectSkills() {
  return (
    <div className="flex items-center justify-center mr-4">
      <AiFillCheckCircle className="text-accent text-xl" />
      <p className="ml-1">MongoDB</p>
    </div>
  );
}
