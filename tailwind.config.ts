import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', "[class~='dark']"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          mono: ['"Roboto Mono"', 'SFMono-Regular', 'monospace'],
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
