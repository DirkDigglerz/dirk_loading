/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary : "#505050",
      secondary: "#F3F3F3",
      white: "#FFFFFF",
      black: "#000000",
      blackblur: "#000000b3",
    }
  },
  plugins: [],
}

