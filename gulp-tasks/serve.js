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

var configApiFile = argv.config === '' ? '../' + paths.configFile + argv.env + '-constant' : '../' + paths.configFile + argv.config;
var configApi = require(configApiFile);
/**
 * Launch 2 servers
 * localhost:4000 for zimlet-iframe
 */
gulp.task("dev_server", function() {
    plugins.connect.server({
        root: "dist/" + argv.env,
        port: "4000"
    });
    plugins.connect.server({
        root: "./docs",
        port: "4002"
    });
});
