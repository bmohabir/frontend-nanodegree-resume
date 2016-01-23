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
		$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

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
	],
	"display": function() {
		// display schools
		for (school in this.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", this.schools[school].name)+HTMLschoolDegree.replace("%data%", this.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", this.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", this.schools[school].location));
			var majors = this.schools[school].majors.join(" / ");
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majors));
		}

		// display online courses
		$("#education").append(HTMLonlineClasses);
		for (course in this.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title)+HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", this.onlineCourses[course].date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", this.onlineCourses[course].url));
		}
	}
};

education.display();

var work = {
	"jobs": [
		{
			"employer": "Cinco", "title": "Celery Man", "location": "Detroit, MI", "dates": "February, 2007-May, 2010", "description": "4d3d3d3"
		}
	],
	"display": function() {
		for (job in this.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", this.jobs[job].employer)+HTMLworkTitle.replace("%data%", this.jobs[job].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
		}
	}
};

work.display();

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
