(function () {
    'use strict';

    /*
    * Get dependencies
    */
    require('init_libraries');

    //load modules
    require('./init_module_files/factory');
    require('./init_module_files/filter');
    require('./init_module_files/directives');

    require('./init_module_files/category');
    require('./init_module_files/message');
    require('./init_module_files/domains');
    require('./init_module_files/reports');
    require('./init_module_files/dashboard');
    require('./init_module_files/user');
    require('./init_module_files/login');
    require('./init_module_files/clist');
    require('./init_module_files/recipients');
    require('./init_module_files/contactQueue');
    require('./init_module_files/organizations');
    require('./init_module_files/applications');
    require('./config/config');

    //init module angular
    var jaw = angular.module('jaw', [
        'external-libraries',
        'appConfig',
        'jaw.factory',
        'jaw.filter',
        'jaw.directives',
        'jaw.category',
        'jaw.domains',
        'jaw.reports',
        'jaw.message',
        'jaw.dashboard',
        'jaw.recipients',
        'jaw.login',
        'jaw.user',
        'jaw.clist',
        'jaw.contactQueue',
        'jaw.organization',
        'jaw.applications'
    ]);

    // expose libraries
    jaw.constant('_', require('lodash'));
    jaw.constant('moment', require('moment'));

    //Config route
    jaw.config(require('./routes'));

    jaw.run(require('./on_run'));

    //Filter in template to encode url
    jaw.filter('encodeUrl', function() {
        return window.btoa;
    });

}());
