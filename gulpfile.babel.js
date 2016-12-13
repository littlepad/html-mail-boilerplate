const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const inlineCss = require('gulp-inline-css');

gulp.task('jade', () => {
  gulp.src('./jade/*.jade')
  .pipe(jade({
    'pretty': true
  }))
  .pipe(inlineCss())
  .pipe(gulp.dest('./publish/'));
});

gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.css', ['sass']);
  gulp.watch('./jade/**/*.jade', ['jade']);
});

gulp.task('default', ['watch']);
