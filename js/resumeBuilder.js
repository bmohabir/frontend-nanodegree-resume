var bio = {
	"name": "Basil Mohabir",
	"role": "Front-End Padawan",
	"contacts": {
		"mobile": "917-375-2806",
		"email": "bmohabir01@gmail.com",
		"github": "github.com/bmohabir/",
		"location": "Bronx, NY"
	},
	"biopic": "biopic.jpg",
	"welcomeMessage": "Welcome to my web programming adventure!",
	"skills": [
		"HTML5", "JavaScript", "CSS3", "PC and Mac expert"
	],
	"display": function() {
		//display name and role
		$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", this.name));

		// display contacts
		$("#topContacts").append(HTMLmobile.replace("%data%", this.contacts["mobile"]));
		$("#topContacts").append(HTMLemail.replace("%data%", this.contacts["email"]));
		$("#topContacts").append(HTMLgithub.replace("%data%", this.contacts["github"]));
		$("#topContacts").append(HTMLlocation.replace("%data%", this.contacts["location"]));

		// display pic and welcome msg
		$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		// display skills
		$("#header").append(HTMLskillsStart);
		for (skill in this.skills) {
			$("#skills").append(HTMLskills.replace("%data%", this.skills[skill]));
		}
	}
};

bio.display();

var education = {
	"schools": [
		{
			"name": "Monster University", "location": "Monstropolis", "degree": "Masters", "majors": ["Spookology", "Child Psychology"], "dates": "2011-2015", "url": "monsteruniversity.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics", "school": "Udacity", "date": "January, 2016", "url": "udacity.com"
		}
	]
	// TODO: add display function
};

var work = {
	"jobs": [
		{
			"employer": "Cinco", "title": "Celery Man", "location": "Detroit, MI", "dates": "February, 2007-May, 2010", "description": "4d3d3d3"
		}
	]
	// TODO: add display function
};

var projects = {
	"projects": [
		{
			"title": "Portfolio", "dates": "November 2015-December 2015", "description": "My portfolio", "images": [
				"portfolio1.jpg"
			]
		}
	]
	// TODO: add display function
};
