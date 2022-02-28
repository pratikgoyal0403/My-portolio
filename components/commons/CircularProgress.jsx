import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress({
  text,
  percentage,
  strokeColor,
  className,
}) {
  return (
    <div className={"my-6 " + className} style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",
          // Text size
          textSize: "24px",
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',
          // Colors
          pathColor: strokeColor,
          textColor: strokeColor,
          // trailColor: "#d6d6d6",
          trailColor: "white",
          backgroundColor: strokeColor,
          // backgroundColor: "#3e98c7",
        })}
      />
      <p className="my-5 text-center text-xl text-slate-500">{text}</p>
    </div>
  );
}
