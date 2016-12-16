const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const inlineCss = require('gulp-inline-css');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');

gulp.task('jade', () => {
  return gulp.src('./jade/*.jade')
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
    server: ['./publish/', './media/'],
    files: ['./publish/**/*.*'],
    notify: false,
    rewriteRules: [
      {
        match: /https:\/\/example\.com/g,
        replace: ''
      }
    ]
  });
});

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', ['build']);
  gulp.watch('./jade/**/*.jade', ['jade']);
});

gulp.task('build', () => {
  runSequence('sass', 'jade');
});

gulp.task('default', ['server', 'watch']);
