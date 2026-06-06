/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#F5F5F5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
