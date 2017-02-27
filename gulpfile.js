const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');

gulp.task('pug', () => {
    gulp
        .src('./src/pug/**/*.pug', { base: './src/pug' })
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('./docs'));
});

gulp.task('stylus', () => {
    gulp
        .src('./src/stylus/**/!(_)*.styl')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./docs/assets'));
});

gulp.task('watch', () => {
    gulp.watch('./src/pug/**/*.pug', ['pug']);
    gulp.watch('./src/stylus/**/*.styl', ['stylus']);
});

gulp.task('dev', ['watch', 'pug', 'stylus']);