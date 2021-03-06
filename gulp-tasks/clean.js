'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-if': 'gulpif',
        'gulp-angular-gettext': 'gettext',
        'gulp-tag-version': 'tag_version'
    }
});
var argv = require('yargs')
.default('env', 'local')
.default('config', '')
.argv;
var paths = require('../gulp.config.json');
var cdn = paths.cdn + argv.env + '/';
var local = argv.env === 'local' ? true : false;
var dist = paths.dist + argv.env + '/';
var del = require('del');
/**
 * Task to validate js
 */
gulp.task('jshint', function() {
    return gulp.src(paths.jsFiles)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

/**
 * Clean each launch
 */
gulp.task('clean', function() {
    return del(dist + '**/*');
});
gulp.task('clean-release', function() {
    if(local) {
        return del(dist + '**/*');
    }else {
        return del(cdn + '**/*');
    }
});

gulp.task('clean_all', ['jshint', 'clean', 'clean-release'], function() {
    gulp.start('release');
});
