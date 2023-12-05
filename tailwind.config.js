/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#08415A',
        secondary: '#B4DDEA',
        accent: '#FFC39A',
        done: '#15BC3A',
        incomplete: '#D63636',
        dimissed: '#707070',
        dimissedOver: '#BCBCBC',
        overlay: 'rgba(236, 236, 236, 0.7)',
        overlayButton: 'rgba(112, 112, 112, 1)',
        stroke: '#ECECEC',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
