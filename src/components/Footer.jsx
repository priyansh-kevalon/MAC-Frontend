import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navigation = [
  { label: "Service", to: "/services" },
  { label: "Agency", to: "/about" },
  { label: "Case Study", to: "/#work" },
  { label: "Resource", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const licence = ["Privacy Policy", "Copyright", "Email Address"];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    path: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: (
      <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F3] pt-16 pb-14 text-zinc-500">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Column 1: Brand + Description + Social */}
          <div className="flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-2 group shrink-0">
                <img
                  src={logo}
                  alt="MAC Logo"
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>

              <p className="mt-6 max-w-sm text-xs sm:text-[13px] leading-relaxed text-zinc-500">
                We offers a comprehensive suite of digital marketing services that
                cover all aspects of our online presence. From SEO and social media
                marketing to content creation and PPC advertising, they have the
                expertise and resources to handle our diverse marketing needs.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-5 text-black">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-black hover:text-zinc-600 transition-colors"
                >
                  {s.path}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-bold tracking-tight text-black">Navigation</h3>
            <ul className="mt-5 space-y-3 text-xs sm:text-[13px]">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-zinc-500 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Licence */}
          <div>
            <h3 className="text-sm font-bold tracking-tight text-black">Licence</h3>
            <ul className="mt-5 space-y-3 text-xs sm:text-[13px]">
              {licence.map((item) => (
                <li key={item}>
                  <a href="#licence" className="text-zinc-500 hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-tight text-black">Contact</h3>
            <ul className="mt-5 space-y-4 text-xs sm:text-[13px]">
              <li>
                <a
                  href="tel:4065550120"
                  className="flex items-center gap-3 text-zinc-500 hover:text-black transition-colors"
                >
                  <Phone size={16} className="shrink-0 fill-black" strokeWidth={1.8} />
                  <span>(406) 555-0120</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Hey@boostim.com"
                  className="flex items-center gap-3 text-zinc-500 hover:text-black transition-colors"
                >
                  <Mail size={16} className="shrink-0 fill-black" strokeWidth={1.8} />
                  <span>Hey@boostim.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-500">
                <MapPin size={16} className="shrink-0 mt-0.5 fill-black" strokeWidth={1.8} />
                <span className="leading-snug">
                  2972 Westheimer Rd. Santa Ana,
                  <br />
                  Illinois 85486
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
