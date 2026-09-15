import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(406) 555-0120", "Mon–Fri, 9am – 6pm"],
    href: "tel:4065550120",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["Hey@boostim.com", "We reply within 24 hours"],
    href: "mailto:Hey@boostim.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["2972 Westheimer Rd. Santa Ana,", "Illinois 85486"],
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday – Friday: 9am – 6pm", "Weekend: By appointment"],
    href: "#",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState(initialForm);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SEND FORM TO BACKEND
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data;
      const text = await response.text();
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Server returned an invalid response. Please try again.");
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit contact form"
        );
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form error:", err);

      if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
        setError("Unable to connect to the server. Please make sure the backend is running and try again.");
      } else {
        setError(
          err.message ||
            "Unable to connect to the server. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Reset form and success message
  const handleNewMessage = () => {
    setSubmitted(false);
    setError("");
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#0D0F11]">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-600">
              CONTACT US
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's Start a Conversation
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500">
              Have a project in mind or a question about our services? We'd
              love to hear from you. Reach out and let's craft a strategy as
              bright as your future.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== INFO CARDS ===================== */}
      <section className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime-400/15 text-lime-600 transition-colors group-hover:bg-lime-400 group-hover:text-black">
                  <card.icon size={22} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-base font-bold tracking-tight text-[#0D0F11]">
                  {card.title}
                </h3>

                {card.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-1 text-xs leading-relaxed text-zinc-500"
                  >
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FORM + SIDE PANEL ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-10 rounded-3xl border border-zinc-100/80 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">

            {/* ===================== FORM ===================== */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-lime-600">
                SEND A MESSAGE
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tell Us About Your Project
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
                Fill out the form and our team will get back to you within 24
                hours with next steps.
              </p>

              {/* =====================
                  SUCCESS MESSAGE
              ====================== */}
              {submitted ? (
                <div className="mt-10 rounded-2xl border border-lime-400/40 bg-lime-400/10 p-8 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#CCFF00] text-black">
                    <CheckCircle2 size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    Message Sent!
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-zinc-600">
                    Thanks for reaching out. We'll be in touch within 24
                    hours.
                  </p>

                  <button
                    type="button"
                    onClick={handleNewMessage}
                    className="mt-6 inline-block rounded-full border border-black px-6 py-2.5 text-xs font-medium text-black transition-all hover:bg-black hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* =====================
                   CONTACT FORM
                ====================== */
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-[#0D0F11]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] px-4 py-3 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-[#0D0F11]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] px-4 py-3 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold text-[#0D0F11]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] px-4 py-3 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-[#0D0F11]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] px-4 py-3 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-[#0D0F11]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your project and goals..."
                      className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-[#FAFAF8] px-4 py-3 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Send Message"}

                      {!loading && <Send size={15} />}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ===================== RIGHT PANEL ===================== */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_#1c2630,_#080a0d_70%)] p-8 text-white sm:p-10">
              <div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#CCFF00] text-black">
                  <MessageSquare size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  Prefer Email or Phone?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  You can also reach us directly. We're a friendly bunch and
                  happy to help either way.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href="mailto:Hey@boostim.com"
                    className="flex items-center gap-4 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                      <Mail size={16} />
                    </span>
                    Hey@boostim.com
                  </a>

                  <a
                    href="tel:4065550120"
                    className="flex items-center gap-4 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                      <Phone size={16} />
                    </span>
                    (406) 555-0120
                  </a>

                  <div className="flex items-center gap-4 text-sm text-zinc-300">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                      <Clock size={16} />
                    </span>
                    Mon–Fri, 9am – 6pm
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white/5 p-5">
                <p className="text-xs leading-relaxed text-zinc-400">
                  <span className="font-bold text-lime-400">
                    Free consultation:
                  </span>{" "}
                  Not sure where to start? Book a free 30-minute strategy call
                  with our team.
                </p>

                <a
                  href="mailto:Hey@boostim.com"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-lime-400 transition-colors hover:text-lime-300"
                >
                  Book a Call <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MAP ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl border border-zinc-100/80 bg-white shadow-sm">
            <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-lime-600">
                  FIND US
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Visit Our Office
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
                  Drop by for a coffee and let's talk about your next big idea.
                  Our team is always happy to meet clients in person.
                </p>

                <div className="mt-6 flex items-start gap-3 text-sm text-zinc-600">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-lime-600"
                  />

                  <span className="leading-snug">
                    2972 Westheimer Rd. Santa Ana,
                    <br />
                    Illinois 85486
                  </span>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps?q=Westheimer+Rd,+Santa+Ana,+Illinois+85486"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
                  >
                    Get Directions <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-zinc-200">
                <iframe
                  title="MAC office location map"
                  src="https://www.google.com/maps?q=2972+Westheimer+Rd,+Santa+Ana,+IL&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}