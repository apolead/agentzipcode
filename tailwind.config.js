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
        // ApoLead brand colors from template
        'apo-cyan': '#20d4d8',
        'apo-purple': '#43378b',
        'apo-light-purple': '#6c5ce7',
        'apo-hover-purple': '#362d73',
        'apo-secondary-hover': '#5a4dcf',
        // Text colors
        'apo-text-dark': '#2d3436',
        'apo-text-medium': '#636e72',
        'apo-text-light': '#666',
        // Background colors
        'apo-bg': '#f8f9fa',
        'apo-white': '#ffffff',
      },
      fontFamily: {
        'apo': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}