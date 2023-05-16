/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
      backgroundImage: {
        "banner-bg": "url('/public/background.avif')",
      },
    },
    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      black: "#000",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      indigo: { 600: "rgb(79, 70, 229)" },
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
