import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { ArrowRight, CalendarDays, Clock, Mail } from "lucide-react";

const posts = [
  {
    title: "How a Digital Marketing Agency Can Boost Your Business",
    excerpt:
      "We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search rankings and drive more traffic.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
    category: "Digital Marketing",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    excerpt:
      "From AI-powered personalization to zero-click searches, here's what's shaping the future of digital marketing this year.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85",
    category: "Strategy",
    date: "Mar 05, 2026",
    readTime: "6 min read",
  },
  {
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    excerpt:
      "Learn how to set up tracking, attribute revenue, and scale the channels that actually deliver returns.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    category: "SEO",
    date: "Feb 28, 2026",
    readTime: "4 min read",
  },
  {
    title: "SEO in 2026: What's Changed and What Still Works",
    excerpt:
      "A practical look at core web vitals, AI overviews, and the fundamentals that still move the needle.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=85",
    category: "SEO",
    date: "Feb 20, 2026",
    readTime: "7 min read",
  },
  {
    title: "The Ultimate Guide to Conversion Rate Optimization",
    excerpt:
      "Turn more visitors into customers with landing page psychology, A/B testing, and data-backed iterations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    category: "CRO",
    date: "Feb 14, 2026",
    readTime: "8 min read",
  },
  {
    title: "How to Build a Content Strategy That Actually Drives Growth",
    excerpt:
      "A step-by-step framework for turning SEO research into content that ranks, resonates, and converts.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
    category: "Content",
    date: "Feb 08, 2026",
    readTime: "5 min read",
  },
  {
    title: "UI/UX Trends Shaping High-Converting Websites in 2026",
    excerpt:
      "From micro-interactions to accessibility-first design, see what users expect from modern brands.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85",
    category: "Design",
    date: "Feb 01, 2026",
    readTime: "6 min read",
  },
  {
    title: "Email Marketing Automation: A Guide for Growing Brands",
    excerpt:
      "Set up welcome flows, cart recovery, and win-back campaigns that work on autopilot.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=85",
    category: "Email",
    date: "Jan 25, 2026",
    readTime: "5 min read",
  },
  {
    title: "Small Budget, Big Results: PPC Tactics That Work",
    excerpt:
      "Stretch every dollar with keyword-level bids, negative keywords, and ruthless ad copy testing.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=85",
    category: "PPC",
    date: "Jan 18, 2026",
    readTime: "4 min read",
  },
];

const categories = ["All", "Digital Marketing", "SEO", "Strategy", "Content", "Design", "PPC", "Email", "CRO"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered = posts.filter(
    (p) => activeCategory === "All" || p.category === activeCategory || (activeCategory === "SEO" && p.category === "SEO")
  );

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#0D0F11]">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-600">
              BLOG
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Insights, Ideas & Growth Strategies
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500">
              Practical advice from our team on SEO, digital marketing, design, and
              everything in between — built for businesses that want to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED POST ===================== */}
      {featured && (
        <section className="pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
            <a
              href="#"
              className="group grid overflow-hidden rounded-3xl bg-white shadow-sm border border-zinc-100 lg:grid-cols-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-bold text-black">
                    {featured.category}
                  </span>
                  <span className="text-[11px] font-bold tracking-widest text-lime-600 uppercase">
                    Featured
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {featured.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-4 text-xs font-medium text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {featured.readTime}
                  </span>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold text-black transition-colors group-hover:border-lime-600 group-hover:text-lime-600">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* ===================== CATEGORY FILTER + GRID ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#CCFF00] text-black font-semibold shadow-sm"
                      : "border border-zinc-300 text-zinc-600 hover:border-black hover:text-black"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER CTA ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#090B0D] px-6 py-14 sm:px-12 text-white">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#CCFF00] text-black">
                <Mail size={22} strokeWidth={1.8} />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Get Insights Straight to Your Inbox
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-400">
                Join our newsletter for practical marketing tips, industry trends,
                and growth strategies. No spam, ever.
              </p>

              <form
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full flex-1 rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-lime-400"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-lime-300"
                >
                  Subscribe <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}