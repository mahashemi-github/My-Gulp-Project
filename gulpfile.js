const { src, dest, watch, parallel, series } = require('gulp');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')

function copyHtml() {
    return src('src/*.html').pipe(dest('dest'));
}

function jsTask() {
    return src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dest/js'))
}

function cssTask() {
    return src('src/stylesheets/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dest/stylesheets'))
}

function minifyImages(cb) {
    const { pipeline } = require('stream');
    return import('gulp-imagemin')
        .then(module => {
            const imagemin = module.default;
            pipeline(
                gulp.src('src/images/**/*'),
                imagemin(),
                gulp.dest('dest/images'),
                cb
            );
        })
        .catch(cb);
}

function watchTask() {
    watch(['src/js/**/*.js', 'src/stylesheets/**/*.css'], { interval: 1000 }, parallel(cssTask, jsTask));
}

// exports.minifyImages = minifyImages;
// exports.default = minifyImages;
exports.default = series(parallel(copyHtml, cssTask, jsTask, minifyImages), watchTask);

