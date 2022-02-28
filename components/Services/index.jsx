import Portfolio_card from "../commons/Portfolio_card";
import Services_Card from "../commons/Services_card";

export default function Services() {
  return (
    <div className="grid grid-cols-1 py-10 sm:grid-cols-2">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl text-slate-900 font-semibold mb-5">
          Services Section
        </h1>
        <p className="text-slate-500 text-center sm:text-right px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          expedita.
        </p>
        <div className="grid grid-cols-1 py-10 sm:py-0 sm:grid-cols-2 sm:w-4/5 my-4">
          <Services_Card />
          <Services_Card />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col ">
        <h1 className="text-3xl text-slate-900 font-semibold mb-5">
          Portfolio Section
        </h1>
        <p className="text-slate-500 text-center sm:text-right px-2">
          Some of the projects i have worked on
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-4/5 my-4">
          <Portfolio_card />
          <Portfolio_card />
        </div>
      </div>
    </div>
  );
}
