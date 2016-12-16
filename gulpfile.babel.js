import gulp from 'gulp';
import jade from 'gulp-jade';
import sass from 'gulp-sass';
import inlineCss from 'gulp-inline-css';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

const PATH = {
  jade: './resources/jade/',
  scss: './resources/scss/',
  css: './.tmp/css/',
  html: './html-mail/html',
  media: './html-mail/media/'
};

gulp.task('jade', () => {
  return gulp.src(`${PATH.jade}**/*.jade`)
    .pipe(jade({
      'pretty': true
    }))
    .pipe(inlineCss())
    .pipe(gulp.dest(PATH.html));
});

gulp.task('sass', () => {
  return gulp.src(`${PATH.scss}**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(PATH.css));
});

gulp.task('server', () => {
  browserSync.init({
    server: [PATH.html, PATH.media],
    files: [`${PATH.html}**/*.*`],
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
  gulp.watch(`${PATH.scss}**/*.scss`, ['build']);
  gulp.watch(`${PATH.jade}**/*.jade`, ['jade']);
});

gulp.task('build', () => {
  runSequence('sass', 'jade');
});

gulp.task('default', () => {
  runSequence('build', 'server', 'watch')
});
