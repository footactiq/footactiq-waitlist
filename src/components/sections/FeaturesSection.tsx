"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { VideoIcon, ClarityIcon, TeamsIcon, ActionIcon } from "../../../public/svg/svg";
import MarqueeSection from "@/components/sections/MarqueeSection";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    icon: <VideoIcon />,
    title: "Instant Match Understanding",
    description:
      "Upload your match footage and let AI handle the breakdown; no tagging, no manual effort, just instant insights.",
  },
  {
    icon: <ClarityIcon />,
    title: "Clarity on Every Player",
    description:
      "Understand how every player contributes with simple, visual metrics on movement, positioning, and involvement.",
  },
  {
    icon: <TeamsIcon />,
    title: "See Your Team's True Patterns",
    description:
      "Identify patterns in your team's play from attacking tendencies to defensive structure without needing advanced analytics knowledge.",
  },
  {
    icon: <ActionIcon />,
    title: "Turn Insights Into Action",
    description:
      "Get practical suggestions you can apply immediately to improve team shape, decision-making, and overall performance.",
  },
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

export default function FeaturesSection() {
  return (
    <section id="features" className="mt-[-64px] relative z-10 pb-0">
      <div
        className="py-16 px-6"
        style={{ background: "#ffffff", borderRadius: "34px 34px 0 0" }}
      >
        <MarqueeSection />
        <div className="max-w-[1200px] mx-auto">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-[#111827] font-semibold mb-4 text-[22px] sm:text-[24px] lg:text-[28px]">
              Meet Your AI Tactical Assistant
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-[460px] mx-auto text-[12px] sm:text-[14px]">
              Footactiq transforms match footage into clear, visual insights helping you understand
              your team, your players, and your tactics like never before.
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