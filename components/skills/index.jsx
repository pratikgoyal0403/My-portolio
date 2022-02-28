import CircularProgress from "../commons/CircularProgress";
import Experience from "../commons/Experience";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-0">
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
    </div>
  );
}
