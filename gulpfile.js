var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify');

gulp.task('default', function() {
  console.log("Default Gulp Task");
});


gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function() {
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});




//DEPLOY TASKS
gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);

gulp.task('deleteDistFolder', function() {
  return del("./dist");
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/ignore', '!./app/assets/images/ignore/**/*'])
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src(['./app/**/*.html'])
    .pipe(usemin())
    .pipe(gulp.dest("./dist"));
});