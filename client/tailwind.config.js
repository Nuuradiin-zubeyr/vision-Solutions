/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#05082A", 900: "#0A1145", 800: "#111A56" },
        royal: { 700: "#123A8C", 500: "#1E63C9" },
        teal: { DEFAULT: "#1E86C4" },
        lime: { DEFAULT: "#8DC63F", bright: "#A6E24E" },
        ink: { DEFAULT: "#14235F" },
        slate2: { DEFAULT: "#5B6478" },
        paper: { DEFAULT: "#F6F8FB" },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
