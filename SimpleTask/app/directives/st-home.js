(function() {
	app.directive('stHome', stHome);
	stHome.$inject = ['$location', '$modal', 'userService', 'taskService', 'userFactory', 'taskFactory'];
	function stHome($location, $modal, userService, taskService, userFactory, taskFactory) {
		return {
			templateUrl: 'app/templates/home.html',
			link: function(scope, elem, attrs) {
				//Variables
				scope.alerts = [];
				scope.data = {
					tasks: [],
				};
				
				//Methods
				scope.navigate = navigate;
				
				//Implementation
				function navigate(path) {
					$location.path(path);
				};
				
				//Private
				function init() {
					scope.data.tasks = taskFactory.getTasks();
					// taskFactory.getTasksAsync().then(function(response) {
					// 	scope.data.tasks = angular.fromJson(response.data);
					// });
				}
				
				init();
			}
		}	
	};
}());