/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "light-text": "var(--light-text)",
        "dark-gray-text": "var(--dark-gray-text)",
        "gray-text": "var(--gray-text)",
        "divider": "var(--divider)",
        "search-bg": "var(--search-bg)",
        "movie-title": "var(--movie-title)",
        "time-category": "var(--time-category)",
      },
      backgroundImage: {
        "hero-bg": "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url('../images/bg.jpg')",
      },
    },
  },
  plugins: [],
}

