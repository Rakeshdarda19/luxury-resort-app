/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // NOTE: Replace with exact Figma values once exported.
        canvas: "#F6F1E7",
        ink: "#1B1B1B",
        muted: "#6B6B6B",
        forest: "#2F4A44",
        forest2: "#395853",
        stroke: "#E6E0D6",
        card: "#FFFFFF",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};

