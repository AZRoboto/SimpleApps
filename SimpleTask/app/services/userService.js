(function() {
	app.service('userService', userService);
	userService.$inject = ['$cookies'];
	function userService($cookies) {
		var user = {};
		
		this.getUser = function() {
			return user;
		};
		this.setUser = function(value, isRemember) {
			user = value;
			
			if(isRemember && typeof(sessionStorage) !== 'undefined') {
				sessionStorage.setItem('uInfo',JSON.stringify(value));
				//todo: test out $cookies for user storage
			}
		};
		this.updateUserField = function(key, val) {
			if(user) user[key] = val;
		};
	}
}());