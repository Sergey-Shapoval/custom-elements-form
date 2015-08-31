'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch');

//Tasks
gulp.task('styles', function () {
    gulp.src('src/styles/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dest/'));
});

gulp.task('watch', function(){
    watch('src/styles/**/*.scss', function() {
        gulp.start('styles');
    });
});

gulp.task('default', ['styles', 'watch']);
