import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-noto)"],
      },
      screens: {
        sm: "400px",
        md: "700px",
      },
    },
  },
  plugins: [lineClamp, require("@tailwindcss/typography")],
};
export default config;
