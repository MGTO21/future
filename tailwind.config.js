/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#050816",
          secondary: "#aaa6c3",
          tertiary: "#151030",
        },
        neon: {
          blue: "#00f3ff",
          purple: "#7b2ff7",
          pink: "#ff00e5",
          cyan: "#0ea5e9",
        }
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        neon: "0 0 10px #7b2ff7, 0 0 40px #7b2ff7",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
