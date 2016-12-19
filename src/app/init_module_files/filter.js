module.exports = angular.module('jaw.filter', [])

.filter('csvToJson', require('_filter/csvToJson.filter'))
.filter('errorFix', require('_filter/errorFix.filter'));
