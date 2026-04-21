"use client";
import { motion, type Transition, type TargetAndTransition } from "framer-motion";
import { useSignup } from "@/context/SignupContext";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (
  delay = 0
): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const BUTTON_STYLE: React.CSSProperties = {
  background: "linear-gradient(180deg, #3B82F6 0%, #204887 100%)",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  borderRadius: 10,
  padding: "12px 28px",
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function HeroSection() {
  const { openSignup } = useSignup();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: "rgba(5, 13, 26, 0.66)" }}
      />

      <div
        className="relative flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
        style={{ zIndex: 2 }}
      >
        <motion.h1
          {...fadeUp(0.1)}
          className="font-black mb-5 leading-[1.05] w-full max-w-4xl text-[28px] sm:text-[34px] lg:text-[45px] tracking-wide font-semibold"
          style={{ color: "#FFFFFF" }}
        >
          One Upload. Full Tactical Breakdown. Zero Analysts Needed
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="text-base leading-relaxed mb-10 max-w-[460px] text-[12px] sm:text-[14px]"
          style={{ color: "#E9E9E9", fontWeight: 300, opacity: 0.85 }}
        >
          Upload your match footage and let our AI handle the rest — tactical patterns, player metrics, and actionable insights delivered in seconds.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={openSignup}
            className="transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={BUTTON_STYLE}
          >
            Get early access
          </button>
          <a
            href="#how-it-works"
            className="px-7 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "transparent", border: "1.5px solid rgba(59,130,246,0.45)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            See demo
          </a>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ zIndex: 3, background: "linear-gradient(to top, #0A192F, transparent)" }}
      />
    </section>
  );
}