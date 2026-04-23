"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NetworkBackground from "../../../public/svg/svg";
import { useSignup } from "@/context/SignupContext";
import { image } from "framer-motion/client";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    tag: "Match Analysis",
    title: "AI Breaks Down Your Match the Second You Upload",
    description:
      "Drop in any match recording and Footactiq's AI gets to work immediately. No tagging, no manual setup — just upload and receive a full tactical breakdown in minutes. Let AI do the prep so you can focus on coaching.",
    flip: false,
    image: "/images/dash-img-1.png",
  },
  {
    tag: "Player Performance",
    title: "AI Builds a Full Performance Profile for Every Player",
    description:
      "Heatmaps, distance covered, positioning grades, involvement scores — our AI generates a complete picture of every player on the pitch. Know exactly who's performing and who needs work without watching a single minute of footage.",
    flip: true,
    image: "/images/dash-img-2.png",
  },
  {
    tag: "Tactical Intelligence",
    title: "AI Spots the Tactical Patterns You Always Miss",
    description:
      "Our AI automatically identifies how your team attacks, defends, and presses — then visualizes it so any coach can act on it instantly. No analytics knowledge needed. Just clear, AI-powered tactical intelligence after every game.",
    flip: false,
    image: "/images/dash-img-3.png",
  },
  {
    tag: "Key Moments",
    title: "AI Flags Every Decisive Moment So You Don't Miss a Thing",
    description:
      "Goals, chances, defensive errors, set pieces — our AI automatically detects and explains every key moment in the match. Skip straight to what matters and let AI tell you exactly what happened and why.",
    flip: true,
    image: "/images/dash-img-4.png",
  },
  {
    tag: "AI Coach",
    title: "Ask Your AI Coach Anything. Get Answers Instantly.",
    description:
      "After every match, ask the AI coach anything — why you conceded, how your press performed, which players underdelivered. Get plain-language answers in seconds, like having a dedicated data analyst available 24/7 at zero extra cost.",
    flip: false,
    image: "/images/dash-img-5.png",
  },
];

const BUTTON_STYLE: React.CSSProperties = {
  background: "linear-gradient(180deg, #3B82F6 0%, #204887 100%)",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  borderRadius: 10,
  padding: "12px 24px",
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

const NETWORKS = [
  { side: "right" as const, top: "3%" },
  { side: "left" as const, top: "38%" },
  { side: "right" as const, top: "73%" },
];

export default function HowItWorksSection() {
  const { openSignup } = useSignup();

  return (
    <section
      id="how-it-works"
      style={{ background: "#0A192F" }}
      className="pb-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 pt-40">
        {/* ── Section heading ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2
            className="text-white font-black mb-5 leading-tight text-[22px] sm:text-[24px] lg:text-[28px] font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything Your AI Analyst Does After Every Match
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed text-[12px] sm:text-[14px]">
            Footactiq's AI handles the analysis, the breakdowns, and the
            insights — giving every coach access to tools that used to cost
            millions.
          </p>
        </motion.div>
      </div>

      {/* Feature blocks + section-level networks */}
      <div className="relative overflow-hidden">
        {NETWORKS.map((net, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: "38%",
              height: "360px",
              top: net.top,
              right: net.side === "right" ? "-6%" : "auto",
              left: net.side === "left" ? "-6%" : "auto",
              zIndex: 0,
              maskImage:
                net.side === "right"
                  ? "linear-gradient(to left,  black 40%, transparent 100%)"
                  : "linear-gradient(to right, black 40%, transparent 100%)",
              WebkitMaskImage:
                net.side === "right"
                  ? "linear-gradient(to left,  black 40%, transparent 100%)"
                  : "linear-gradient(to right, black 40%, transparent 100%)",
              opacity: 0.65,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: net.side === "left" ? "scaleX(-1)" : "none",
              }}
            >
              <NetworkBackground />
            </div>
          </div>
        ))}

        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8 relative z-10">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className={`mb-4 rounded-2xl grid grid-cols-1 lg:grid-cols-2 p-8 gap-8 items-center ${
                feat.flip ? "lg:grid-flow-dense" : ""
              }`}
              style={{
                background:
                  "linear-gradient(180deg, #0d2a5e 0%, #071224 60%, #0A192F 100%)",
              }}
            >
              {/* Text */}
              <motion.div
                className={feat.flip ? "lg:col-start-2" : ""}
                initial={{ opacity: 0, x: feat.flip ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              >
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
                  style={{
                    color: "#60A5FA",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                >
                  {feat.tag}
                </span>
                <h3
                  className="text-white font-black mb-4 leading-tight text-[18px] sm:text-[18px] lg:text-[22px] font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feat.title}
                </h3>
                <p className="text-white/55 leading-relaxed mb-8 text-[12px] sm:text-[14px]">
                  {feat.description}
                </p>

                <button
                  onClick={openSignup}
                  className="transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={BUTTON_STYLE}
                >
                  Get early access
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </motion.div>

              {/* Image — dashboard mockup style */}
              <motion.div
                className={feat.flip ? "lg:col-start-1 lg:row-start-1" : ""}
                initial={{
                  opacity: 0,
                  x: feat.flip ? -30 : 30,
                  rotateY: feat.flip ? -10 : 10,
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                style={{ perspective: 1200 }}
              >
                {/* Outer glow + frame */}
                <div
                  className="relative w-full rounded-2xl p-[1px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.2) 100%)",
                    boxShadow:
                      "0 0 40px -10px rgba(59,130,246,0.25), 0 20px 60px -20px rgba(0,0,0,0.8)",
                  }}
                >
                  {/* Inner dark chrome frame */}
                  <div
                    className="relative w-full rounded-2xl overflow-hidden p-8"
                    style={{
                      backgroundImage: "url('/images/background.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Dashboard image — natural dimensions */}
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      width={700}
                      height={420}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-auto block"
                      style={{ display: "block" }}
                    />

                    {/* Subtle inner-shadow overlay at bottom for depth */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(7,18,36,0.6) 0%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
