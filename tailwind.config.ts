/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-text': 'var(--primary-text)',
        'primary-bg': 'var(--primary-bg)',
      },
    },
  },
};
