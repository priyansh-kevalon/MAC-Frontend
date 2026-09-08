import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  {
    name: "Service",
    to: "/services",
    subItems: [
      { name: "SEO Optimization", to: "/services/seo-optimization" },
      { name: "Digital Marketing", to: "/services/digital-marketing" },
      { name: "UI/UX Design", to: "/services/ui-ux-design" },
      { name: "Branding & Strategy", to: "/services/branding-strategy" },
      { name: "Content Marketing", to: "/services/content-marketing" },
      { name: "Web Development", to: "/services/web-development" },
      { name: "Email Marketing", to: "/services/email-marketing" },
      { name: "PPC Advertising", to: "/services/ppc-advertising" },
    ],
  },
  { name: "Our Team", to: "/team" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F3]/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={logo}
              alt="MAC Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-black">
            {navLinks.map((link) =>
              link.subItems ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServiceDropdownOpen(true)}
                  onMouseLeave={() => setServiceDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="flex items-center gap-1.5 py-2 text-black hover:text-zinc-600 transition-colors cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        serviceDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {serviceDropdownOpen && (
                    <div className="absolute left-0 top-full pt-1 z-50">
                      <div className="w-60 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
                        {link.subItems.slice(0, 6).map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.to ?? sub.href}
                            onClick={() => setServiceDropdownOpen(false)}
                            className="block rounded-lg px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black transition-colors"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                        <div className="my-1.5 h-px bg-zinc-200" />
                        <NavLink
                          to="/services"
                          onClick={() => setServiceDropdownOpen(false)}
                          className="block rounded-lg px-3 py-2 text-xs font-bold text-lime-600 hover:bg-lime-400/10 transition-colors"
                        >
                          View All Services
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              ) : link.to ? (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive: a }) =>
                    `py-2 transition-colors ${
                      a ? "text-lime-600 font-semibold" : "text-black hover:text-zinc-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-black hover:text-zinc-600 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Desktop "Get started" button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black lg:hidden focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-5 shadow-xl">
          <nav className="flex flex-col gap-3.5 text-sm font-medium">
            {navLinks.map((link) =>
              link.to && !link.subItems ? (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive: a }) =>
                    `py-1 transition-colors ${
                      a ? "text-lime-600 font-semibold" : "text-zinc-800 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : link.subItems ? (
                <div key={link.name} className="flex flex-col gap-2">
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive: a }) =>
                      `py-1 transition-colors ${
                        a ? "text-lime-600 font-semibold" : "text-zinc-800 hover:text-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {link.subItems.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.to ?? sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1 pl-4 text-xs text-zinc-500 hover:text-black transition-colors"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-zinc-800 hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-block rounded-full border border-black py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
