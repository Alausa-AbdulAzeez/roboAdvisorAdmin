/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#005AE0",
        backgroundColor: "#F9FBFE",
        borderColor: "#D4D4D4",
        blackTextColor: "#1E1E1E",
        silverTextColor: "#1E1E1E99",
        textGreenColor: "#00E09D",
        backgroundGreenColor: "#00E09D1A",
        textRedColor: "#E04300",
        backgroundRedColor: "#E043001A",
        silverTextColor: "#1E1E1E99",
      },
    },
  },
  plugins: [],
};

