function User(username, password, firstName, lastName, active) {
	this.Username = username;
	this.Password = password;
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Active = active;
}

var TestUsers = [{
	Username: 'AZRoboto',
	Password: 'password',
	FirstName: 'Ryan',
	LastName: 'Ebann',
	Active: true
},{
	Username: 'Ryne',
	Password: 'p@55',
	FirstName: 'Ryne',
	LastName: 'Wilson',
	Active: true
},{
	Username: 'tigglebitties',
	Password: 'gogreen',
	FirstName: 'Christian',
	LastName: 'Delgado',
	Active: true
},{
	Username: 'SecretSauce',
	Password: 'serket',
	FirstName: 'Steph',
	LastName: 'Dope',
	Active: true
}];