/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '5': '5 5 0%'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
    colors: {
      'bordeaux': '#3D0D12',
      'richblack': '#011124',
      'light': '#F4FFFD',
      'orange': '#F9DC5C',
    },
  },
  plugins: [],
}
    