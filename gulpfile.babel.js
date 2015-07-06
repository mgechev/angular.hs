import gulp from 'gulp';
import haste from 'gulp-haste';
import watch from 'gulp-watch';

gulp.task('build', () => {
  'use strict';
  return gulp.src('./angular/**/*.hs')
    .pipe(haste())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  'use strict';
  return watch('./angular/**/*.hs', () => {
    return gulp.start('build');
  });
});

