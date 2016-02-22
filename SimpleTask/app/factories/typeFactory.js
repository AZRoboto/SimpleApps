(function() {
	app.factory('typeFactory', typeFactory);
	typeFactory.$inject = ['$http', '$q', 'testService'];
	function typeFactory($http, $q, testService) {
		var api = 'foobar';
		return {
			getType: getType,
			getTypes: getTypes,
			getTypesAsync: getTypesAsync,
			save: save,
			saveAsync: saveAsync,
			removeAsync: removeAsync
		};
		
		function getType(id) {
			var types = testService.getTypes();
			return types[types.map(function(t) { t.Id; }).indexOf(id)];
		}
		
		function getTypeAsync(id) {
			return $http.get(api + id);
		}
		
		function getTypes() {
			return testService.getTypes();
		}
		
		function getTypesAsync() {
			return $http.get(api);
		}
		
		function save(item) {
			return testService.saveType(item);
		}
		
		function saveAsync(item) {
			return $http.post(api, item);
		}
		
		function remove(id) {
			return testService.removeType(id);
		}
		
		function removeAsync(id) {
			return $http.remove(api + id);
		}
	}
}());