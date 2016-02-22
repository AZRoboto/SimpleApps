function Task(title, description, dueDate, createdDate, createdBy, latitude, longitude, placeName) {
	this.Title = title;
	this.Description = description;
	this.DueDate = dueDate;
	this.CreatedBy = createdBy;
	this.CreatedDate = createdDate;
	this.Latitude = latitude;
	this.Longitude = longitude;
	this.PlaceName = placeName;
};

var TestTasks = [{
	Title:'Title One',
	Description:'This is a test description',
	DueDate:'2015-09-11 12:30am',
	CreatedBy:1,
	CreatedDate:'2015-09-11 12:30am',
	Latitude:null,
	Longitude:null,
	PlaceName:null,
},{
	Title:'Title Two',
	Description:'This is a test 2',
	DueDate:'2015-09-12 12:45pm',
	CreatedBy:1,
	CreatedDate:'2015-09-12 12:45pm',
	Latitude:null,
	Longitude:null,
	PlaceName:null,
},{
	Title:'Title Four',
	Description:'This is a test 4',
	DueDate:'2015-09-09 12:15pm',
	CreatedBy:1,
	CreatedDate:'2015-09-10 12:15pm',
	Latitude:null,
	Longitude:null,
	PlaceName:null,
},{
	Title:'Title Three',
	Description:'This is a test description',
	DueDate:'2015-09-11 12:30am',
	CreatedBy:1,
	CreatedDate:'2015-09-11 12:30am',
	Latitude:null,
	Longitude:null,
	PlaceName:null,
}];