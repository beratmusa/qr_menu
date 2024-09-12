/** @type {import('tailwindcss').Config} */
module.exports = {
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
        color_1: "#FFDB00",
        color_2: "#CA0000",
        color_3: "#FAFAFA",
        color_4: "#1D1D1F",
      },
      fontFamily: {
        salsa: ["Salsa", "cursive"],
      },
    },
  },
  plugins: [],
};
