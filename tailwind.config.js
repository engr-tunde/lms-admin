/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "hero-pattern": "url('/img/hero-pattern.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        merseLightBorder: "#ffffff1f",
        merseText: "#000",
        merseLightText: "#8B8B8B",
        merseBG: "#fff",
        merseBorder: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
