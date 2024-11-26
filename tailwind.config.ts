import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        melodrama: ["Melodrama", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
      black: "#251D18",
      green: "#51994B",
      white: "#F5F1EC",
      },
    },
  },
  plugins: [],
} satisfies Config;
