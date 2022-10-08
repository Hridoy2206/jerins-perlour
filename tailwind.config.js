/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#F63E7B",
          "secondary": "#FFC000",
          "accent": "#FFFAE7",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
      // {
      //   dark: {
      //     "primary": "#000000",
      //     "secondary": "#D926A9",
      //     "accent": "#1FB2A6",
      //     "neutral": "#191D24",
      //     "base-100": "#2A303C",
      //     "info": "#3ABFF8",
      //     "success": "#36D399",
      //     "warning": "#FBBD23",
      //     "error": "#F87272",
      //   },
      // },
      "light"
    ],
  },
  plugins: [require("daisyui")],
}