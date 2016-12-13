const gulp = require('gulp');
const jade = require('gulp-jade');

gulp.task('jade', () => {
  gulp.src('./jade/*.jade')
  .pipe(jade({
    'pretty': true
  }))
  .pipe(gulp.dest('./public/'))
});

