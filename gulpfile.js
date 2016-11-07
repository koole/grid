var gulp = require('gulp'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
  gulp.src('sass/grid.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass']);