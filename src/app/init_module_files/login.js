module.exports = angular.module('jaw.login', [])

.factory('apiLogin', require('login/apiLogin.factory'))

.directive('cmLoginForm', require('login/login.directive'))
.directive('cmResetForm', require('login/resetForm.directive'));
