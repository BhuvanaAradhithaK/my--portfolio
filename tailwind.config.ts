import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gothic: {
          bg: "#050507",
          panel: "#0e0e13",
          card: "#121218",
          cardHover: "#181822",
          border: "#23232e",
          borderGlow: "#4a1525",
          red: "#991b1b",
          crimson: "#dc2626",
          silver: "#d4d4dc",
          muted: "#8b8b9e",
          accent: "#7f1d1d",
          accentHover: "#991b1b",
        },
      },
      fontFamily: {
        gothic: ["Cinzel", "Georgia", "serif"],
        display: ["Cinzel Decorative", "Cinzel", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      boxShadow: {
        'gothic-sm': '0 2px 10px rgba(0, 0, 0, 0.7), 0 0 10px rgba(153, 27, 27, 0.1)',
        'gothic-card': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(153, 27, 27, 0.15)',
        'gothic-card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.9), 0 0 25px rgba(220, 38, 38, 0.25)',
        'gothic-glow': '0 0 20px rgba(185, 28, 28, 0.35)',
        'gothic-glow-strong': '0 0 35px rgba(220, 38, 38, 0.5)',
      },
      backgroundImage: {
        'gothic-gradient': 'linear-gradient(180deg, #050507 0%, #0a0a10 50%, #050507 100%)',
        'crimson-radial': 'radial-gradient(circle at 50% 30%, rgba(153, 27, 27, 0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
export default config;
