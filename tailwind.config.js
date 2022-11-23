/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        computerZone: {

          primary: "#1AE4FF",

          secondary: "#5066D8",

          accent: "#3A4256",

          neutral: "#3A4256",

          "base-100": "#EFF2F5",

          info: "#2C54D8",

          success: "#4FD8B6",

          warning: "#C49703",

          error: "#EC748A",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
