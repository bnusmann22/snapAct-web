/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF4500',
        'neon-blue': '#046a8bff',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 10px #046a8bff',
      },
    },
  },
  plugins: [],
}

