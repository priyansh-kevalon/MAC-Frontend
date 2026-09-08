import img5 from "../assets/05.jpg";

const missionItems = [
  "Deliver measurable marketing results",
  "Build strong and lasting client relationships",
  "Create engaging digital experiences",
  "Help businesses scale with modern technology and marketing strategies",
  "Stay ahead with innovation and industry trends",
];

export default function Mission() {
  return (
    <section className="py-10 pb-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: image with green decoration (alternating layout) */}
          <div className="relative order-2 mx-auto w-full max-w-sm lg:order-1">
            <div className="absolute -bottom-5 -right-4 h-[92%] w-[92%] rotate-5 bg-lime-400" />

            <img
              src={img5}
              alt="Team member"
              className="relative h-[360px] w-full object-cover shadow-sm transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Right: bullet list */}
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-semibold tracking-tight text-black">
              Our Mission
            </h2>

            <ul className="mt-8 space-y-3.5 text-sm leading-6 text-zinc-500">
              {missionItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
