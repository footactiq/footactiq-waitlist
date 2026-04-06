import {
  FootageIcon,
  ProcessIcon,
  VisualIcon,
  TacticalIcon,
} from "../../../public/svg/svg";

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

export default function HowItWorksSection2() {
  return (
    <section id="how-it-works-2" style={{ background: "#0A192F" }}>
      <div className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[#111827] font-bold mb-4 text-[22px] sm:text-[28px] lg:text-[32px]">
              HOW IT WORKS
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-lg mx-auto text-[12px] sm:text-[14px]">
              A simple workflow designed for real coaches.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-7 flex flex-col"
                  style={{
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: 64, height: 64 }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: -23,
                        top: -3,
                        width: 107,
                      }}
                    >
                      <Icon />
                    </div>
                  </div>

                  {/* Text */}
                  <div className=" py-2 flex flex-col gap-2">
                    <h3 className="text-[#111827] font-semibold leading-base text-[18px] sm:text-[22px]">
                      {feat.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-[12px] sm:text-[14px]">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
