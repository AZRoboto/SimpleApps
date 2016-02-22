function Role(id, role, active) {
	this.ID = id;
	this.Role = role;
	this.Active = active;
};

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