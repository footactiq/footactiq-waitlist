"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSignup } from "@/context/SignupContext"; // adjust path as needed

// Snappy spring — feels instant but still polished
const SPRING = { type: "spring", stiffness: 420, damping: 30 } as const;

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.12 } },
  exit:    { opacity: 0, transition: { duration: 0.12 } },
};

const modalVariants = {
  hidden:  { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: SPRING },
  exit:    { opacity: 0, y: 8,  scale: 0.98, transition: { duration: 0.12 } },
};

const FIELDS = [
  { type: "text",  field: "name",  placeholder: "Full Name" },
  { type: "email", field: "email", placeholder: "Email Address" },
  { type: "text",  field: "club",  placeholder: "Club / Organisation" },
  { type: "text",  field: "level", placeholder: "Coaching Level" },
] as const;

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "13px 16px",
  background: "#EBF3FE", border: "1px solid #d0e6fc",
  borderRadius: 8, color: "#374151", fontSize: 14,
  outline: "none", fontFamily: "inherit",
  boxSizing: "border-box", display: "block",
};

export default function SignupModal() {
  const {
    showSignup, closeSignup,
    showThankYou, closeThankYou,
    form, setForm,
    loading, error,
    handleSubmit,
  } = useSignup();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeSignup(); closeThankYou(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeSignup, closeThankYou]);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const isValid = form.name.trim() && form.email.includes("@") && form.level.trim();

  return (
    <>
      <style>{`
        @keyframes spin      { to { transform: rotate(360deg); } }
        @keyframes ringPop   { 0% { transform: scale(0.5); opacity: 0; } 65% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); } }
        @keyframes checkDraw { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
        .sm-input::placeholder { color: #9CA3AF; }
        .sm-input:focus { border-color: #3b82f6 !important; background: #e0ecfd !important; }
        .sm-close:hover { background: #f3f4f6 !important; }
        .sm-cta:hover:not(:disabled) { opacity: 0.88; }
      `}</style>

      {/* ── SIGNUP POPUP ── */}
      <AnimatePresence>
        {showSignup && (
          <motion.div
            key="sm-backdrop"
            variants={backdropVariants}
            initial="hidden" animate="visible" exit="exit"
            onClick={closeSignup}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 9999, padding: 16,
            }}
          >
            <motion.div
              key="sm-modal"
              variants={modalVariants}
              initial="hidden" animate="visible" exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff", borderRadius: 24,
                padding: "40px 36px 36px",
                maxWidth: 520, width: "100%",
                boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
                position: "relative",
              }}
            >
              {/* Close */}
              <button
                className="sm-close"
                onClick={closeSignup}
                style={{
                  position: "absolute", top: 16, right: 16,
                  width: 32, height: 32, borderRadius: "50%",
                  border: "none", background: "transparent",
                  cursor: "pointer", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  transition: "background 0.12s",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1L11 11M11 1L1 11" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Header */}
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ margin: "0 0 8px", fontSize: "1.4rem", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em" }}>
                  Be among the first.
                </h2>
                <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>
                  Join coaches already signed up for early access to Footactiq.
                </p>
              </div>

              {/* Fields — no stagger, all appear with the modal */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {FIELDS.map(({ type, field, placeholder }) => (
                  <input
                    key={field}
                    className="sm-input"
                    type={type}
                    value={form[field]}
                    onChange={set(field)}
                    placeholder={placeholder}
                    style={inputStyle}
                  />
                ))}

                {error && (
                  <p style={{ fontSize: 13, color: "#ef4444", textAlign: "center", margin: 0 }}>
                    {error}
                  </p>
                )}

                <button
                  className="sm-cta"
                  onClick={handleSubmit}
                  disabled={!isValid || loading}
                  style={{
                    marginTop: 4, width: "100%", padding: "14px",
                    borderRadius: 10, border: "none",
                    background: isValid && !loading ? "#2563eb" : "#93c5fd",
                    color: "#fff", fontSize: 14, fontWeight: 700,
                    cursor: isValid && !loading ? "pointer" : "not-allowed",
                    transition: "opacity 0.15s", fontFamily: "inherit",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.7s linear infinite" }} />
                      Securing your spot…
                    </>
                  ) : "Get Early Access →"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── THANK YOU POPUP ── */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            key="ty-backdrop"
            variants={backdropVariants}
            initial="hidden" animate="visible" exit="exit"
            onClick={closeThankYou}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 9999, padding: 16,
            }}
          >
            <motion.div
              key="ty-modal"
              variants={modalVariants}
              initial="hidden" animate="visible" exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff", borderRadius: 24,
                padding: "48px 36px 40px",
                maxWidth: 400, width: "100%",
                textAlign: "center",
                boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
              }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 28px",
                boxShadow: "0 0 0 12px rgba(37,99,235,0.1)",
                animation: "ringPop 0.4s cubic-bezier(.34,1.56,.64,1)",
              }}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path
                    d="M8 17L14 23L26 11"
                    stroke="#fff" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{ strokeDasharray: 60, strokeDashoffset: 60, animation: "checkDraw 0.35s 0.2s ease forwards" }}
                  />
                </svg>
              </div>

              <h2 style={{ margin: "0 0 10px", fontSize: "1.55rem", fontWeight: 900, color: "#111827", letterSpacing: "-0.025em" }}>
                You're in, {form.name.split(" ")[0]}!
              </h2>
              <p style={{ margin: "0 0 4px", fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>
                Confirmation sent to
              </p>
              <p style={{ margin: "0 0 28px", fontSize: 14, fontWeight: 700, color: "#2563eb" }}>
                {form.email}
              </p>

              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 18px", marginBottom: 24, textAlign: "left" }}>
                <p style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                  What's next
                </p>
                {[
                  "Check your inbox for a confirmation email",
                  "We review signups and prioritise by level",
                  "Your invite arrives when access opens",
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 10 : 0 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#2563eb", marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{step}</p>
                  </div>
                ))}
              </div>

              <button
                className="sm-cta"
                onClick={closeThankYou}
                style={{ width: "100%", padding: "14px", borderRadius: 10, border: "none", background: "#2563eb", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.15s" }}
              >
                Got it, thanks! 👊
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}