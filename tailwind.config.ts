import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkGray: "#111827",
        LightGray: "#d1d5db",
        Gray: "#6b7280",
        DarkBlue: "#172554",
        LightBlue: "#bae6fd",
        Blue: "#38bdf8"
      },
    },
  },
  plugins: [],
};
export default config;
