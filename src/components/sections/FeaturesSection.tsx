import { VideoIcon, ClarityIcon, TeamsIcon, ActionIcon } from "../../../public/svg/svg";
import MarqueeSection from "@/components/sections/MarqueeSection";

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

export default function FeaturesSection() {
  return (
    <section id="features" className="mt-[-64px] relative z-10">
         
      <div
        className="py-16 px-6"
        style={{ background: "#ffffff", borderRadius: "34px 34px 0 0" }}
      >
        <MarqueeSection />
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[#111827] font-bold mb-4 text-[22px] sm:text-[28px] lg:text-[32px]">
              Meet Your AI Tactical Assistant
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-[460px] mx-auto text-[12px] sm:text-[14px]">
              Footactiq transforms match footage into clear, visual insights helping you understand
              your team, your players, and your tactics like never before.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col"
                style={{

                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
              >
                {/* Icon — left-aligned */}
                <div
                  className="mb-6 flex items-center justify-start flex-shrink-0"
                  style={{
                    width: "52px",
                    height: "52px",
                  
                  }}
                >
                  {feat.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#111827] font-bold mb-3 leading-base text-[18px] sm:text-[22px]">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] leading-relaxed text-[12px] sm:text-[14px]">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}