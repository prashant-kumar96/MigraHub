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
        LightGray: "#e2e8f0",
        Gray: "#64748b",
        DarkGray: "#111827"
      },
    },
  },
  plugins: [],
};
export default config;
