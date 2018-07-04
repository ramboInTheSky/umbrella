const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', function () {
  return gulp.src('src/**/*.{js,jsx}')
      .pipe(babel())
      .pipe(gulp.dest('dist'));
});
