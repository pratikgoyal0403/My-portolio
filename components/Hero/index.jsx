export default function Hero() {
  return (
    <div className="grid  grid-cols-1 h-hero sm:grid-cols-2 ">
      <div className="flex items-center justify-center flex-col order-2 sm:order-1 sm:items-end">
        <div className="w-3/4">
          <p className="text-2xl sm:text-4xl text-slate-600 mb-2">
            Welcome I{"'"}m
          </p>
          <h1 className="text-4xl sm:text-6xl text-slate-800 font-semibold">
            PRATEEK GOYAL
          </h1>
          <p className="text-xl text-slate-500 mt-2">Web Developer</p>
          <p className="mt-2 text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sint
            maxime amet cupiditate omnis quasi praesentium iusto rem,
            perspiciatis incidunt.amet cupiditate omnis quasi praesentium.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center order-1 sm:order-2 sm:justify-end">
        <img src="/images/hero.png" alt="hero image" className="w-10/12" />
      </div>
    </div>
  );
}
