module.exports = angular.module('jaw.user', [])

.factory('apiUser', require('user/apiUser.factory'))

.directive('cmRegister', require('user/register.directive'))
.directive('cmMenuProfile', require('user/menuProfile.directive'))
.directive('cmProfile', require('user/profile.directive'));
