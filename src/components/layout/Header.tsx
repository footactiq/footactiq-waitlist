"use client";
import { useState, useEffect } from "react";
import { useSignup } from "@/context/SignupContext";
import { LogoIcon } from "../../../public/svg/svg";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "AI Coach", href: "#ai-coach" },
];

export default function Header() {
  const { openSignup } = useSignup();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A192F]/90 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <LogoIcon />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={openSignup}
            className="relative px-5 py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold overflow-hidden group transition-all hover:scale-105 glow-blue"
            style={{ border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            <span className="relative z-10">Get early access</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A192F]/97 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white font-medium py-2 border-b border-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openSignup();
            }}
            className="px-7 py-3 rounded-lg text-white font-semibold text-sm"
            style={{
              background: "#3B82F6",
              boxShadow: "0 0 24px rgba(59,130,246,0.45)",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Get early access
          </button>
        </div>
      )}
    </header>
  );
}
