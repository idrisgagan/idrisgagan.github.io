import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Idris Gagan — Senior Product Leader · AI / GenAI · Enterprise SaaS",
  description:
    "Senior product leader with 20+ years building enterprise SaaS platforms. Hands-on builder of LLM, RAG, and multi-agent products in production.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Idris Gagan — Senior Product Leader",
    description:
      "AI · GenAI · Enterprise SaaS · Platform Strategy. 20+ years shipping products that turn around stalled teams and unlock new markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="bg-ink-950 text-ink-100 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
