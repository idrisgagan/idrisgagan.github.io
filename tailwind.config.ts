import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0b10",
          850: "#0e1018",
          800: "#12141d",
          700: "#1a1d28",
          600: "#262a38",
          500: "#3a3f51",
          400: "#5a6075",
          300: "#8a93ad",
          200: "#b7bdd0",
          100: "#dbdfeb",
          50: "#f3f5fb",
        },
        accent: {
          DEFAULT: "#7c5cff",
          glow: "#a586ff",
          deep: "#4a2dd0",
        },
        signal: {
          cyan: "#00e5ff",
          lime: "#c8ff4a",
          amber: "#ffb547",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,92,255,0.25), transparent)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 40s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
