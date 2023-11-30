/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "bounce-slow": "bounce 10s infinite",
      },
      backgroundImage: {
        site: 'url("/images/bg.jpg")',
        site2: 'url("/images/bg2.jpg")',
      },
    },
  },
  plugins: [],
};
