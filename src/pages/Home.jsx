import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ctaWomanImg from "../assets/cta-woman.png";
import homeImage from "../assets/home.jpg";


// Media assets matching the Figma UI
const assets = {
  heroLaptop:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
  aboutMan:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85",
  howWeWork:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  portfolioPhone1:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=85",
  portfolioPhone2:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=85",
  portfolioPhone3:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85",
  testimonialUser:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85",
  statAvatars: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  ],
};

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing helps your business reach the right people, build trust, and turn attention into measurable growth.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Search-focused content, useful landing pages and technically sound SEO make it easier for customers to find you.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "Paid campaigns create momentum quickly, while lasting organic growth takes time.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We track qualified traffic, leads, sales, conversion rate and return on investment.",
  },
];

const blogPosts = [
  {
    title: "How a Digital Marketing Agency Can Boost Your Business",
    categoryDot: "bg-[#00D1FF]",
    excerpt:
      "We are the top digital marketing agency for branding corp. We offer a full range of services.",
    readTime: "5 min read",
    activeBtn: true,
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    categoryDot: "bg-[#FF6B00]",
    excerpt:
      "We are the top digital marketing agency for branding corp. We offer a full range of services.",
    readTime: "5 min read",
    activeBtn: false,
  },
  {
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    categoryDot: "bg-[#8A2BE2]",
    excerpt:
      "We are the top digital marketing agency for branding corp. We offer a full range of services.",
    readTime: "5 min read",
    activeBtn: false,
  },
];

const portfolioCategories = [
  "All Work (20)",
  "UX/UI Design (10)",
  "Digital Marketing (5)",
  "Branding (5)",
];

