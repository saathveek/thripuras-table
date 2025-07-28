/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // satisfy: ['Satisfy', 'cursive'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        arapey: ['"Arapey"', 'serif'],
        // ...other fonts if any
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem', // 8px

      },
      colors: {
        primary: "#C1440E",      // Mud orange
        // secondary: "#eddf93",    // Cream
        // accent: "#1f213b",       // Purple
        background: "#F1D8B2",   // Brown
        // background_muted: "#38455c",  // Navy muted
        text: "#2B2B2B",          // Cream orange
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
}

