"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface MessageType {
  role: "user" | "assistant";
  content: string;
  typing?: boolean;
  id?: number;
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
            animation: "bounce 1.2s infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function FormattedText({ text }: { text: string }) {
  const lines = text.split("\n").filter((l) => l.trim() !== "");
  return (
    <div style={{ fontFamily: "'Georgia', serif" }}>
      {lines.map((line, i) => {
        const isHeading = line.trim().toLowerCase() === "recommendation";
        return (
          <p
            key={i}
            style={{
              margin: isHeading ? "14px 0 4px" : "0 0 8px",
              fontSize: isHeading ? 14 : 13.5,
              fontWeight: isHeading ? 700 : 400,
              color: isHeading ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              fontFamily: "'Georgia', serif",
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

function Message({ msg }: { msg: MessageType }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: EASE }}
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: 12,
      }}
    >
      <div
        style={{
          maxWidth: "72%",
          padding: "10px 16px",
          borderRadius: isUser ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
          background: isUser ? "#1d4ed8" : "transparent",
          fontSize: 14,
          lineHeight: 1.65,
          fontFamily: "'Georgia', serif",
        }}
      >
        {msg.typing ? (
          <TypingIndicator />
        ) : isUser ? (
          <span style={{ color: "#fff" }}>{msg.content}</span>
        ) : (
          <FormattedText text={msg.content} />
        )}
      </div>
    </motion.div>
  );
}

export default function AICoach() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const sendMessage = async (text: string = "") => {
    const q = (text || input).trim();
    if (!q || loading) return;
    setInput("");

    const newMessages: MessageType[] = [
      ...messages,
      { role: "user" as const, content: q },
    ];
    setMessages(newMessages);
    setLoading(true);

    const typingId = Date.now();
    setMessages((prev) => [
      ...prev,
      { role: "assistant" as const, content: "", typing: true, id: typingId },
    ]);

    try {
      const apiMessages = newMessages
        .filter((m) => !m.typing)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();
      const reply = data.reply || "I couldn't analyse that. Try rephrasing your question.";

      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId ? { role: "assistant" as const, content: reply } : m
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? { role: "assistant" as const, content: "Analysis failed. Please try again." }
            : m
        )
      );
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#0a1628",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "58px 16px 62px",
        fontFamily: "var(--font-body)",
      }}
    >
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
        .send-btn:hover:not(:disabled) { background: #1d4ed8 !important; }
        .send-btn:active:not(:disabled) { transform: scale(0.94); }
        .chat-input::placeholder { color: rgba(255,255,255,0.28); }
        .chat-input:focus { outline: none; }
      `}</style>

      {/* Header */}
      <motion.div
        style={{ textAlign: "center", marginBottom: 36 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <h1
          className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold"
          style={{ margin: "0 0 10px", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.15 }}
        >
          Ask. Analyse. Improve.
        </h1>
        <p
          className="text-[12px] sm:text-[14px] leading-relaxed"
          style={{ margin: 0, color: "rgba(255,255,255,0.4)", maxWidth: 460, lineHeight: 1.65 }}
        >
          Experience how Footactiq thinks. Ask a tactical question and get AI-powered insights instantly.
        </p>
      </motion.div>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        style={{
          width: "100%",
          maxWidth: 780,
          background: "#0e1c30",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
        }}
      >
        {/* macOS dots toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            gap: 7,
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>

        {/* Scrollable messages */}
        <div
          ref={scrollContainerRef}
          style={{
            overflowY: "auto",
            padding: "24px 28px 16px",
            minHeight: 340,
            maxHeight: 440,
            scrollBehavior: "smooth",
          }}
        >
          <AnimatePresence initial={false}>
            {messages.length === 0 && (
              <motion.p
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: "rgba(255,255,255,0.18)",
                  fontSize: 13,
                  fontStyle: "italic",
                  textAlign: "center",
                  marginTop: 80,
                }}
              >
                Ask any football related question
              </motion.p>
            )}
            {messages.map((msg, i) => (
              <Message key={msg.id ?? i} msg={msg} />
            ))}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          style={{
            margin: "0 16px 16px",
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 12,
            padding: "0 6px 0 16px",
            gap: 8,
          }}
        >
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
            placeholder="Ask any football related question..."
            style={{
              flex: 1, background: "none", border: "none",
              color: "#fff", fontSize: 13.5, padding: "13px 0",
              fontFamily: "inherit",
            }}
          />
          <button
            className="send-btn"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{
              width: 36, height: 36, borderRadius: 8, border: "none",
              background: loading || !input.trim() ? "rgba(59,130,246,0.35)" : "#3b82f6",
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.18s", flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8L8 3M13 8L8 13M13 8H3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}