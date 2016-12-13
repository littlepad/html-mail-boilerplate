const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const inlineCss = require('gulp-inline-css');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

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
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('server', () => {
  browserSync.init({
    server: './publish/',
    notify: false
  });
});

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./jade/**/*.jade', ['jade']);
  gulp.watch('./publish/*.html').on('change', reload);
});

gulp.task('default', ['server', 'watch']);
