(function () {
	'use strict';

	var apiConfig = function (appSettings, jwtInterceptorProvider, $httpProvider){

		$httpProvider.interceptors.push('authInterceptor');

	};

	module.exports = apiConfig;
}());