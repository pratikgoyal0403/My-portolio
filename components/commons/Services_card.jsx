import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";

export default function Services_Card() {
  return (
    <div className="bg-white hover:shadow-2xl p-4 hover:text-orange-500 cursor-pointer rounded smooth">
      <div className="flex items-center justify-center flex-col">
        <MdOutlineMobileFriendly style={{ fontSize: "48px" }} />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="my-2 font-semibold text-xl">WEB DEVELOPMENT</h1>
        <p className="text-slate-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
          architecto.
        </p>
      </div>
    </div>
  );
}
