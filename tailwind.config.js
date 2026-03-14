/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#04b0f2',
          light: '#62CEF7',
          mid: '#5bbad5',
          pale: '#A1E1FA',
          dark: '#0a1628',
          navy: '#1a3a5c',
        },
      },
    },
  },
};
