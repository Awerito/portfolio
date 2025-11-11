/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fff0f8",
          100: "#ffd6ec",
          200: "#ffb0dc",
          300: "#ff7cc4",
          400: "#ff4ba8",
          500: "#ff1f8d",
          600: "#db0d73",
          700: "#b40a5d",
          800: "#8d0847",
          900: "#660531",
          950: "#42021f",
        },
      },
      boxShadow: {
        glow:
          "0 20px 45px -15px rgba(255, 79, 168, 0.45), 0 30px 80px -40px rgba(68, 8, 71, 0.5)",
      },
      backgroundImage: {
        lightMesh:
          "radial-gradient(circle at 10% 20%, rgba(255, 124, 196, 0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255, 209, 237, 0.6), transparent 40%), radial-gradient(circle at 50% 75%, rgba(255, 31, 141, 0.25), transparent 40%)",
        darkMesh:
          "radial-gradient(circle at 20% 20%, rgba(255, 79, 168, 0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(107, 33, 168, 0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(217, 70, 239, 0.25), transparent 40%)",
      },
    },
  },
  plugins: [],
};
