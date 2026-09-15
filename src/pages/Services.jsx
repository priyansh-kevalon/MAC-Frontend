import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const summary = services.map((s) => ({
  slug: s.slug,
  icon: s.icon,
  title: s.title,
  description:
    s.slug === "seo-optimization"
      ? "Rank higher on search engines with technical SEO, keyword research, and on-page optimization that drives qualified organic traffic."
      : s.slug === "digital-marketing"
        ? "Data-driven multi-channel campaigns across paid and organic channels designed to reach the right audience and grow revenue."
        : s.slug === "ui-ux-design"
          ? "User-centered interfaces that convert. From wireframes to polished design systems, we craft experiences users love."
          : s.slug === "branding-strategy"
            ? "Build a memorable brand identity and a roadmap for growth with positioning, messaging, and creative direction that stands out."
            : s.slug === "content-marketing"
              ? "Engaging blogs, articles, and copy that build trust, educate your audience, and turn attention into measurable action."
              : s.slug === "web-development"
                ? "Fast, responsive, and conversion-focused websites built on modern technology to support your marketing goals."
                : s.slug === "email-marketing"
                  ? "Automated, personalized email flows that nurture leads and drive repeat business with strong open and conversion rates."
                  : "High-ROI pay-per-click campaigns on Google and social platforms, continuously optimized to maximize your budget.",
}));

const process = [
  "Discovery & Research",
  "Strategy Development",
  "Design & Build",
  "Launch & Optimize",
  "Report & Scale",
];

const stats = [
  { value: "230+", label: "Happy Clients" },
  { value: "920+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "12+", label: "Years Experience" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#0D0F11]">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-600">
              OUR SERVICES
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500">
              We are a full-service digital marketing agency offering a complete
              range of solutions designed to improve search rankings, engage your
              audience, and deliver measurable business growth.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
              >
                Explore Services <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section id="services" className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="rounded-3xl bg-[#090B0D] px-6 py-14 sm:px-12 text-white">
            <div className="text-center">
              <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-400">
                HOW WE WORK
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                A Proven Process From Strategy to Scale
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                Every engagement follows a clear, results-driven workflow so you
                always know what's happening and why.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-5">
              {process.map((step, i) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#CCFF00] text-sm font-bold text-black">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-white">{step}</h3>
                  {i < process.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="mt-3 hidden text-lime-400 md:block"
                      strokeDasharray="1 4"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold tracking-tight text-[#0D0F11]">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-lime-600 uppercase">
                WHY CHOOSE US
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A Partner Invested in Your Growth
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-500">
                We combine strategy, creativity, and data to deliver marketing
                that works. Here's what sets us apart:
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Transparent reporting and clear communication",
                  "A dedicated, experienced team for every account",
                  "Custom strategies built around your business goals",
                  "Proven results across SEO, PPC, and design",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-lime-500"
                    />
                    <span className="text-sm text-zinc-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side accent panel */}
            <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_#1c2630,_#080a0d_70%)] p-8 sm:p-12 text-white">
              <div className="relative z-10">
                <div className="text-6xl font-bold tracking-tight">
                  920<span className="text-[#CCFF00] font-normal">+</span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">Projects delivered</p>

                <div className="my-8 h-px bg-white/10" />

                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-11 w-11 rounded-full border-2 border-[#CCFF00] object-cover"
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-zinc-400">Trusted by leading brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="contact" className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-zinc-100/80 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
              Let's craft a digital marketing strategy that delivers measurable
              results. Book your free consultation today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <a
                href="/Contact"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-lime-300"
              >
                Book a Free Consultation <ArrowRight size={16} />
              </a>
              <a
                href="tel:4065550120"
                className="inline-flex items-center justify-center rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
