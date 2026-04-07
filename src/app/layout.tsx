import type { Metadata } from "next";
import "./globals.css";
import { SignupProvider } from "@/context/SignupContext"; // adjust path as needed
import SignupModal from "@/components/SignupModal";       // adjust path as needed

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
      <body className="antialiased">
        <SignupProvider>
          {children}
          {/* SignupModal is mounted once here so any button on any page can trigger it */}
          <SignupModal />
        </SignupProvider>
      </body>
    </html>
  );
}