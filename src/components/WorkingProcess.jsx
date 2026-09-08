import { Search, Target, Lightbulb, TrendingUp, BadgeCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Analyze",
    text: "Research business goals and audience insights",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy & Plan",
    text: "Build customized digital marketing strategies",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Implement & Execute",
    text: "Launch campaigns across multiple channels",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Monitor & Optimize",
    text: "Track analytics and improve performance",
  },
  {
    number: "05",
    icon: BadgeCheck,
    title: "Deliver Results",
    text: "Drive measurable growth and business success",
  },
];

function Step({ step, isLast }) {
  const Icon = step.icon;
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Numbered green circle */}
      <span className="absolute -top-10 left-1/2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
        {step.number}
      </span>

      {/* Icon circle */}
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-lime-400 shadow-sm transition-all duration-300 hover:-translate-y-1">
        <Icon size={26} strokeWidth={1.6} />
      </div>

      <h3 className="mt-5 text-base font-bold tracking-tight text-black">
        {step.title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-zinc-500">{step.text}</p>

      {/* Dotted arrow connector */}
      {!isLast && (
        <ArrowRight
          size={22}
          className="hidden md:block absolute -right-5 top-8 text-lime-400"
          strokeDasharray="1 4"
        />
      )}
    </div>
  );
}

export default function WorkingProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="text-center">
          <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-500">
            OUR PROCESS
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-black">
            Our Working Process
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500">
            We follow a proven process to deliver effective digital marketing
            solutions that drive real results for your business.
          </p>
        </div>

        {/* 5-step process */}
        <div className="relative mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
