/* eslint-disable import/no-extraneous-dependencies */

// const Form = require('@tailwindcss/forms');
// const daisyui = require('daisyui');
// const tailwindScrollbar = require('tailwind-scrollbar')({ nocompatible: true });

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      maxWidth: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      minHeight: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
        '95v': '95vh',
        '90v': '90vh',
        '50v': '50vh',
      },
      screens: {
        500: '500px',
        400: '400px',
        300: '300px',
        1750: '1750px',
      },
      colors: {
        warning: '#FF0000',
        info: '#183847',
        primary: '#3DB1C8',
        secondary: '#257180',
        success: '#00ff00',
        accent: '#4e4e4c',
        error: '#ffffff',
        ghost: '#FF0000',
        neutral: '#212121',
        'base-100': '#ffffff',
        'base-200': '#ECE8DD',
      },
    },
  },
  daisyui: {
    themes: [
      {
        remoStart: {
          warning: '#FF0000',
          info: '#183847',
          primary: '#3DB1C8',
          secondary: '#257180',
          success: '#00ff00',
          accent: '#4e4e4c',
          error: '#ffffff',
          ghost: '#FF0000',
          neutral: '#212121',
          'base-100': '#ffffff',
          'base-200': '#ECE8DD',
        },
      },
      // {
      //     dark: {
      //         info: '#ECE8DD',
      //         primary: '#183847',
      //         secondary: '#13D1FF',
      //         accent: '#ddd',
      //         error: '#215066',
      //         neutral: '#212121',
      //         'base-100': '#000000',
      //         'base-200': '#215066',
      //     },
      // },
    ],
  },
  // plugins: [daisyui, Form, tailwindScrollbar],
};