const testimonials = [
  {
    quote:
      "“They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
    author: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
    avatar: assets.testimonialUser,
  },
  {
    quote:
      "“Working with MAC was a turning point for our online presence. Our conversion rates doubled in just four months thanks to their data-backed SEO and modern design approach.”",
    author: "Sarah Jenkins",
    role: "Marketing Director at Maze",
    avatar: assets.statAvatars[0],
  },
  {
    quote:
      "“Their strategic thinking and attention to user experience set them apart from any other agency we've collaborated with. Highly recommended!”",
    author: "David Chen",
    role: "VP of Product at Afterpay",
    avatar: assets.statAvatars[1],
  },
];

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
    {children}
  </div>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("UX/UI Design (10)");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div id="home" className="min-h-screen bg-[#F5F5F3] text-[#0D0F11] font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* ===================== NAVBAR ===================== */}
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-8 pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Left Hero Column */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.06] tracking-tight text-[#0D0F11]">
                Stay ahead of the<br />
                curve with our<br />
                forward-thinking
              </h1>

              <p className="mt-6 max-w-md text-xs sm:text-[13px] leading-relaxed text-zinc-500">
                An award-winning SEO agency with disciplines in digital marketing,
                design, and website development, focused on understanding you.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-black pl-5 pr-2 py-2 text-xs font-medium text-white transition-transform hover:scale-[1.02] shadow-sm"
                >
                  <span>Schedule Call</span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#CCFF00] text-black text-xs font-bold">
                    →
                  </span>
                </a>

                <a
                  href="#work"
                  className="border-b border-black pb-0.5 text-xs font-medium text-black hover:text-zinc-600 transition-colors"
                >
                  View Case Study
                </a>
              </div>

              {/* Social Proof Logos */}
              <div className="mt-14 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
                <div className="text-[10px] font-semibold leading-tight text-zinc-700">
                  Trusted by the world's<br />biggest brands
                </div>
                <span className="font-semibold tracking-tight text-zinc-400">afterpay</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-zinc-400">
                  <span className="h-2 w-2 rounded-full border border-zinc-400"></span> Basecamp
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-zinc-400">
                  <span className="text-sm leading-none">⌁</span> maze
                </span>
              </div>
            </div>

            {/* Right Bento Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* Top Left Bento: Laptop image with growth arrow */}
              <div className="relative h-56 overflow-hidden rounded-3xl group shadow-sm">
                <img
                  src={assets.heroLaptop}
                  alt="Marketing team workspace with laptop and coffee"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full bg-black text-sm text-[#CCFF00] shadow-md">
                  ↗
                </div>
              </div>

              {/* Top Right Bento: 230+ Stats card */}
              <div className="flex flex-col justify-between rounded-3xl bg-[#E8E8E5] p-6 shadow-sm">
                <div>
                  <strong className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0D0F11]">
                    230+
                  </strong>
                  <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
                    some big companies that we work with, and trust us very much.
                  </p>
                </div>
                <div className="mt-6 h-[2px] w-12 bg-black"></div>
              </div>

              {/* Bottom Bento: 300+ Traffic & Graph bar chart card */}
              <div className="col-span-2 flex items-end justify-between rounded-3xl bg-[#090B0D] p-6 sm:p-7 text-white shadow-sm">
                <div>
                  <strong className="text-3xl sm:text-4xl font-bold tracking-tight">
                    300<span className="text-[#CCFF00] font-normal">+</span>
                  </strong>
                  <p className="mt-1 text-xs sm:text-sm font-medium leading-tight text-zinc-300">
                    Drive more traffic<br />and product sales
                  </p>
                </div>

                {/* 3 Green Chart Bars */}
                <div className="flex items-end gap-1.5 pb-1">
                  <div className="h-10 w-6 sm:w-8 rounded-t-sm bg-[#DCFF4C]" />
                  <div className="h-16 w-6 sm:w-8 rounded-t-sm bg-[#CCFF00]" />
                  <div className="h-22 w-6 sm:w-8 rounded-t-sm bg-[#AEE600]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== "PROVIDE THE BEST SERVICE" ROW ===================== */}
      <section className="py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0D0F11] leading-tight">
              Provide the best service with<br />
              out of the box ideas
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 max-w-md">
              We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay ahead of the curve to deliver exceptional results.
            </p>
          </div>
        </Container>
      </section>

      {/* ===================== "WHO WE ARE." SECTION ===================== */}
      <section id="about" className="py-8">
        <Container>
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-zinc-100/80">
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              {/* Left Column */}
              <div>
                <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                  ABOUT US
                </span>
                <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-[#0D0F11]">
                  Who We Are<span className="text-[#2DD4BF] font-extrabold">.</span>
                </h2>
                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-zinc-500">
                  At Sunstrong Digital, we're all about illuminating your brand with bold,
                  innovative marketing strategies. Our team combines creativity with
                  cutting-edge technology to craft digital campaigns that captivate and
                  convert. Whether you're looking to grow your online presence or launch
                  a new product, we're here to help you shine.
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-500">
                  At Sunstrong Digital, our success is defined by the results we deliver.
                  From innovative campaigns to record-breaking growth, we've partnered with
                  brands to help them reach new heights.
                </p>
              </div>

              {/* Right Column: Rotated Green Accent Backdrop + Image */}
              <div className="relative mx-auto w-full max-w-sm pt-4">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-2xl bg-[#10B981]" />
                <img
                src={homeImage}
                alt="Young team leader smiling with arms crossed"
                className="relative h-64 sm:h-72 w-full rounded-2xl object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== STATS & "HOW WE WORK" ROW ===================== */}
      <section id="how-we-work" className="py-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            {/* Left Card: 920+ Stats with overlapping avatars */}
            <div className="flex flex-col justify-between rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_#1c2630,_#080a0d_70%)] p-7 text-white shadow-sm min-h-[280px]">
              <div>
                <strong className="text-5xl sm:text-6xl font-bold tracking-tight">
                  920<span className="text-[#CCFF00] font-normal">+</span>
                </strong>
                <p className="mt-1 text-xs text-zinc-400">
                  Project finish with superbly
                </p>
              </div>

              <div className="mt-12 flex items-center">
                <div className="flex -space-x-2">
                  {assets.statAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Client avatar ${i + 1}`}
                      className="h-9 w-9 rounded-full border-2 border-[#CCFF00] object-cover"
                    />
                  ))}
                </div>
                <span className="ml-4 text-3xl font-light text-[#CCFF00] leading-none">+</span>
              </div>
            </div>

            {/* Right Card: Workshop photo + "HOW WE WORK" + Lime Play Button */}
            <div className="relative overflow-hidden rounded-3xl min-h-[280px] group shadow-sm">
              <img
                src={assets.howWeWork}
                alt="Colleagues collaborating around a high table"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl font-bold tracking-[0.3em] text-white uppercase select-none">
                  HOW WE WORK
                </h3>
              </div>

              {/* Large Lime Circular Play Button */}
              <button
                type="button"
                className="absolute bottom-5 right-5 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-[#CCFF00] text-black text-xl shadow-lg transition-transform hover:scale-110 active:scale-95 border-2 border-white"
                aria-label="Play introduction video"
              >
                <span className="ml-1">▶</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== PORTFOLIO / CASE STUDIES ===================== */}
      <section id="work" className="py-8">
        <Container>
          <div className="rounded-3xl bg-[#090B0D] px-6 py-12 sm:px-12 text-white shadow-xl">
            {/* Section Title */}
            <h2 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
              Real-world examples of how we have helped companies achieve their marketing objectives.
            </h2>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {portfolioCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#CCFF00] text-black font-semibold shadow-sm"
                        : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* 3 Phone Mockup Cards */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {/* Card 1: Curved Mockup with "See Details" circular badge */}
              <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-4 flex items-center justify-center group">
                <img
                  src={assets.portfolioPhone1}
                  alt="Mobile application project preview"
                  className="h-full w-full object-cover rounded-xl opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#CCFF00] text-xs font-semibold text-black shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  See Details
                </button>
              </div>

              {/* Card 2: AirWave AI Chatbot */}
              <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl border border-zinc-800 bg-[#12151A] p-5 flex flex-col justify-between group">
                <img
                  src={assets.portfolioPhone2}
                  alt="AirWave AI Chatbot interface preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative z-10 text-[10px] text-zinc-400 font-medium tracking-wide">
                  AI Corporation, 2023
                </div>
                <div className="relative z-10 text-sm font-semibold text-white">
                  AirWave - AI Chatbot Mobile App
                </div>
              </div>

              {/* Card 3: App Lancer Freelance Platform */}
              <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl border border-zinc-800 bg-[#12151A] p-5 flex flex-col justify-between group">
                <img
                  src={assets.portfolioPhone3}
                  alt="App Lancer freelance platform interface preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative z-10 text-[10px] text-zinc-400 font-medium tracking-wide">
                  Lancer Corporation, 2023
                </div>
                <div className="relative z-10 text-sm font-semibold text-white">
                  App Lancer - Freelance Platform
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== TESTIMONIAL SECTION ===================== */}
      <section className="py-12">
        <Container>
          <div className="py-4">
            <blockquote className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#0D0F11] max-w-4xl">
              {testimonials[testimonialIndex].quote}
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].author}
                  className="h-11 w-11 rounded-full object-cover border border-zinc-200"
                />
                <div>
                  <b className="block text-sm font-bold text-[#0D0F11]">
                    {testimonials[testimonialIndex].author}
                  </b>
                  <span className="block text-[11px] text-zinc-500 font-normal">
                    {testimonials[testimonialIndex].role}
                  </span>
                </div>
              </div>

              {/* Carousel Navigation Arrows */}
              <div className="flex items-center gap-3 text-xs font-semibold">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="grid h-8 w-8 place-items-center rounded-full border border-zinc-300 text-zinc-700 hover:border-black hover:text-black transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <span className="text-xs text-zinc-500 font-medium tracking-wider">
                  0{testimonialIndex + 1} / 0{testimonials.length}
                </span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="grid h-8 w-8 place-items-center rounded-full bg-black text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== FAQS SECTION ===================== */}
      <section className="py-8">
        <Container>
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-zinc-100/80">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D0F11]">
                  Digital Marketing FAQs
                </h2>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-500 max-w-sm">
                  As a leading digital marketing agency, we are dedicated to providing
                  comprehensive educational resources and answering frequently asked
                  questions for our clients.
                </p>

                <div className="mt-6 flex items-center gap-5">
                  <a
                    href="#contact"
                    className="inline-block rounded-full border border-zinc-300 px-5 py-2 text-xs font-medium text-black hover:border-black transition-colors"
                  >
                    More Questions
                  </a>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-black underline underline-offset-4 hover:text-zinc-600 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right Accordion List */}
              <div className="divide-y divide-zinc-200">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between text-left text-xs sm:text-sm font-semibold text-[#0D0F11] gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <span className="text-lg font-light text-zinc-500 shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="mt-3 text-xs leading-relaxed text-zinc-500 pr-6">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== SERVICES & BLOG SECTION ===================== */}
      <section id="services" className="py-12">
        <Container>
          {/* Section Header */}
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0D0F11] leading-tight">
              Digital Marketing & SEO<br />
              Services That Grow Traffic &<br />
              Increase Revenue
            </h2>

            <div>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 max-w-md">
                We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
              </p>
              <div className="mt-4">
                <a
                  href="#blog"
                  className="inline-block rounded-full border border-zinc-300 px-5 py-2 text-xs font-medium text-black hover:border-black transition-colors"
                >
                  See more
                </a>
              </div>
            </div>
          </div>

          {/* 3 Blog Cards */}
          <div id="blog" className="mt-8 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`h-2.5 w-2.5 rounded-full ${post.categoryDot}`} />
                    <span className="text-[10px] text-zinc-400 font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold leading-snug text-[#0D0F11]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-all cursor-pointer ${
                      post.activeBtn
                        ? "bg-black text-white hover:bg-zinc-800"
                        : "border border-zinc-300 text-black hover:border-black"
                    }`}
                    aria-label={`Read more about ${post.title}`}
                  >
                    →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===================== CTA / BRIGHT MARKETING SECTION ===================== */}
      <section id="contact" className="py-8 sm:py-12">
        <Container>
          <div className="rounded-3xl bg-white p-8 sm:p-12 lg:p-16 shadow-sm border border-zinc-100/80">
            <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-[1.1fr_0.9fr]">
              {/* Left Column */}
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#1E2329] uppercase">
                  BRIGHT
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-[#0D0F11] leading-[1.08]">
                  Ready to Light Up<br />
                  Your Marketing<span className="text-[#3DD57D] font-extrabold">?</span>
                </h2>
                <p className="mt-6 text-sm sm:text-[15px] leading-relaxed text-zinc-600 font-normal max-w-md">
                  We’re here to help you take your brand to the next level. Let’s craft a strategy that’s as bright as your future.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block rounded-lg bg-[#3DD57D] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#34BE6F] transition-all hover:shadow-md active:scale-95"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>

              {/* Right Column: Exact image from Figma */}
              <div className="md:justify-self-end w-full max-w-md overflow-hidden rounded-xl">
                <img
                  src={ctaWomanImg}
                  alt="Marketing specialist working on a laptop"
                  className="w-full h-auto object-cover rounded-xl shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================== FOOTER ===================== */}
      <Footer />
    </div>
  );
}
