var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var configs = {
    src: {
        less: 'less/main.less',
        scripts: ['./scripts/*.js', '!./scripts/main.js']
    },
    dist: {
        css: 'css',
        scripts: 'scripts/'
    },
    watch: {
        less: 'less/*.less',
        html: 'index.html',
        scripts: 'scripts/*.js'
    }
};

gulp.task('default', ['less'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(configs.watch.html).on('change', browserSync.reload);
    gulp.watch(configs.watch.less, ['less'])
    // gulp.watch(configs.watch.scripts, ['scripts'])
});

gulp.task('less', function() {
    return gulp.src(configs.src.less)
        .pipe(less())
        .pipe(gulp.dest(configs.dist.css))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});

// gulp.task('scripts', function() {
//     return gulp.src(configs.src.scripts)
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest(configs.dist.scripts))
//     // .pipe(browserSync.stream({ match: '**/*.js'}))
// });
