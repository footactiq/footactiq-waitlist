"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  VideoIcon,
  ClarityIcon,
  TeamsIcon,
  ActionIcon,
} from "../../../public/svg/svg";
import MarqueeSection from "@/components/sections/MarqueeSection";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    icon: <VideoIcon />,
    title: "AI Reads Every Frame",
    description:
      "Upload your footage and our AI instantly processes every moment — no tagging, no manual work, just deep tactical understanding.",
  },
  {
    icon: <ClarityIcon />,
    title: "AI-Powered Player Intelligence",
    description:
      "Our AI tracks every player's movement, positioning, and involvement so you always know who's performing and who isn't.",
  },
  {
    icon: <TeamsIcon />,
    title: "AI Uncovers Your Team's DNA",
    description:
      "Let AI surface attacking tendencies, defensive structure, and hidden patterns your coaching eye alone would never catch.",
  },
  {
    icon: <ActionIcon />,
    title: "AI Tells You What to Do Next",
    description:
      "Go beyond data. Get AI-generated recommendations you can apply immediately to sharpen decisions and boost performance.",
  },
];

const WITHOUT = [
  "Hours manually reviewing game footage",
  "No clear picture of individual performance",
  "Tactical blind spots you never see coming",
  "Decisions driven by gut feeling, not data",
];

const WITH = [
  "AI breaks down footage in minutes, not hours",
  "Every player's impact visualized instantly",
  "AI spots patterns your eyes miss every time",
  "Confident decisions powered by real AI insights",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function FeaturesSection() {
  return (
    <section id="features" className="mt-[-64px] relative z-10 pb-0">
      <div
        className="py-16 px-6"
        style={{ background: "#ffffff", borderRadius: "34px 34px 0 0" }}
      >
        <MarqueeSection />

        {/* ── Comparison cards ── */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 py-24">
          {/* Without Footactiq AI */}
          <motion.div
            className="rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2
              className="font-semibold mb-6 tracking-wide uppercase text-[22px] sm:text-[24px] lg:text-[28px]"
              style={{ color: "#000000ff" }}
            >
              Without Footactiq AI
            </h2>
            <ul className="flex flex-col gap-4">
              {WITHOUT.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-[14px] sm:text-[16px] text-black"
                >
                  <span className="mt-1 sm:mt-1.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.75 0.75L0.75 14.75M0.75 0.75L14.75 14.75"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Footactiq AI */}
          <motion.div
            className="rounded-2xl p-10 pl-16"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            style={{
              background: "#0A192F",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              className="mb-6 tracking-wide uppercase text-[22px] sm:text-[24px] lg:text-[28px] font-semibold"
              style={{ color: "#ffffffff" }}
            >
              With Footactiq AI
            </h2>
            <ul className="flex flex-col gap-4">
              {WITH.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-[14px] sm:text-[16px]"
                  style={{ color: "#ffffffff" }}
                >
                  <span
                    className="mt-1 sm:mt-1.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.35)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 0C16.6871 0 21.5 4.81294 21.5 10.75C21.5 16.6871 16.6871 21.5 10.75 21.5C4.81294 21.5 0 16.6871 0 10.75C0 4.81294 4.81294 0 10.75 0ZM16.2803 6.71973C15.9874 6.42689 15.5126 6.42685 15.2197 6.71973L8.75 13.1895L6.28027 10.7197C5.98738 10.4269 5.5126 10.4269 5.21973 10.7197C4.92691 11.0126 4.92691 11.4874 5.21973 11.7803L8.21973 14.7803C8.5126 15.0731 8.98738 15.0731 9.28027 14.7803L16.2803 7.78027C16.5732 7.48738 16.5732 7.01262 16.2803 6.71973Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Feature cards ── */}
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-[#111827] font-semibold mb-4 text-[22px] sm:text-[24px] lg:text-[28px]">
              What Our AI Actually Does For You
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-[460px] mx-auto text-[12px] sm:text-[14px]">
              Footactiq's AI engine watches your footage, reads your tactics, and
              hands you the insights that used to take an entire analyst team to produce.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="rounded-2xl p-7 flex flex-col"
                style={{
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className="mb-6 flex items-center justify-start flex-shrink-0"
                  style={{ width: "52px", height: "52px" }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-[#111827] font-semibold mb-3 leading-base text-[16px] sm:text-[18px]">
                  {feat.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-[12px] sm:text-[14px]">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}