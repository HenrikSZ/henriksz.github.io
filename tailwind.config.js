/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{html,js,pug}"],
    extract: {
      pug: (content) => {
        let matches = content.match(/[^<>"'`\s]*/g);
        matches = matches.map(match => {
          if (match.startsWith("scroll:") || match.startsWith("-scroll:")) {
            return match.substring(match.indexOf(":") + 1);
          } else {
            return match;
          }
        });
        return matches;
      },
    }
  },
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
      colors: {
        'bordeaux': '#3D0D12',
        'richblack': '#011124',
        'light': '#F4FFFD',
        'myorange': '#F9DC5C',
      },
    },
  },
  plugins: [],
}
    