"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSignup } from "@/context/SignupContext";
import { LogoIcon } from "../../../public/svg/svg";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "AI Coach", href: "#ai-coach" },
];

const BUTTON_STYLE: React.CSSProperties = {
  background: "linear-gradient(180deg, #3B82F6 0%, #204887 100%)",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  borderRadius: 10,
  padding: "8px 18px",
  minWidth: 180,
  color: "#fff",
  fontSize: 12,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

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
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
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
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.07 }}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        >
          <button
            onClick={openSignup}
            className="transition-all hover:scale-105 hover:opacity-90"
            style={BUTTON_STYLE}
          >
            Get early access
          </button>
        </motion.div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0A192F]/97 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4"
        >
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
            onClick={() => { setMenuOpen(false); openSignup(); }}
            className="transition-all hover:opacity-90"
            style={{ ...BUTTON_STYLE, minWidth: "unset", width: "100%" }}
          >
            Get early access
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}