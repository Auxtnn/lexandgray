/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "gunmetal-blue": "#202D48",
        "desert-sand": "#B2906A",
        "dark-gray": "#2A2A2A",

        // Secondary colors
        "gentle-blue": "#6284A5",
        "ash-gray": "#A59F8A",
        "sky-mist": "#D2E3ED",
        "warm-sand": "#E6DCCF",
        "deep-sea-blue": "#30415E",
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero-background.jpg')",
        "testimonial-bg": "url('/images/testimonial-background.jpg')",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        custom: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
