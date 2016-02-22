var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngCookies', 'ui.bootstrap']);
(function() {
	app.config('config', config);
	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'app/views/home'
		})
		.otherwise({
			redirectTo: '/home'
		});	
	};
	
// 	app.config(["$provide", "$httpProvider", function ($provide, $httpProvider) {
// 
// 	//register interceptor as a new service
// 	$provide.factory("httpInterceptor", ["$q", "$rootScope", "busyIndicator",
// 		function ($q, $rootScope, busyIndicator) {
// 
// 			return {
// 				request: function (config) {
// 					busyIndicator.show();
// 					return config || $q.when(config);
// 				},
// 
// 				requestError: function (rejection) {
// 
// 					if (rejection.status === 401) {
// 						console.log("error");
// 					}
// 					return $q.reject(rejection);
// 				},
// 
// 				response: function (response) {
// 					busyIndicator.hide();
// 					return response || $q.when(response);
// 				},
// 
// 				responseError: function (rejection) {
// 
// 					busyIndicator.hide();
// 					if (rejection.status === 401) {
// 						console.log("error");
// 					}
// 					return $q.reject(rejection);
// 				}
// 			};
// 		}]);
// 		$httpProvider.interceptors.push("httpInterceptor");
// 	}]);
	
}());