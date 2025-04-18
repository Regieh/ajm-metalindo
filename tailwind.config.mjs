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
      orange: colors.orange,
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },
      keyframes: {
        subtleMove: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-10px, -5px)' },
          '50%': { transform: 'translate(0, -10px)' },
          '75%': { transform: 'translate(10px, -5px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        subtleMove: 'subtleMove 6s ease-in-out infinite',
      },
      screens: {
        "2md": "850px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
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
          marginLeft: 'auto',           // Centers the container horizontally (mx-auto)
          marginRight: 'auto',          // Centers the container horizontally (mx-auto)
          maxWidth: theme('screens.2xl'), // Sets max-width to the 2xl breakpoint (e.g., 1536px)
          paddingLeft: theme('spacing.4'),  // 16px padding on small screens
          paddingRight: theme('spacing.4'), // 16px padding on small screens
          '@screen sm': {               // At sm breakpoint (e.g., 640px)
            paddingLeft: theme('spacing.6'),  // 24px padding
            paddingRight: theme('spacing.6'), // 24px padding
          },
          '@screen md': {               // At md breakpoint (e.g., 768px)
            paddingLeft: theme('spacing.20'),  // 144px padding
            paddingRight: theme('spacing.20'), // 144px padding
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
        '.default-2p': {
          marginLeft: 'auto',           // mx-auto
          marginRight: 'auto',          // mx-auto
          maxWidth: theme('screens.4xl'), // max-w-screen-2xl
          paddingLeft: theme('spacing.8'),  // Default px-4 (16px) for small screens
          paddingRight: theme('spacing.8'), // Default px-4 (16px)
          '@screen sm': {               // sm:px-6 (24px)
            paddingLeft: theme('spacing.12'),
            paddingRight: theme('spacing.12'),
          },
          '@screen md': {               // md:px-36 (144px)
            paddingLeft: theme('spacing.72'),
            paddingRight: theme('spacing.72'),
          },
        },
      });      
    },
  ],
};
