//noinspection JSAnnotator
let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.react('resources/assets/js/app.js', 'public/js')
//     .sass('resources/assets/sass/app.scss', 'public/css');

// mix.js('node_modules/jquery/dist/jquery.min.js', 'public/vendor/js')
//     .js('node_modules/popper.js/dist/popper.min.js', 'public/vendor/js')
//     .js('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/vendor/js')
//     .js('node_modules/select2/dist/js/select2.min.js', 'public/vendor/js')
//     .react('resources/assets/js/app.js', 'public/js')
//     .sass('resources/assets/sass/app.scss', 'public/css');

mix .react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
