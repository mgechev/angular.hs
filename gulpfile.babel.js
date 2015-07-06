import gulp from 'gulp';
import haste from 'gulp-haste';
import watch from 'gulp-watch';
import plumber from 'plumber';

gulp.task('haste', () => {
  'use strict';
  return gulp.src('./angular/**/*.hs')
    .pipe(plumber({
      errorHandler: e => {
        console.log(e);
      }
    }))
    .pipe(haste())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  'use strict';
  return watch('./angular/**/*.hs', () => {
    gulp.start('haste');
  });
});
