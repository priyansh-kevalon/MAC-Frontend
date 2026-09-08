import {
  Search,
  BarChart3,
  Palette,
  Megaphone,
  PenTool,
  Code2,
  Mail,
  TrendingUp,
  FileSearch,
  Wand2,
  Target,
  ChartLine,
  Lightbulb,
  Tag,
  PenLine,
  Code,
  Send,
  Layers,
  Users,
  Gauge,
  MousePointerClick,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

const commonFaqs = [
  {
    q: "How long does it take to see results?",
    a: "Paid campaigns create momentum quickly, while long-term organic growth typically shows measurable improvement within 3–6 months.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes. We tailor our approach for startups, growing SMBs, and established enterprises across a wide range of industries.",
  },
  {
    q: "How do you report on performance?",
    a: "You get a clear dashboard and regular reports covering the metrics that matter most to your business goals.",
  },
];

export const services = [
  {
    slug: "seo-optimization",
    icon: Search,
    title: "SEO Optimization",
    tagline:
      "Rank higher, get found, and turn search traffic into revenue with technical, on-page, and off-page SEO.",
    overview:
      "Search is where your customers begin. We combine technical audits, keyword strategy, content optimization, and authoritative link building to grow your organic visibility and deliver qualified traffic that converts.",
    features: [
      {
        icon: FileSearch,
        title: "Technical SEO Audit",
        text: "Deep crawl and fix issues that block search engines and hurt rankings.",
      },
      {
        icon: Target,
        title: "Keyword & Content Strategy",
        text: "Target the terms that matter with intent-driven content and on-page optimization.",
      },
      {
        icon: Tag,
        title: "Off-Page & Link Building",
        text: "Build authority with high-quality, relevant backlinks.",
      },
      {
        icon: ChartLine,
        title: "Analytics & Reporting",
        text: "Track rankings, traffic, and conversions with transparent monthly reports.",
      },
    ],
    process: [
      "Audit & Research",
      "Strategy & Roadmap",
      "On-Page Optimization",
      "Authority Building",
      "Measure & Refine",
    ],
    outcomes: [
      "Higher keyword rankings",
      "More qualified organic traffic",
      "Better conversion rates",
      "Long-term compounding growth",
    ],
  },
  {
    slug: "digital-marketing",
    icon: BarChart3,
    title: "Digital Marketing",
    tagline:
      "Multi-channel campaigns that reach the right audience, build trust, and drive measurable revenue.",
    overview:
      "We build integrated marketing campaigns across paid, social, and content channels. Every decision is backed by data, so your budget works harder and your growth is predictable.",
    features: [
      {
        icon: Target,
        title: "Paid Social & Display",
        text: "Precision-targeted ad campaigns on the platforms your audience uses most.",
      },
      {
        icon: Users,
        title: "Social Media Management",
        text: "Consistent, engaging content that builds community and brand loyalty.",
      },
      {
        icon: Lightbulb,
        title: "Conversion Optimization",
        text: "Landing pages and funnels engineered to turn visitors into customers.",
      },
      {
        icon: BarChart3,
        title: "Full-Funnel Reporting",
        text: "From first touch to revenue, understand what's working and why.",
      },
    ],
    process: [
      "Discovery & Goals",
      "Channel Strategy",
      "Campaign Launch",
      "Optimize & Scale",
    ],
    outcomes: [
      "Broader brand reach",
      "More qualified leads",
      "Improved ROI on ad spend",
      "Predictable pipeline growth",
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    tagline:
      "Interfaces that look great, feel effortless, and convert — designed around your users, not just your brand.",
    overview:
      "Great design isn't decoration — it's a growth lever. We research your users, map their journey, and design responsive interfaces that reduce friction and increase conversion.",
    features: [
      {
        icon: PenLine,
        title: "UX Research & Strategy",
        text: "User interviews, journey mapping, and testing that ground decisions in evidence.",
      },
      {
        icon: Wand2,
        title: "UI & Design Systems",
        text: "Consistent, scalable interfaces built on reusable components and tokens.",
      },
      {
        icon: MonitorSmartphone,
        title: "Responsive & Accessible",
        text: "Designs that work beautifully on every device and follow accessibility best practices.",
      },
      {
        icon: Gauge,
        title: "Usability & Testing",
        text: "Prototype validation and iteration before a single line of code.",
      },
    ],
    process: [
      "Research & Discovery",
      "Wireframes & Flow",
      "Visual Design",
      "Prototype & Test",
      "Design Handoff",
    ],
    outcomes: [
      "Higher conversion rates",
      "Lower bounce rates",
      "Stronger brand perception",
      "Faster user onboarding",
    ],
  },
  {
    slug: "branding-strategy",
    icon: Megaphone,
    title: "Branding & Strategy",
    tagline:
      "A memorable identity and a clear strategy that make your brand impossible to ignore.",
    overview:
      "Your brand is the promise you make to your market. We craft positioning, messaging, and visual identity that differentiate you and turn first-time visitors into loyal advocates.",
    features: [
      {
        icon: Layers,
        title: "Brand Identity",
        text: "Logos, color, typography, and visual language that feel unmistakably you.",
      },
      {
        icon: Lightbulb,
        title: "Positioning & Messaging",
        text: "A sharp value proposition and messaging framework for every touchpoint.",
      },
      {
        icon: Megaphone,
        title: "Campaign Creative",
        text: "Compelling campaign ideas and assets across all your channels.",
      },
      {
        icon: Users,
        title: "Brand Guidelines",
        text: "Documentation that keeps your brand consistent as it grows.",
      },
    ],
    process: [
      "Brand Audit",
      "Strategy & Positioning",
      "Visual Identity Design",
      "Messaging & Voice",
      "Launch & Guidelines",
    ],
    outcomes: [
      "Clear brand differentiation",
      "Greater customer trust",
      "Consistent brand experience",
      "Higher perceived value",
    ],
  },
  {
    slug: "content-marketing",
    icon: PenTool,
    title: "Content Marketing",
    tagline:
      "Content that educates, engages, and converts — built to fuel your SEO and nurture your audience.",
    overview:
      "Content is the engine of modern marketing. We create the blogs, articles, and resources your audience actually searches for, and map every asset to a business outcome.",
    features: [
      {
        icon: PenLine,
        title: "Editorial Planning",
        text: "A content calendar aligned with keywords, sales goals, and the buyer's journey.",
      },
      {
        icon: Tag,
        title: "SEO-Driven Writing",
        text: "Articles that rank, get read, and move readers to action.",
      },
      {
        icon: Layers,
        title: "Content Repurposing",
        text: "Turn one asset into many: videos, social posts, emails, and more.",
      },
      {
        icon: ChartLine,
        title: "Performance Tracking",
        text: "Measure readership, engagement, and the leads each piece generates.",
      },
    ],
    process: [
      "Content Audit",
      "Strategy & Calendar",
      "Creation & Editing",
      "Publishing & Promotion",
      "Measure & Optimize",
    ],
    outcomes: [
      "Stronger organic rankings",
      "More engaged audiences",
      "Higher lead generation",
      "Authority in your niche",
    ],
  },
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline:
      "Fast, secure, conversion-focused websites built on modern technology.",
    overview:
      "Your website is your hardest-working salesperson. We design and build high-performance sites that load fast, look premium, and are engineered to convert visitors into customers.",
    features: [
      {
        icon: Code,
        title: "Custom Development",
        text: "Modern, scalable builds with clean code and future-proof architecture.",
      },
      {
        icon: Gauge,
        title: "Performance Optimization",
        text: "Core Web Vitals, speed, and SEO fundamentals tuned from day one.",
      },
      {
        icon: MonitorSmartphone,
        title: "Responsive Builds",
        text: "Pixel-perfect experiences across every screen size.",
      },
      {
        icon: Rocket,
        title: "Launch & Maintenance",
        text: "Smooth deployment plus ongoing support, security, and updates.",
      },
    ],
    process: [
      "Requirements & Design",
      "Development",
      "Testing & QA",
      "Launch",
      "Support & Grow",
    ],
    outcomes: [
      "Faster load times",
      "Higher conversion rates",
      "Better SEO foundations",
      "Easy content management",
    ],
  },
  {
    slug: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    tagline:
      "Automated, personalized email that nurtures leads and turns one-time buyers into repeat customers.",
    overview:
      "Email delivers the highest ROI of any channel. We build segmented campaigns and automated flows that greet, nurture, and convert your audience on autopilot.",
    features: [
      {
        icon: Send,
        title: "Automated Flows",
        text: "Welcome, cart recovery, and win-back journeys that run 24/7.",
      },
      {
        icon: Users,
        title: "Segmentation & Personalization",
        text: "Relevant messages that feel crafted for each subscriber.",
      },
      {
        icon: PenLine,
        title: "Campaign Design & Copy",
        text: "On-brand emails that get opened and clicked.",
      },
      {
        icon: ChartLine,
        title: "Deliverability & Analytics",
        text: "Healthy inbox placement and reporting that ties email to revenue.",
      },
    ],
    process: [
      "List Audit & Setup",
      "Flow Architecture",
      "Campaign Creation",
      "Test & Optimize",
    ],
    outcomes: [
      "Higher open & click rates",
      "More repeat purchases",
      "Lower cart abandonment",
      "Steady recurring revenue",
    ],
  },
  {
    slug: "ppc-advertising",
    icon: TrendingUp,
    title: "PPC Advertising",
    tagline:
      "High-ROI paid search and social campaigns, continuously optimized to maximize every dollar of your budget.",
    overview:
      "Get in front of buyers at the exact moment they're searching. We build and manage paid campaigns across Google and social platforms, obsessively optimizing for profit.",
    features: [
      {
        icon: MousePointerClick,
        title: "Search & Display Ads",
        text: "Precise, intent-driven campaigns that capture high-value clicks.",
      },
      {
        icon: Target,
        title: "Audience Targeting",
        text: "Data-backed audiences, retargeting, and lookalikes that convert.",
      },
      {
        icon: ChartLine,
        title: "Landing Page Testing",
        text: "Continuous A/B testing to lift quality score and conversion rate.",
      },
      {
        icon: Gauge,
        title: "Budget Management",
        text: "Real-time optimization to protect margin and scale winners.",
      },
    ],
    process: [
      "Account Setup",
      "Campaign Structure",
      "Launch & Test",
      "Optimize & Scale",
    ],
    outcomes: [
      "Immediate visibility",
      "Qualified, ready-to-buy traffic",
      "Low cost per acquisition",
      "Scalable, profitable spend",
    ],
  },
];

export const faqs = commonFaqs;

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);