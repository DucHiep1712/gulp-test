const {src, dest, watch, series} = require('gulp');
const gfi = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));

function buildHTML() {
    return src('./app/*.html')
        .pipe(gfi())
        .pipe(dest('./build'));
}

function buildCSS() {
    return src('./app/sass/*.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function watchTasks() {
    watch('./app/*.html', buildHTML);
    watch('./app/sass/*.scss', buildCSS);
}

exports.default = series(buildHTML, buildCSS, watchTasks);