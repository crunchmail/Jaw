module.exports = angular.module('jaw.contactQueue', [])
.factory('apiContactQueue', require('contactQueue/apiContactQueue.factory'))
.directive('cmCreateContactForm', require('contactQueue/createContactForm.directive'));
