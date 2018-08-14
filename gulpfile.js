var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
    gulp.src('src/scss/style.scss')
        .pipe(gulp.dest('css'))
        .pipe(connect.reload())
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload())
});

gulp.task('js', function () {
    gulp.src('src/js/*.js')
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('src/scss/*', ['sass']);
    gulp.watch('index.html', ['html']);
    gulp.watch('src/js/*.js', ['js']);
});

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('default', ['sass', 'watch', 'connect', 'html', 'js'])