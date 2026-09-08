import { ArrowRight, CalendarDays, Clock } from "lucide-react";

export default function BlogCard({ title, excerpt, image, category, date, readTime }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-bold text-black">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-[11px] font-medium text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={12} /> {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} /> {readTime}
          </span>
        </div>

        <h3 className="mt-3 text-base font-bold leading-snug tracking-tight text-[#0D0F11]">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-xs leading-relaxed text-zinc-500">{excerpt}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-semibold text-black transition-colors group-hover:text-lime-600">
            Read More
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition-all group-hover:bg-lime-400 group-hover:text-black">
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}