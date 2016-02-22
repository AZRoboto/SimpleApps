(function() {
	app.factory('taskFactory', taskFactory);
	taskFactory.$inject = ['$http', '$q', 'testService'];
	function taskFactory($http, $q, testService) {
		var api = 'foobar';
		return {
			getTask: getTask,
			getTasks: getTasks,
			getTasksAsync: getTasksAsync,
			save: save,
			saveAsync: saveAsync,
			removeAsync: removeAsync
		};
		
		function getTask(id) {
			var tasks = testService.getTasks();
			return tasks[tasks.map(function(t) { t.Id; }).indexOf(id)];
		}
		
		function getTaskAsync(id) {
			return $http.get(api + id);
		}
		
		function getTasks() {
			return testService.getTasks();
		}
		
		function getTasksAsync() {
			return $http.get(api);
		}
		
		function save(item) {
			return testService.saveTask(item);
		}
		
		function saveAsync(item) {
			return $http.post(api, item);
		}
		
		function remove(id) {
			return testService.removeTask(id);
		}
		
		function removeAsync(id) {
			return $http.remove(api + id);
		}
	}
}());