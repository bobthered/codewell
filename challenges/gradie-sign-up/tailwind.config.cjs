const colors = require('tailwindcss/colors');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        error: colors.red,
        gray: colors.trueGray,
        primary: '#013243',
        success: colors.emerald
      }
    }
  },

  plugins: []
};

module.exports = config;
