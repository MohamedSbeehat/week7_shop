/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        brand: "0 15px 40px rgba(16, 185, 129, 0.18)",
        "brand-hover": "0 15px 30px rgba(16, 185, 129, 0.25)",
        "brand-focus": "0 0 0 5px rgba(16, 185, 129, 0.15)",
      },
      keyframes: {
        fade: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade 0.8s ease",
      },
    },
  },
  plugins: [],
};
