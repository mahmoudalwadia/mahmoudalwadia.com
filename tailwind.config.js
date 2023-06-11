/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lotion: '#FAFAFA',
        'black-chinese': '#191919',
        'dark-silver': '#6C6C75',
        'quick-silver': '#A0A0A6',
        'cookies-and-cream': '#E9DAAC',
        'slate-blue': '#6166DC',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
};
