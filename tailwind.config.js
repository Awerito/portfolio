/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f2f9ff",
          100: "#dff1ff",
          200: "#bfe2ff",
          300: "#96ceff",
          400: "#65b0ff",
          500: "#3c90ff",
          600: "#1f72ff",
          700: "#1559e6",
          800: "#1447b4",
          900: "#163d8c",
        },
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(31, 114, 255, 0.45)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(60, 144, 255, 0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255, 99, 132, 0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.25), transparent 40%)",
      },
    },
  },
  plugins: [],
};
