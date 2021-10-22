/*
  autoprefixer - https://github.com/postcss/autoprefixer
  cssnano - https://github.com/hail2u/node-css-mqpacker
  css-mqpacker - HAS BEEN REMOVED! Do not use!
*/

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  // plugins: [
  //   // require("postcss-import"),
  //   // require("tailwindcss"),
  //   // require('autoprefixer'),
  //   // require('cssnano')({
  //   //   preset: [
  //   //     'default',
  //   //     {
  //   //       discardComments: {
  //   //         removeAll: true
  //   //       }
  //   //     }
  //   //   ]
  //   // })
  // ],
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}
