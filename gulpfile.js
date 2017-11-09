var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');

gulp.task('default', function() {
    // place code for your default task here
    console.log("Running!!!!!");
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('views', function buildHTML() {
    return gulp.src('app/views/*.pug')
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('stylus', function () {
    return gulp.src('app/stylus/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch',['browser-sync', 'views','stylus'], function() {
    gulp.watch('app/views/**/*.pug', ['views']);
    gulp.watch('app/stylus/**/*.styl', ['stylus']);
});