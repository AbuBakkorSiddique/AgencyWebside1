/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        upDownWithOrigin: {
          '0%, 100%': { transform: 'translateY(0)', transformOrigin: 'bottom' },
          '50%': { transform: 'translateY(-30px)', transformOrigin: 'top' },
        },
      },
      animation: {
        upDownWithOrigin: 'upDownWithOrigin 3s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}