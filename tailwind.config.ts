import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
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
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       blockquote: {
      //         fontStyle: "normal",
      //         borderLeft: "4px solid #22c55e", // green-500
      //         paddingLeft: "1rem",
      //         color: "#333",
      //       },
      //       "pre code": {
      //         // backgroundColor: "#f1f5f9", // gray-100
      //         // color: "#1e293b", // slate-800
      //         // borderRadius: "0.375rem", // rounded-md
      //         // padding: "0.25rem 0.5rem",
      //       },
      //     },
      //   },
      //   invert: {
      //     css: {
      //       blockquote: {
      //         borderLeftColor: "#22c55e", // dark 모드용도 지정 가능
      //         color: "#ddd",
      //       },
      //       "pre code": {
      //         backgroundColor: "#1e293b",
      //         color: "#f8fafc",
      //       },
      //     },
      //   },
      // },
    },
  },
  plugins: [typography, lineClamp],
};
export default config;
