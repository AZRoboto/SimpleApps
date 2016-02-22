(function() {
	app.factory('userFactory', userFactory);
	userFactory.$inject = ['$http', '$q', 'testService'];
	function userFactory($http, $q, testService) {
		var api = 'foobar';
		return {
			login: login,
			getRelatedUsers: getRelatedUsers,
			getRelatedUsersAsync: getRelatedUsersAsync
		};
		
		function login(userInfo) {
			return $http.get(api, userInfo);
		}
		
		function getRelatedUsers(token) {
			return testService.getUsers();
		}
		
		function getRelatedUsersAsync(token) {
			return $http.get(api + 'related/all/' + token);
		}
	}
}());