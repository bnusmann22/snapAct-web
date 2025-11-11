/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF4500',
        'neon-blue': '#046a8bff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Momo Trust Display', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'neon-glow': '0 0 10px #046a8bff',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '24px',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}
