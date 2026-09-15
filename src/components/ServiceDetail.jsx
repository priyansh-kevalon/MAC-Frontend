import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { faqs } from "../data/services.js";

function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-zinc-200">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="py-5">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-[#0D0F11]">{faq.q}</span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-zinc-300 text-zinc-600 transition-transform ${
                  isOpen ? "rotate-180 border-black" : ""
                }`}
              >
                <ChevronDown size={14} />
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 pr-8 text-sm leading-relaxed text-zinc-500">{faq.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ServiceDetail({ service }) {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#0D0F11]">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="pt-12 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} /> Back to all services
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/15 px-3 py-1.5 text-xs font-bold text-lime-600">
                <service.icon size={15} /> OUR SERVICE
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500">
                {service.tagline}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="mailto:Hey@boostim.com"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
                >
                  Get a Free Audit <ArrowRight size={16} />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                >
                  How We Work
                </a>
              </div>
            </div>

            {/* Right accent panel */}
            <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_#1c2630,_#080a0d_70%)] p-8 sm:p-10 text-white">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#CCFF00] text-black">
                <service.icon size={26} strokeWidth={1.8} />
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                What you get with {service.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#CCFF00]" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW & FEATURES ============ */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-lime-600 uppercase">
                OVERVIEW
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Why {service.title} matters
              </h2>
              <p className="mt-6 text-sm leading-7 text-zinc-500">{service.overview}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime-400/15 text-lime-600">
                    <feature.icon size={22} strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-[#0D0F11]">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="rounded-3xl bg-[#090B0D] px-6 py-14 sm:px-12 text-white">
            <div className="tex t-center">
              <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-400">
                HOW WE WORK
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our {service.title} Process
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-5">
              {service.process.map((step, i) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#CCFF00] text-sm font-bold text-black">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-white">{step}</h3>
                  {i < service.process.length - 1 && (
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

      {/* ============ FAQ + CTA ============ */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-10 rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-zinc-100/80 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-lime-600 uppercase">
                FAQS
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Common Questions
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
                Everything you need to know before working with us on{" "}
                {service.title.toLowerCase()}.
              </p>

              <div className="mt-8">
                <a
                  href="/Contact"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-lime-300"
                >
                  Start a Conversation <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <FaqAccordion />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}