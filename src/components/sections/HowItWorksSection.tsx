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

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{ background: "#0A192F" }}
      className="pb-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 pt-20">
        {/* ── Comparison cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {/* Without Footactiq */}
          <div className="rounded-2xl p-8">
            <p
              className="font-bold mb-6 text-base tracking-wide uppercase text-[22px] sm:text-[28px] lg:text-[32px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Without Footactiq
            </p>
            <ul className="flex flex-col gap-4">
              {WITHOUT.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[12px] sm:text-[14px]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(239,68,68,0.15)",
                      border: "1px solid rgba(239,68,68,0.35)",
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M2 2L6 6M6 2L2 6"
                        stroke="#EF4444"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With Footactiq — white card, dark text */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            }}
          >
            <p
              className="font-bold mb-6 text-base tracking-wide uppercase text-[22px] sm:text-[28px] lg:text-[32px]"
              style={{ fontFamily: "var(--font-display)", color: "#3B82F6" }}
            >
              With Footactiq
            </p>
            <ul className="flex flex-col gap-4">
              {WITH.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[12px] sm:text-[14px]"
                  style={{ color: "#374151" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.35)",
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4L3.2 5.8L6.5 2"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Section heading ── */}
        <div className="text-center mb-20">
          <h2
            className="text-white font-black mb-5 leading-tight text-[22px] sm:text-[28px] lg:text-[32px]"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Everything You Need To Understand The Game
          </h2>
          <p
            className="text-white/50 max-w-xl mx-auto leading-relaxed text-[12px] sm:text-[14px]"
          >
            Footactiq gives every coach the tools that were once only available
            to top-level clubs — simple, visual, and ready after every match.
          </p>
        </div>
      </div>

      {/* ── Alternating feature blocks ── */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
        {FEATURES.map((feat, i) => (
          <div
            key={i}
            className={`mb-4 rounded-2xl grid grid-cols-1 lg:grid-cols-2 p-8 gap-8 items-center ${feat.flip ? "lg:grid-flow-dense" : ""}`}
            style={{
              background:
                "linear-gradient(180deg, #0d2a5e 0%, #071224ec 60%, #0A192F 100%)",
            }}
          >
            {/* Text */}
            <div className={feat.flip ? "lg:col-start-2" : ""}>
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
                className="text-white font-black mb-4 leading-tight text-[18px] sm:text-[20px] lg:text-[24px]"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {feat.title}
              </h3>
              <p
                className="text-white/55 leading-relaxed mb-8 text-[12px] sm:text-[14px]"
              >
                {feat.description}
              </p>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{
                  background: "#3B82F6",
                  boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                }}
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
              </a>
            </div>

            {/* Image placeholder */}
            <div className={feat.flip ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "16/10",
                  background:
                    "linear-gradient(135deg, #0d2a5e 0%, #071224 60%, #050d1a 100%)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                {/*
                  ── DROP YOUR SCREENSHOT HERE ──
                  <Image src={`/images/feature-${i+1}.png`} fill alt={feat.title} className="object-cover"/>
                */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}