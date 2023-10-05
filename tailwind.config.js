/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ['"Roboto Mono"', "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
