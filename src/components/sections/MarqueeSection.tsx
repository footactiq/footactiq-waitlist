const ITEMS = [
  "For Local Or Semi Professional Football Club (Grassroot)",
  "Built For Local Or Semi Professional Football Club",
  "AI-Powered Tactical Insights",
  "No Technical Expertise Required",
  "Instant Match Analysis",
  "Player Performance Metrics",
];

const HIGHLIGHT = [
  "Or", "Semi", "Professional", "Football", "Club",
  "AI-Powered", "Tactical", "Insights", "Expertise",
  "Required", "Instant", "Analysis", "Player", "Performance", "Metrics",
];

export default function MarqueeSection() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section
      className="relative py-5 overflow-hidden border-y mb-16"
      style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
    >
      <div className="flex">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 whitespace-nowrap">
              <span
                className="font-black text-sm md:text-base uppercase tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.split(" ").map((word, wi) => (
                  <span key={wi} style={{ color: HIGHLIGHT.includes(word) ? "#0B6E4F" : "#000" }}>
                    {word}{" "}
                  </span>
                ))}
              </span>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#0B6E4F" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}