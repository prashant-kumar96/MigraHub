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
        LightGray: "#f1f5f9",
        Gray: "#94a3b8",
        DarkGray: "#0f172a"
      },
    },
  },
  plugins: [],
};
export default config;
