import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#171717",
        muted: "#777777",
        line: "#EAEAE6",
        accent: "#2F5D4F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        column: "40rem",
        wide: "46rem",
      },
      letterSpacing: {
        label: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
