import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description, slug }) {
  return (
    <div className="group flex flex-col rounded-2xl bg-white p-7 shadow-sm border border-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime-400/15 text-lime-600 transition-colors group-hover:bg-lime-400 group-hover:text-black">
          <Icon size={24} strokeWidth={1.7} />
        </div>
        <Link
          to={`/services/${slug}`}
          aria-label={`Learn more about ${title}`}
          className="grid h-8 w-8 place-items-center rounded-full border border-zinc-300 text-black transition-all group-hover:bg-black group-hover:text-white group-hover:border-black"
        >
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <h3 className="mt-6 text-lg font-bold tracking-tight text-[#0D0F11]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}