import gulp from 'gulp';
import jade from 'gulp-jade';
import sass from 'gulp-sass';
import inlineCss from 'gulp-inline-css';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

gulp.task('jade', () => {
  return gulp.src('./resources/jade/*.jade')
    .pipe(jade({
      'pretty': true
    }))
    .pipe(inlineCss())
    .pipe(gulp.dest('./html-mail/html/'));
});

gulp.task('sass', () => {
  return gulp.src('./resources/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./.tmp/css'));
});

gulp.task('server', () => {
  browserSync.init({
    server: ['./html-mail/html/', './html-mail/media/'],
    files: ['./html-mail/html/**/*.*'],
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
  gulp.watch('./resources/scss/**/*.scss', ['build']);
  gulp.watch('./resources/jade/**/*.jade', ['jade']);
});

gulp.task('build', () => {
  runSequence('sass', 'jade');
});

gulp.task('default', () => {
  runSequence('build', 'server', 'watch')
});
