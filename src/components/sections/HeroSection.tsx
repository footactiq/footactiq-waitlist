"use client";
import { useSignup } from "@/context/SignupContext";

export default function HeroSection() {
  const { openSignup } = useSignup(); // ✅ inside the component

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
        <source src="/images/hero-video.mp4" type="video/mp4" />
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: "rgba(5, 13, 26, 0.66)" }} />

      <div className="relative flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto"
        style={{ zIndex: 2 }}>
        <h1 className="font-black mb-5 leading-[1.05] w-full max-w-3xl text-4xl sm:text-5xl md:text-7xl"
          style={{ color: "#FFFFFF" }}>
          Analyze Matches Like A Pro; Without Analysts
        </h1>

        <p className="text-base leading-relaxed mb-10 max-w-[460px] text-[12px] sm:text-[14px] "
          style={{ color: "#E9E9E9", fontWeight: 300, opacity: 0.85 }}>
          Upload match footage and get instant tactical insights, player
          metrics, and AI-driven recommendations.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={openSignup}
            className="px-7 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#3B82F6", boxShadow: "0 0 24px rgba(59,130,246,0.45)", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
            Get early access
          </button>
          <a href="#how-it-works"
            className="px-7 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "transparent", border: "1.5px solid rgba(59,130,246,0.45)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
            See demo
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ zIndex: 3, background: "linear-gradient(to top, #0A192F, transparent)" }} />
    </section>
  );
}