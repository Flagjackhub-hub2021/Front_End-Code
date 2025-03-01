const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix
    .js('resources/js/app.js', 'public/js')
    .css("resources/css/app.css", "public/css", [
        tailwindcss,
    ])
    .browserSync({
        server: 'public',
        files: ['public/**/*.html', 'public/**/*.css', 'public/**/*.js']
    })
    .disableNotifications()