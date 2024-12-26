/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.{html,js}',  // Include all HTML files inside the templates directory
    './static/js/**/*.js',  // Optionally include JavaScript files for class names
    './**/templates/**/*.{html,js}'  // Also check for any templates folder in subdirectories
  ],
  theme: {
    extend: {
      colors:{
        'primary':'red',
        'secondary':'#ff5555',
        'x':'#786666'
      }
    },
  },
  plugins: [],
}

