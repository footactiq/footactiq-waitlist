"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FootageIcon, ProcessIcon, VisualIcon, TacticalIcon } from "../../../public/svg/svg";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    icon: FootageIcon,
    title: "Upload Match Footage",
    description: "Add your match video and basic details.",
  },
  {
    icon: ProcessIcon,
    title: "AI Processes the Game",
    description:
      "Key events, player movements, and patterns are automatically detected.",
  },
  {
    icon: VisualIcon,
    title: "Visual Insights Are Generated",
    description:
      "See heatmaps, passing networks, and performance data instantly.",
  },
  {
    icon: TacticalIcon,
    title: "Get Tactical Recommendations",
    description:
      "Receive AI-driven insights to improve your team's performance.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function HowItWorksSection2() {
  return (
    <section id="how-it-works-2" style={{ background: "#0A192F" }}>
      <div className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-[#111827] font-semibold mb-4 text-[22px] sm:text-[24px] lg:text-[28px]">
              HOW IT WORKS
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-lg mx-auto text-[12px] sm:text-[14px]">
              A simple workflow designed for real coaches.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
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
                  <div className="relative flex-shrink-0" style={{ width: 64, height: 64 }}>
                    <div style={{ position: "absolute", left: -23, top: -3, width: 107 }}>
                      <Icon />
                    </div>
                  </div>
                  <div className="py-2 flex flex-col gap-2">
                    <h3 className="text-[#111827] font-semibold leading-base text-[16px] sm:text-[18px]">
                      {feat.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-[12px] sm:text-[14px]">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}