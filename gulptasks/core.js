/**
 * Created by szhitenev on 09.03.2016.
 */
(function(){

    'use strict';

    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');
    var minifyCSS = require('gulp-minify-css');
    var rename = require('gulp-rename');

    var appName = 'core';

    gulp.task(appName + '-core-js-min', function(){

        var pathToJS = ['node_modules/core-js/client/core.js'];

        return gulp.src(pathToJS)
            .pipe(uglify())
            .pipe(rename('corejs.min.js'))
            .pipe(gulp.dest('dist/' + appName + '/scripts/'));

    });

    gulp.task(appName + '-bootstrap-js-min', function(){

        var pathToJS = ['node_modules/bootstrap/dist/js/bootstrap.js'];

        return gulp.src(pathToJS)
            .pipe(uglify())
            .pipe(rename('bootstrap.min.js'))
            .pipe(gulp.dest('dist/' + appName + '/scripts/'));

    });

    gulp.task(appName + '-bootstrap-css-min', function(){

        var pathToCSS = ['node_modules/bootstrap/dist/css/bootstrap.css'];

        return gulp.src(pathToCSS)
            .pipe(minifyCSS())
            .pipe(rename('bootstrap.min.css'))
            .pipe(gulp.dest('dist/' + appName + '/content/css'));

    });

    gulp.task(appName + '-jquery-min', function(){

        var pathToJS = ['node_modules/jquery/dist/jquery.js'];

        return gulp.src(pathToJS)
            .pipe(concat('jquery.js'))
            .pipe(uglify())
            .pipe(rename('jquery.min.js'))
            .pipe(gulp.dest('dist/' + appName + '/scripts/'));

    });

    gulp.task(appName + '-fetch-min', function(){

        var pathToJS = ['node_modules/whatwg-fetch/fetch.js'];

        return gulp.src(pathToJS)
            .pipe(concat('fetch.js'))
            .pipe(uglify())
            .pipe(rename('fetch.min.js'))
            .pipe(gulp.dest('dist/' + appName + '/scripts/'));

    });

    gulp.task(appName + '-min-All', [
        appName + '-core-js-min',
        appName + '-bootstrap-css-min',
        appName + '-bootstrap-js-min',
        appName + '-jquery-min'
    ])

}());