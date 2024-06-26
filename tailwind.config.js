/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        activeInputBlueBoxShadow: "0px 0px 6px 0px #005AE099",
        accountDropShadow: "0px 4px 16px 0px #00000026",
      },
      dropShadow: {
        accountDropShadow: "0px 4px 16px 0px #00000026",
      },
      colors: {
        mainBlue: "#005AE0",
        backgroundColor: "#F9FBFE",
        borderColor: "#D4D4D4",
        blackTextColor: "#1E1E1E",
        silverTextColor: "#1E1E1E99",
        textGreenColor: "#00E09D",
        textYellowColor: "#E09400",
        backgroundGreenColor: "#00E09D1A",
        backgroundYellowColor: "#E094001A",
        backgroundBlueColor: "#005AE01A",
        textRedColor: "#E04300",
        backgroundRedColor: "#E043001A",
        silverTextColor: "#1E1E1E99",
      },
    },
  },
  plugins: [],
};
