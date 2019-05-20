var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: { baseDir: './app/'}
    });
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    gulp.watch('./app/less/**/*.less', ['styles']);
    // gulp.watch('./app/sass/**/*.sass', ['styles']);
});

gulp.task('styles', function() {
    return gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

// gulp.task('sass', function() {
//     return gulp.src('./app/sass/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./app/css'))
//     .pipe(browserSync.stream());
// });

gulp.task('default', ['server']);
