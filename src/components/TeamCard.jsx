export default function TeamCard({ name, role, photo }) {
  return (
    <div className="group rounded-2xl bg-white p-4 shadow-sm border border-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={photo}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-2 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {[
            {
              label: "LinkedIn",
              d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z",
            },
            {
              label: "Twitter / X",
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={`${name} on ${s.label}`}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-lime-400 hover:text-black"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="px-2 pb-2 pt-4 text-center">
        <h3 className="text-base font-bold tracking-tight text-[#0D0F11]">{name}</h3>
        <p className="mt-1 text-xs font-medium text-zinc-500">{role}</p>
      </div>
    </div>
  );
}