(function() {
	app.service('testService', testService);
	testService.$inject = [];
	function testService() {
		
		var TestTypes = [{
				SystemCode: 'Research',
				Active: true
			},{
				SystemCode: 'Home',
				Active: true
			},{
				SystemCode: 'Gardening',
				Active: true
			},{
				SystemCode: 'Finanace',
				Active: true
			},{
				SystemCode: 'Entertainment',
				Active: true
			}];
			
		var TestTasks = [{
				Title:'Title One',
				Description:'This is a test description',
				DueDate:'2015-09-11 12:30am',
				Type: 'Research',
				CreatedBy:1,
				CreatedDate:'2015-09-11 12:30am',
				Latitude:null,
				Longitude:null,
				PlaceName:null,
			},{
				Title:'Title Two',
				Description:'This is a test 2',
				DueDate:'2015-09-12 12:45pm',
				Type: 'Entertainment',
				CreatedBy:1,
				CreatedDate:'2015-09-12 12:45pm',
				Latitude:null,
				Longitude:null,
				PlaceName:null,
			},{
				Title:'Title Four',
				Description:'This is a test 4',
				DueDate:'2015-09-09 12:15pm',
				Type: 'Research',
				CreatedBy:1,
				CreatedDate:'2015-09-10 12:15pm',
				Latitude:null,
				Longitude:null,
				PlaceName:null,
			},{
				Title:'Title Three',
				Description:'This is a test description',
				DueDate:'2015-09-11 12:30am',
				Type: 'Shopping',
				CreatedBy:1,
				CreatedDate:'2015-09-11 12:30am',
				Latitude:null,
				Longitude:null,
				PlaceName:null,
			}];
			
		var TestRoles = [{
				ID: 1,
				Role: 'Admin',
				Active: true
			}, {
				ID: 2,
				Role: 'General',
				Active: true
			}, {
				ID: 3,
				Role: 'Manager',
				Active: true
			}, {
				ID: 4,
				Role: 'Team Lead',
				Active: true
			}, {
				ID: 5,
				Role: 'Officer',
				Active: true
			}];
				
		var TestUsers = [{
				Username: 'AZRoboto',
				Password: 'password',
				Role: 'Admin',
				FirstName: 'Ryan',
				LastName: 'Ebann',
				Active: true
			},{
				Username: 'Ryne',
				Password: 'p@55',
				Role: 'Team Lead',
				FirstName: 'Ryne',
				LastName: 'Wilson',
				Active: true
			},{
				Username: 'tigglebitties',
				Password: 'gogreen',
				Role: 'Officer',
				FirstName: 'Christian',
				LastName: 'Delgado',
				Active: true
			},{
				Username: 'SecretSauce',
				Password: 'serket',
				Role: 'Manager',
				FirstName: 'Steph',
				LastName: 'Dope',
				Active: true
			}];
			
		this.getUsers = function() {
			return TestUsers;
		}
		this.getTasks = function() {
			return TestTasks;
		}
		this.getRoles = function() {
			return TestRoles;
		}
		this.getTypes = function() {
			return TestTypes;
		}
	};
}());