const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/app.js', 'dist/js')
.sass('src/sass/app.scss', 'dist/css')
.browserSync({
    files: [
        "dist/**/*.*"
    ],
    proxy: {
        target: 'http://127.0.0.1:5500/',
    }
});
