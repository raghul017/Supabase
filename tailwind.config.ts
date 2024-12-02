import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        blob: "blob 7s infinite",
        "glow-line-horizontal": "glow-line-horizontal 3s infinite",
        "glow-line-vertical": "glow-line-vertical 3s infinite",
        "fade-in": "fade-in 1s ease-in-out",
        "grid-flow": "grid-flow 20s linear infinite",
        "beam-fade": "beam-fade 10s ease-in-out infinite",
        laser: "laser 2s linear infinite",
        "shooting-star": "shooting-star 4s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "glow-line-horizontal": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0" },
          "50%": { transform: "translateX(100%)", opacity: "1" },
        },
        "glow-line-vertical": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0" },
          "50%": { transform: "translateY(100%)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-flow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "beam-fade": {
          "0%, 100%": {
            opacity: "0",
            transform: "translateX(-100%) translateY(-100%)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateX(100%) translateY(100%)",
          },
        },
        laser: {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(200vw)" },
        },
        "shooting-star": {
          "0%": {
            transform: "translateX(-100px) translateY(0)",
            opacity: "0",
          },
          "10%, 90%": { opacity: "1" },
          "100%": {
            transform: "translateX(200vw) translateY(100vh)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
