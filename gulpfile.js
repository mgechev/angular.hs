var gulp = require('gulp');
var haste = require('gulp-haste');
var watch = require('gulp-watch');
var plumber = require('plumber');

gulp.task('haste', function () {
  'use strict';
  return gulp.src('./angular/**/*.hs')
    .pipe(plumber({
      errorHandler: function (e) {
        console.log(e);
      }
    }))
    .pipe(haste())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  'use strict';
  return watch('./angular/**/*.hs', function () {
    gulp.start('haste');
  });
});
