
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",

    },

    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'bmi-image': "url('/369 Fitness/personaltraining.jpg')",
        'hero-bg': "url('/assets/gym/hero-bg.jpg')",

      },
      colors: {
        primary: "#C8102E",
        // primary:"#B45309",
        // primary:"#D97706",
        // secondary: "#2B2D42",
        // secondary : "#1F2937",
        secondary:"#374151",
        background: "#0D0D0D"
      },
      fontFamily: {
        gemsbuck: ['GemsbuckPro'],
        rodin: ['Rodin'],
      },
      keyframes: {
        'infinite-zoom': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'infinite-zoom': 'infinite-zoom 6s ease-in-out infinite',
      },

    },

  },
  plugins: [],
}


