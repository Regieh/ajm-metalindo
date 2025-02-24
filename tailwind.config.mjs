/** @type {import('tailwindcss').Config} */
import colors, { black } from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#272727",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,
      yellow: colors.yellow,
      orange: {
        ...colors.orange,
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
      },
      red: colors.red,
      redP: "#DD2E1D",
      redS: "#E4584A",
      blackS: "#525252",
      zinc: colors.zinc,
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    function ({ addComponents, theme }) {
      addComponents({
        '.default-p': {
          marginLeft: 'auto',           // mx-auto
          marginRight: 'auto',          // mx-auto
          maxWidth: theme('screens.2xl'), // max-w-screen-2xl
          paddingLeft: theme('spacing.4'),  // Default px-4 (16px) for small screens
          paddingRight: theme('spacing.4'), // Default px-4 (16px)
          '@screen sm': {               // sm:px-6 (24px)
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen md': {               // md:px-36 (144px)
            paddingLeft: theme('spacing.36'),
            paddingRight: theme('spacing.36'),
          },
        },
        '.default-ps': {
          marginLeft: 'auto',           // mx-auto
          marginRight: 'auto',          // mx-auto
          maxWidth: theme('screens.2xl'), // max-w-screen-2xl
          paddingLeft: theme('spacing.4'),  // Default px-4 (16px) for small screens
          paddingRight: theme('spacing.4'), // Default px-4 (16px)
          '@screen sm': {               // sm:px-6 (24px)
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen md': {               // md:px-36 (144px)
            paddingLeft: theme('spacing.31'),
            paddingRight: theme('spacing.31'),
          },
        },
      });      
    },
  ],
};
