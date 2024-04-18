import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto"].concat(defaultTheme.fontFamily.mono),
      },
      colors: {
        dark: "#1E1E1E",
        light: "#F3F3F3",
        "heliner-orange": "#F39800",
      },
    },
  },
  plugins: [],
};
