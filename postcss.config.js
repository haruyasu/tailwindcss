const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/*.html"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });

module.exports = {
    plugins: [
        tailwindcss,
        cssnano,
        // purgecss,
        autoprefixer
    ]
}
