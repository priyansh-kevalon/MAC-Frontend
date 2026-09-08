import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TeamCard from "../components/TeamCard.jsx";
import {
  Users,
  Rocket,
  Heart,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";

const avatars = {
  michael:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
  sarah:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",
  david:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=85",
  emily:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85",
  james:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85",
  lisa:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85",
  alex:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=85",
  maya:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=85",
  noah:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85",
  sofia:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85",
};

const team = [
  { name: "Michael Kaizer", role: "Founder & CEO", photo: avatars.michael },
  { name: "Sarah Jenkins", role: "Head of Marketing", photo: avatars.sarah },
  { name: "David Chen", role: "Lead SEO Strategist", photo: avatars.david },
  { name: "Emily Turner", role: "Creative Director", photo: avatars.emily },
  { name: "James Rodriguez", role: "PPC Specialist", photo: avatars.james },
  { name: "Lisa Park", role: "Content Manager", photo: avatars.lisa },
  { name: "Alex Morgan", role: "UI/UX Designer", photo: avatars.alex },
  { name: "Maya Patel", role: "Web Developer", photo: avatars.maya },
  { name: "Noah Williams", role: "Social Media Manager", photo: avatars.noah },
  { name: "Sofia Rossi", role: "Account Strategist", photo: avatars.sofia },
];

const stats = [
  { value: "25+", label: "Team Members" },
  { value: "12+", label: "Years of Experience" },
  { value: "920+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    text: "Every strategy is measured against the outcomes that matter for your business.",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    text: "We craft bold, original work that stands out in a crowded digital landscape.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    text: "We treat your growth as our own and stay invested from first call to final report.",
  },
  {
    icon: Rocket,
    title: "Always Growing",
    text: "Continuous learning keeps our team ahead of trends, algorithms, and best practices.",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#0D0F11]">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-600">
              OUR TEAM
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The People Behind Our Results
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500">
              We are a passionate team of strategists, designers, developers, and
              marketers dedicated to helping brands grow online. Meet the people
              who make MAC work.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-8 rounded-3xl bg-white px-6 py-10 shadow-sm border border-zinc-100/80 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ===================== TEAM GRID ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CULTURE / VALUES ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="rounded-3xl bg-[#090B0D] px-6 py-14 sm:px-12 text-white">
            <div className="text-center">
              <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-400">
                WHAT WE BELIEVE
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                A Culture Built on Growth
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                The values that guide how we work with each other — and with you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white/5 p-7 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#CCFF00] text-black">
                    <value.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-white">{value.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== JOIN + CTA ===================== */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-lime-600 uppercase">
                JOIN US
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Want to Grow With Us?
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-500">
                We're always looking for talented, curious people who care about
                the work they ship. If that sounds like you, we'd love to talk.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:careers@boostim.com"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
                >
                  View Open Roles <ArrowRight size={16} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right accent panel */}
            <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_#1c2630,_#080a0d_70%)] p-8 sm:p-10 text-white">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#CCFF00] text-black">
                <Users size={26} strokeWidth={1.8} />
              </div>
              <div className="mt-6 flex -space-x-2">
                {Object.values(avatars).slice(0, 6).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-11 w-11 rounded-full border-2 border-[#CCFF00] object-cover"
                  />
                ))}
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#CCFF00] bg-white/10 text-xs font-bold text-lime-400">
                  +{team.length}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">
                One Team. One Mission.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Grow your brand with specialists who bring energy, expertise, and
                ownership to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}