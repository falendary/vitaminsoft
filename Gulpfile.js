/**
 * Created by szhitenev on 09.03.2016.
 */
(function () {

    'use strict';

    var gulp = require('gulp');
    var requireDir = require('require-dir');
    var dir = requireDir('./gulptasks/');

    gulp.task('default', ['core-min-All', 'landing-min-All']);

}());
