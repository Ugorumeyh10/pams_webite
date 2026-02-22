import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f5',
          100: '#f5f1e8',
          200: '#ebe3d1',
          300: '#d9c9a8',
          400: '#c4a97d',
          500: '#b8956a',
          600: '#a8825a',
          700: '#8b6a4b',
          800: '#735840',
          900: '#5f4a37',
        },
      },
    },
  },
  plugins: [],
};
export default config;
