import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0B0B0C", soft: "#141416", line: "#26262A" },
        ivory: { DEFAULT: "#F5F1E8", deep: "#ECE6D8" },
        // Gold is decorative (rules, numerals on ink). `gold-ink` is the
        // AA-compliant variant for the rare text use on ivory.
        gold: { DEFAULT: "#B08D57", ink: "#7A5F32" },
        // `stone` (#8A857C) passes AA on ink only; `stone-dark` for text on ivory.
        stone: { DEFAULT: "#8A857C", dark: "#5C5850" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: { eyebrow: "0.28em", wordmark: "0.32em" },
      transitionTimingFunction: { quart: "cubic-bezier(0.25, 1, 0.5, 1)" },
      maxWidth: { page: "80rem" },
    },
  },
  plugins: [],
};

export default config;
