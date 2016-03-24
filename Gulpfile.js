var os = require('os'),
    gulp = require('gulp'),
		util = require('gulp-util'),
		del = require('del'),
    open = require('gulp-open'),
    html = require('gulp-minify-html'),
    css = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('open', function(){
  gulp.src('./dist/index.html')
    .pipe(open({app: 'safari'}));
  gulp.src('./src/index.html')
    .pipe(open({app: 'sublime text'}));
});

gulp.task('html', function() {
  var opts = {empty: true};
  gulp.src('src/*.html')
  	.pipe(html(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
	gulp.src('src/scss/*.scss')
	  .pipe(sass({onError: function(e) { console.log(e); } }))
	  .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css/'))
	  .pipe(css())
	  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['html', 'sass', 'open', 'watch']);
 
