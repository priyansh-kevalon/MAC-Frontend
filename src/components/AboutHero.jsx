import img1 from "../assets/01.jpg";
import img2 from "../assets/02.jpg";
import img3 from "../assets/03.jpg";
import img4 from "../assets/04.jpg";

const photos = {
  team: img1,
  woman: img2,
  team2: img3,
  team3: img4,
};

export default function AboutHero() {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Column: Our Story text */}
          <div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl text-black">
              Our Story
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-7 text-zinc-500">
              Founded with a passion for creativity and digital innovation, our
              agency started as a small team of marketing enthusiasts dedicated
              to helping brands grow online. Over the years, we have transformed
              into a full-service digital marketing agency delivering powerful
              strategies, creative campaigns, and measurable results for
              businesses across multiple industries.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-7 text-zinc-500">
              From startups to established enterprises, we believe every brand
              deserves a strong digital presence that connects with people and
              drives real business growth.
            </p>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative mx-auto w-full max-w-[560px] h-[440px] sm:h-[500px]">
            {/* Decorative green shape behind top-left image */}
            <div className="absolute -left-4 -top-4 h-[46%] w-[38%] -rotate-3 rounded-2xl bg-lime-400" />

            {/* Image 1: small landscape - top left */}
            <img
              src={photos.team}
              alt="Our team"
              className="absolute left-0 top-0 h-[46%] w-[38%] rounded-br-3xl object-cover shadow-sm"
            />

            {/* Image 2: large landscape - top right with lime border */}
            <div className="absolute right-0 top-0 h-[54%] w-[58%] overflow-hidden rounded-tl-[4.5rem] border-l-[10px] border-t-[10px] border-lime-400">
              <img
                src={photos.woman}
                alt="Client consultation"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Image 3: large landscape - bottom left with lime border */}
            <div className="absolute bottom-0 left-0 h-[46%] w-[58%] overflow-hidden rounded-br-[4.5rem] border-b-[10px] border-r-[10px] border-lime-400">
              <img
                src={photos.team2}
                alt="Team workshop"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Image 4: square - bottom right */}
            <img
              src={photos.team3}
              alt="Digital creator"
              className="absolute bottom-0 right-0 h-[40%] w-[38%] rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
