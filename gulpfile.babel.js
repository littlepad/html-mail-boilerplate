const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');

gulp.task('jade', () => {
  gulp.src('./jade/*.jade')
  .pipe(jade({
    'pretty': true
  }))
  .pipe(gulp.dest('./public/'));
});

gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

