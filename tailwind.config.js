/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      sans: ['system-ui', 'sans-serif'],
    },
      },
  },
  plugins: [],
};
