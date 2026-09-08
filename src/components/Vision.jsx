import img5 from "../assets/05.jpg";

export default function Vision() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <h2 className="text-5xl font-semibold tracking-tight text-black">
              Our Vision
            </h2>

            <p className="mt-8 max-w-md text-sm leading-6 text-zinc-500">
              To become a globally trusted digital marketing partner known for
              innovation, creativity, and result-driven marketing solutions that
              empower brands in the digital era.
            </p>
          </div>

          {/* Right: image with green decoration */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -bottom-5 -left-4 h-[92%] w-[92%] -rotate-5 bg-lime-400" />

            <img
              src={img5}
              alt="Team collaborating"
              className="relative h-[360px] w-full object-cover shadow-sm transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
