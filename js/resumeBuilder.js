// object containing biography data
var bio = {
	"name": "Basil Mohabir",
	"role": "Front-End Padawan",
	"contacts": {
		"mobile": "917-375-2806",
		"email": "bmohabir01@gmail.com",
		"github": "github.com/bmohabir",
		"location": "Bronx, NY"
	},
	"biopic": "http://i.imgur.com/O93x1dH.jpg",
	"welcomeMessage": "Welcome to my web programming adventure!",
	"skills": [
		"HTML5", "JavaScript", "CSS3", "PC and Mac expert"
	]
};

// method for formatting and displaying data contained in bio object
bio.display = function() {
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
};


// object containing education data
var education = {
	"schools": [
		{
			"name": "Cardinal Spellman High School", "location": "Bronx, NY", "degree": "High School Diploma", "majors": [], "dates": "2005-2009", "url": "www.cardinalspellman.org"
		},
		{
			"name": "Polytechnic Institute of NYU", "location": "Brooklyn, NY", "degree": "N/A", "majors": ["Computer Science", "Digital Media"], "dates": "2009-2011", "url": "engineering.nyu.edu"
		},
		{
			"name": "CUNY Bronx Community College", "location": "Bronx, NY", "degree": "N/A", "majors": ["Liberal Arts/Chemistry"], "dates": "2012-2013", "url": "www.bcc.cuny.edu"
		},
		{
			"name": "Monster University", "location": "Monstropolis", "degree": "Masters", "majors": ["Spookology", "Child Psychology"], "dates": "2011-2015", "url": "monsteruniversity.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript", "school": "Codecademy", "date": "September, 2015", "url": "codecademy.com/learn/javascript"
		},
		{
			"title": "Intro to HTML and CSS", "school": "Udacity", "date": "November 2015", "url": "udacity.com/course/intro-to-html-and-css--ud304-nd"
		},
		{
			"title": "Responsive Images", "school": "Udacity", "date": "December 2015", "url": "udacity.com/course/responsive-images--ud882-nd"
		},
		{
			"title": "How to Use Git and Github", "school": "Udacity", "date": "January, 2016", "url": "udacity.com/courses/ud775"
		},
		{
			"title": "JavaScript Basics", "school": "Udacity", "date": "January, 2016", "url": "udacity.com/course/javascript-basics--ud804-nd"
		}
	]
};

// method for formatting and displaying data contained in education object
education.display = function() {
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
};


// object containing employment data
var work = {
	"jobs": [
		{
			"employer": "Micro Center", "title": "Knowledge Expert", "location": "Yonkers, NY", "dates": "April, 2013-October, 2015", "description": "Help desk support, computer service and repair, consumer technology consultation"
		},
		{
			"employer": "Cinco", "title": "Celery Man", "location": "Detroit, MI", "dates": "February, 2007-May, 2010", "description": "4d3d3d3"
		}
	]
};

// method for formatting and displaying data contained in work object
work.display = function() {
	for (job in this.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", this.jobs[job].employer)+HTMLworkTitle.replace("%data%", this.jobs[job].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
	}
};


// object containing projects data
var projects = {
	"projects": [
		{
			"title": "Portfolio", "dates": "November 2015-December 2015", "description": "My portfolio", "images": [
				"http://lorempixel.com/400/200/technics/6/", "http://lorempixel.com/400/200/technics/7/"
			]
		},
		{
			"title": "Resume", "dates": "December 2015-January 2016", "description": "This resume", "images": [
				"http://lorempixel.com/400/200/technics/3/"
			]
		}
	]
};

// method for formatting and displaying data contained in projects object
projects.display = function() {
	for (project in this.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[project].description));

		// display project images
		for (image in this.projects[project].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[project].images[image]));
		}
	}
};

// call display methods for each HTML section
bio.display();
education.display();
work.display();
projects.display();


// display Google Map
$("#mapDiv").append(googleMap);
