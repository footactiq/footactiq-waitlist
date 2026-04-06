import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Footactiq — Analyze Matches Like A Pro",
  description:
    "Upload match footage and get instant tactical insights, player metrics, and AI-driven recommendations. Built for local and semi-professional football clubs.",
  keywords: ["football analytics", "tactical analysis", "AI coach", "match analysis"],
  openGraph: {
    title: "Footactiq — AI Tactical Football Analysis",
    description: "Analyze matches like a pro, without analysts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
