/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          xl: "1200px",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1230px",
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        'h1': ['2.6rem', '1.5'],
        'h2': ['1.8rem', '1.5'],
        'h3': ['1.5rem', '1.5'],
        'h4': ['1.25rem', '1.5'],
        'h5': ['1.rem', '1.7']
      },
      colors: {
        'main-300': '#080e26',
        'main-200': '#0c163c',
        'main-100': '#101e51',

        'second-400': '#e3b331',
        'second-300': '#f0bf38',
        'second-200': '#f2c854',
        'second-100': '#f4d171',

        'alt-300': '#52a0ff',
        'alt-200': '#66abff',
        'alt-100': '#7ab6ff',

        'light-300': '#f0f0e5',
      },
      backgroundImage: {
        // 'gradient-diagonal': 'linear-gradient(120deg, var(--tw-gradient-from) 10%, rgba(8, 14, 38, 0.7) 35%, var(--tw-gradient-stops) 75%)'
        'gradient-diagonal': 'linear-gradient(120deg, var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}
