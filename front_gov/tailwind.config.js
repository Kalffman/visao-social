/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-b-to-g": "linear-gradient(90deg, #0A2A79 50%, #00721C 100%);",
        "smooth-white-top": "linear-gradient(to top, transparent 30%,#f5f5f5);",
        "smooth-white-bottom":
          "linear-gradient(to top, #f5f5f5 30%, transparent);",
      },
      colors: {
        primary: "#021C2E",
        secondary: "#F5F5F5",
        button: "#0A2A79",
      },
    },
  },
  plugins: [],
};
