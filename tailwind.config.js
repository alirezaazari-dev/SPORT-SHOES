/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.75s ease-in-out",
        slideUp: "slideUp 0.75s ease-in-out",
        slideUpFilter: "slideUpFilter 0.5s ease-in-out",
        slideDownFilter: "slideDownFilter 0.5s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUpFilter: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDownFilter: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-40px)" },
        },
      },
      fontSize: {
        DEFAULT: ["1rem", "1.5rem"],
      },
      colors: {
        bnfsh: {
          100: "#EEEEEE",
          300: "#D4BEE4",
          600: "#9B7EBD",
          900: "#3B1E54",
        },
      },
      fontFamily: {
        Shabnam: "Shabnam",
        ShabnamLight: "Shabnam Light",
        ShabnamBold: "Shabnam Bold",
      },
      boxShadow: {
        normal: "0px 1px 10px 0px #0000000D",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "home-desktop": "url('../images/headerBgDesktop.webp')",
        "home-mobile": "url('../images/headerBgMobile.webp')",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          // lg: "0.625rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        50: "12.5rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
