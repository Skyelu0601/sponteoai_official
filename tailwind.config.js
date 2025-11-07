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
        primary: {
          blue: '#2563eb',
          green: '#10b981',
          'blue-dark': '#1e40af',
          'green-dark': '#059669',
        },
      },
    },
  },
  plugins: [],
}

