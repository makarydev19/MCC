import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

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
        footerbg: '#4a0505',
        bgcolor: '#f8f7f7',
        btncolor: '#a01414',
        primary: "#c60f0f",
        secondary: "#4a0505",
        tertiary: {
          dark: "#ff3737",
          light: "#0c0c0c",
        },
      },
      fontFamily: {
        Koulen: ["var(--font-oppins)", ...fontFamily.sans],
      },
    },
  },
};
export default config;

