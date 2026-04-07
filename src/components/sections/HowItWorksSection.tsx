"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import NetworkBackground from "../../../public/svg/svg";
import { useSignup } from "@/context/SignupContext";     

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WITHOUT = [
  "Hours reviewing game footage manually",
  "No clear view of individual performance",
  "Missed patterns and tactical blind spots",
  "Decisions based on gut feeling, not data",
];

const WITH = [
  "AI processes match footage in minutes",
  "Clear view of every player performance",
  "Spot your team's patterns effortlessly",
  "Confident decisions backed by real insights",
];

const FEATURES = [
  {
    tag: "Match Analysis",
    title: "Let AI Break Down Your Matches Instantly",
    description:
      "Upload any match recording and Footactiq gets to work immediately. No tagging, no complicated setup — just drag, drop, and get a full tactical breakdown ready within minutes. Spend less time preparing and more time coaching.",
    flip: false,
  },
  {
    tag: "Player Performance",
    title: "See Player Performance Through AI Analysis",
    description:
      "Every player on the pitch gets a full performance profile — heatmaps, distance covered, positioning grades, and involvement scores. Understand who's contributing and who needs attention without watching hours of footage.",
    flip: true,
  },
  {
    tag: "Tactical Intelligence",
    title: "Uncover Tactical Patterns with AI Intelligence",
    description:
      "Footactiq identifies your team's attacking and defensive patterns automatically. See how your shape shifts, where you win and lose duels, and how your press performs — all displayed visually so every coach can understand it.",
    flip: false,
  },
  {
    tag: "Key Moments",
    title: "AI Connects Story In Real Match Moments",
    description:
      "Key moments — goals, chances created, defensive errors, set pieces — are automatically flagged and explained. Jump straight to what matters and understand the context behind every decisive moment in the match.",
    flip: true,
  },
  {
    tag: "AI Coach",
    title: "Ask Questions. Get AI Coaching Insights.",
    description:
      "After every match, ask the AI coach anything — pressing efficiency, why you conceded, how your winger performed. Get plain-language answers instantly, as if you had a data analyst available 24/7 at no extra cost.",
    flip: false,
  },
];

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
  }),
};

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

// 3 networks: right → left → right, aligned with cards 1, 3, 5
const NETWORKS = [
  { side: "right" as const, top: "3%" },
  { side: "left"  as const, top: "38%" },
  { side: "right" as const, top: "73%" },
];

export default function HowItWorksSection() {
  const { openSignup } = useSignup();

  return (
    <section id="how-it-works" style={{ background: "#0A192F" }} className="pb-24">
      <div className="max-w-[1200px] mx-auto px-6 pt-40">

        {/* ── Comparison cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-40">

          {/* Without Footactiq */}
          <motion.div
            className="rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p
              className="font-semibold mb-6 tracking-wide uppercase text-[22px] sm:text-[24px] lg:text-[28px]"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.45)" }}
            >
              Without Footactiq
            </p>
            <ul className="flex flex-col gap-4">
              {WITHOUT.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-[12px] sm:text-[14px]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.35)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 2L6 6M6 2L2 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Footactiq */}
          <motion.div
            className="rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            style={{ background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
          >
            <p
              className="mb-6 tracking-wide uppercase text-[22px] sm:text-[24px] lg:text-[28px] font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "#3B82F6" }}
            >
              With Footactiq
            </p>
            <ul className="flex flex-col gap-4">
              {WITH.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-[12px] sm:text-[14px]"
                  style={{ color: "#374151" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.35)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3.2 5.8L6.5 2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

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
            Everything You Need To Understand The Game
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed text-[12px] sm:text-[14px]">
            Footactiq gives every coach the tools that were once only available to top-level clubs
            — simple, visual, and ready after every match.
          </p>
        </motion.div>
      </div>

      {/* Feature blocks + section-level networks */}
      <div className="relative overflow-hidden">

        {/* 3 network backgrounds — outside every card */}
        {NETWORKS.map((net, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: "38%",
              height: "360px",
              top: net.top,
              right: net.side === "right" ? "-6%" : "auto",
              left:  net.side === "left"  ? "-6%" : "auto",
              zIndex: 0,
              maskImage: net.side === "right"
                ? "linear-gradient(to left,  black 40%, transparent 100%)"
                : "linear-gradient(to right, black 40%, transparent 100%)",
              WebkitMaskImage: net.side === "right"
                ? "linear-gradient(to left,  black 40%, transparent 100%)"
                : "linear-gradient(to right, black 40%, transparent 100%)",
              opacity: 0.65,
            }}
          >
            <div style={{ width: "100%", height: "100%", transform: net.side === "left" ? "scaleX(-1)" : "none" }}>
              <NetworkBackground />
            </div>
          </div>
        ))}

        {/* Cards — above the networks */}
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
                background: "linear-gradient(180deg, #0d2a5e 0%, #071224 60%, #0A192F 100%)",
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
                  style={{ color: "#60A5FA", border: "1px solid rgba(59,130,246,0.25)" }}
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

                {/* ── Button now triggers the global popup ── */}
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

              {/* Image placeholder */}
              <motion.div
                className={feat.flip ? "lg:col-start-1 lg:row-start-1" : ""}
                initial={{ opacity: 0, x: feat.flip ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              >
                <div
                  className="w-full rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "16/10",
                    background: "linear-gradient(135deg, #0d2a5e 0%, #071224 60%, #050d1a 100%)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}