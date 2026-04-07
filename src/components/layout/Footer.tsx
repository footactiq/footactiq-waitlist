"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LINKS = ["How It Works", "Features", "AI Coach"];
const LEGAL = ["Privacy policy", "Terms & condition"];

const SOCIALS = [
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const socialVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
};

export default function Footer() {
  return (
    <footer
      style={{ background: "#0A192F", fontFamily: "'Trebuchet MS', sans-serif" }}
      className="px-6 sm:px-10 lg:px-[60px] py-12"
    >
      <div className="max-w-[1100px] mx-auto">

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-12 lg:gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Brand */}
          <motion.div variants={colVariants} className="col-span-2 sm:col-span-1">
            <div style={{
              fontSize: 22, fontWeight: 900, color: "#ffffff",
              letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
            }}>
              FOOTACTIQ
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              ©2026. All Rights Reserved
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={colVariants}>
            <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#ffffff" }}>
              Links
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={colVariants}>
            <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#ffffff" }}>
              Legal
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {LEGAL.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={socialVariants}
            className="col-span-2 sm:col-span-1 flex sm:flex-col flex-row flex-wrap gap-3 sm:items-center items-start"
          >
            {SOCIALS.map(({ label, icon }) => (
              <motion.a
                key={label}
                variants={iconVariants}
                href="#"
                aria-label={label}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                style={{
                  width: 32, height: 32, borderRadius: 6,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", textDecoration: "none",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-10 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            Built for coaches who want to win smarter.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}