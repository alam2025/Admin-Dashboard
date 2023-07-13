/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1223px",
        containerSmall: "1024px",
        containerxs: "768px",
      },

      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1640px",
        "3xl": "1800px",
        
      },


      fontFamily: {
        Cuprum: ["Cuprum", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        bodyColor: "#F1F3F4",
        // bodyBlue: "#3657cd",
      },
      backgroundImage: {
        // background: "url('./src/assets/footer/footer.svg')",
      },
    },
  },
  plugins: [],
};
