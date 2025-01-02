/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        green: '0 4px 10px rgba(0, 128, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

