/**
 * Created by szhitenev on 09.03.2016.
 */
(function(){

    'use strict';

    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');
    var minifyCSS = require('gulp-minify-css');
    var minifyHTML = require('gulp-minify-html');
    var less = require('gulp-less');
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');
    var rename = require('gulp-rename');
    var livereload = require('gulp-livereload');
    var htmlmin = require('gulp-htmlmin');

    //js
    var plumber = require('gulp-plumber');
    var preprocess = require('gulp-preprocess');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var browserify = require('browserify');


    var appName = 'landing';

    gulp.task(appName + '-less-to-css-min', function(){

        var pathToLess = ['src/' + appName + '/content/less/imports.less'];

        return gulp.src(pathToLess)
            .pipe(less())
            .on('error', function (err) {
                console.error('Error in Browserify: \n', err.message);
                this.emit('end');
            })
            .pipe(plumber())
            .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions']})]))
            .pipe(minifyCSS())
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest('dist/' + appName + '/content/css/'));

    });

    gulp.task(appName + '-html-min', function(){

        var pathToHTML = ['src/*.html'];

        return gulp.src(pathToHTML)
            .pipe(minifyHTML())
            .pipe(gulp.dest('dist/'));

    });

    gulp.task(appName + '-js-min', function(){

        var pathToJS = ['src/' + appName + '/scripts/main.js'];

        return browserify(pathToJS)
            .bundle()
            .on('error', function (err) {
                console.error('Error in Browserify: \n', err.message);
                this.emit('end');
            })
            .pipe(plumber())
            .pipe(source('bundled.js'))
            .pipe(buffer())
            .pipe(preprocess())
            .pipe(uglify())
            .pipe(rename({basename: 'main', suffix: '.min'}))
            .on('error', function (error) {
                console.error('\nError on JS minification: \n', error.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('dist/' + appName + '/scripts/'))
            .pipe(livereload());
    });

    gulp.task(appName + '-img-copy', function(){

        var pathToImg = ['src/' + appName + '/content/img/**/*'];

        return gulp.src(pathToImg)
            .pipe(gulp.dest('dist/' + appName + '/content/img/'));

    });

    gulp.task(appName + '-fonts-copy', function(){

        var pathToFonts = ['src/' + appName + '/content/fonts/**/*'];

        return gulp.src(pathToFonts)
            .pipe(gulp.dest('dist/' + appName + '/content/fonts/'));

    });

    gulp.task(appName + '-watch-All', function(){
        livereload.listen();
        gulp.watch('src/' + appName + '/**/*.less', [appName + '-less-to-css-min']);
        gulp.watch('src/' + appName + '/**/*.js', [appName + '-js-min']);
        gulp.watch('src/*.html', [appName + '-html-min']);
    });

    gulp.task(appName + '-min-All', [
        appName + '-html-min',
        appName + '-less-to-css-min',
        appName + '-js-min',
        appName + '-img-copy',
        appName + '-fonts-copy'
        // appName + '-data-copy'
        ]);

}());