export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        // 🔹 Very small screens (200px–499px)
        "custom-xs": { min: "200px", max: "499px" },

        // 🔹 Very small mobile
        "xs-center": { min: "300px", max: "592px" },

        // 🔹 Small mobile (optional overlap fix)
        "small-xs": { min: "320px", max: "566px" },

        // 🔹 Tablets
        "tab-md": { min: "567px", max: "767px" },

        // 🔹 Medium centered layout
        "center-md": { min: "593px", max: "793px" },

        // 🔹 Slider single-card layout
        "slider-md": { min: "600px", max: "880px" },

        // 🔹 Large tablet to small laptop
        "mid-lg": { min: "768px", max: "1023px" },

        // 🔹 Single-card layout (for 500px–799px)
        "custom-sm": { min: "500px", max: "799px" },

        // 🔹 Single-card layout (for 800px–1080px)
        "custom-md": { min: "800px", max: "1080px" },

        // 🔹 Custom large screens
        "custom-lg": { min: "1024px", max: "1130px" },

        // 🔹 Custom extra large screens
        "custom-xl": { min: "1131px", max: "1169px" },

        // 🔹 ✅ New breakpoint for small form view (320px–520px)
        "form-xs": { min: "320px", max: "520px" },

        // 🔹 ✅ New breakpoint (320px–420px) — for removing px-24
        "mobile-sm": { min: "320px", max: "520px" },
      },
    },
  },
  plugins: [],
};
