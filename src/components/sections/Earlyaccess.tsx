"use client";
import { useState, useEffect } from "react";

export default function EarlyAccess() {
  const [form, setForm] = useState({ name: "", email: "", club: "", level: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSignup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setShowSignup(false); setShowThankYou(false); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.level) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setShowSignup(false);
      setShowThankYou(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  const isValid = form.name.trim() && form.email.includes("@") && form.level.trim();

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "#EBF3FE",
    border: "1px solid #d0e6fc",
    borderRadius: 8,
    color: "#374151",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    display: "block",
  };

  const modalInputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "#EBF3FE",
    border: "1px solid #d0e6fc",
    borderRadius: 8,
    color: "#374151",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    display: "block",
  };

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        fontFamily: "inherit",
      }}
    >
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ringPop {
          0%   { transform: scale(0.5); opacity: 0; }
          65%  { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset: 60; }
          to   { stroke-dashoffset: 0; }
        }
        input::placeholder { color: #9CA3AF; }
        .field-input:focus {
          border-color: #3b82f6 !important;
          background: #e0ecfd !important;
        }
        .submit-btn:hover:not(:disabled) { background: #1e40af !important; }
        .submit-btn:active:not(:disabled) { transform: scale(0.98); }
        .modal-close:hover { background: #f3f4f6 !important; }
        .modal-cta:hover { background: #1e40af !important; }
      `}</style>

      {/* ── SIGNUP POPUP ── */}
      {showSignup && (
        <div
          onClick={() => setShowSignup(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000, padding: 16,
            animation: "backdropIn 0.2s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "40px 36px 36px",
              maxWidth: 520, width: "100%",
              boxShadow: "0 40px 100px rgba(0,0,0,0.2)",
              animation: "modalSlideUp 0.4s cubic-bezier(.34,1.2,.64,1)",
              position: "relative",
            }}
          >
            <button
              className="modal-close"
              onClick={() => setShowSignup(false)}
              style={{
                position: "absolute", top: 16, right: 16,
                width: 32, height: 32, borderRadius: "50%",
                border: "none", background: "transparent",
                cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
                transition: "background 0.15s",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div style={{ marginBottom: 20 }}>
              <h2 style={{
                margin: "0 0 8px", fontSize: "1.4rem",
                fontWeight: 900, color: "#111827", letterSpacing: "-0.02em",
              }}>
                Be among the first.
              </h2>
              <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>
                Join coaches already signed up for early access to Footactiq.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input className="field-input" type="text" value={form.name} onChange={set("name")} placeholder="Full Name" style={modalInputStyle} />
              <input className="field-input" type="email" value={form.email} onChange={set("email")} placeholder="Email Address" style={modalInputStyle} />
              <input className="field-input" type="text" value={form.club} onChange={set("club")} placeholder="Club / Organisation" style={modalInputStyle} />
              <input className="field-input" type="text" value={form.level} onChange={set("level")} placeholder="Coaching Level" style={modalInputStyle} />

              {error && (
                <p style={{ fontSize: 13, color: "#ef4444", textAlign: "center", margin: 0 }}>{error}</p>
              )}

              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={!isValid || loading}
                style={{
                  marginTop: 4, width: "100%", padding: "14px",
                  borderRadius: 10, border: "none",
                  background: isValid && !loading ? "#2563eb" : "#93c5fd",
                  color: "#fff", fontSize: 14, fontWeight: 700,
                  cursor: isValid && !loading ? "pointer" : "not-allowed",
                  transition: "background 0.2s", fontFamily: "inherit",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                {loading ? (
                  <>
                    <div style={{
                      width: 14, height: 14, borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff",
                      animation: "spin 0.7s linear infinite",
                    }} />
                    Securing your spot…
                  </>
                ) : "Get Early Access →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── THANK YOU POPUP ── */}
      {showThankYou && (
        <div
          onClick={() => setShowThankYou(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000, padding: 16,
            animation: "backdropIn 0.2s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "48px 36px 40px",
              maxWidth: 400, width: "100%",
              textAlign: "center",
              boxShadow: "0 40px 100px rgba(0,0,0,0.2)",
              animation: "modalSlideUp 0.4s cubic-bezier(.34,1.2,.64,1)",
            }}
          >
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px",
              boxShadow: "0 0 0 12px rgba(37,99,235,0.1)",
              animation: "ringPop 0.5s cubic-bezier(.34,1.56,.64,1)",
            }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  d="M8 17L14 23L26 11"
                  stroke="#fff" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round"
                  style={{
                    strokeDasharray: 60, strokeDashoffset: 60,
                    animation: "checkDraw 0.45s 0.35s ease forwards",
                  }}
                />
              </svg>
            </div>

            <h2 style={{
              margin: "0 0 10px", fontSize: "1.55rem",
              fontWeight: 900, color: "#111827", letterSpacing: "-0.025em",
            }}>
              You're in, {form.name.split(" ")[0]}!
            </h2>
            <p style={{ margin: "0 0 4px", fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>
              Confirmation sent to
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 14, fontWeight: 700, color: "#2563eb" }}>
              {form.email}
            </p>

            <div style={{
              background: "#f8fafc", border: "1px solid #e2e8f0",
              borderRadius: 12, padding: "16px 18px",
              marginBottom: 24, textAlign: "left",
            }}>
              <p style={{
                margin: "0 0 10px", fontSize: 11, fontWeight: 700,
                color: "#94a3b8", letterSpacing: "0.07em", textTransform: "uppercase",
              }}>
                What's next
              </p>
              {[
                "Check your inbox for a confirmation email",
                "We review signups and prioritise by level",
                "Your invite arrives when access opens",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 10 : 0 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                    background: "rgba(37,99,235,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800, color: "#2563eb", marginTop: 1,
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{step}</p>
                </div>
              ))}
            </div>

            <button
              className="modal-cta"
              onClick={() => setShowThankYou(false)}
              style={{
                width: "100%", padding: "14px", borderRadius: 10,
                border: "none", background: "#2563eb", color: "#fff",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                fontFamily: "inherit", transition: "background 0.2s",
              }}
            >
              Got it, thanks! 👊
            </button>
          </div>
        </div>
      )}

      {/* ── MAIN FORM ── */}
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ textAlign: "center", marginBottom: 28, width: "100%" }}>
          <h1
            className="text-[22px] sm:text-[28px] lg:text-[32px]"
            style={{
              margin: "0 auto 10px",
              fontWeight: 900, color: "#111827",
              letterSpacing: "-0.01em", lineHeight: 1.2,
              maxWidth: 600,
            }}
          >
            Be Among The First To Experience Footactiq
          </h1>
          <p
            className="text-[12px] sm:text-[14px] leading-relaxed"
            style={{ margin: "0 auto", color: "#6B7280", lineHeight: 1.65, maxWidth: 600 }}
          >
            Join early access and start using AI to improve how your team plays, trains, and wins.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
          <input className="field-input mb-4" type="text" value={form.name} onChange={set("name")} placeholder="Full Name" style={inputStyle} />
          <input className="field-input mb-4" type="email" value={form.email} onChange={set("email")} placeholder="Email Address" style={inputStyle} />
          <input className="field-input mb-4" type="text" value={form.club} onChange={set("club")} placeholder="Club / Organisation" style={inputStyle} />
          <input className="field-input mb-4" type="text" value={form.level} onChange={set("level")} placeholder="Coaching Level" style={inputStyle} />

          {error && (
            <p style={{ margin: 0, fontSize: 13, color: "#ef4444", textAlign: "center" }}>{error}</p>
          )}

          <div style={{ display: "flex", justifyContent: "center", marginTop: 6 }}>
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!isValid || loading}
              style={{
                padding: "12px 32px", borderRadius: 8, border: "none",
                background: isValid && !loading ? "#2563eb" : "#93c5fd",
                color: "#fff", fontSize: 14, fontWeight: 700,
                cursor: isValid && !loading ? "pointer" : "not-allowed",
                transition: "background 0.2s", fontFamily: "inherit",
                display: "flex", alignItems: "center", gap: 8,
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: 14, height: 14, borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    animation: "spin 0.7s linear infinite",
                  }} />
                  Securing your spot…
                </>
              ) : "Get early access"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}