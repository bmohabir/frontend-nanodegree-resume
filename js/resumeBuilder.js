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
	// display name and role
	$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", this.name));

	// format and display contacts that exist in bio object
	if (Object.keys(this.contacts).length > 0) {
		var formattedContacts = [];

		// format each contact depending on type
		for (contact in this.contacts) {
			switch(contact) {
				case "mobile":
					formattedContacts.push(HTMLmobile.replace("%data%", this.contacts["mobile"]));
					break;
				case "email":
					formattedContacts.push(HTMLemail.replace("%data%", this.contacts["email"]));
					break;
				case "twitter":
					formattedContacts.push(HTMLtwitter.replace("%data%", this.contacts["twitter"]));
					break;
				case "github":
					formattedContacts.push(HTMLgithub.replace("%data%", this.contacts["github"]));
					break;
				case "blog":
					formattedContacts.push(HTMLblog.replace("%data%", this.contacts["blog"]));
					break;
				case "location":
					formattedContacts.push(HTMLlocation.replace("%data%", this.contacts["location"]));
					break;
				default:
					formattedContacts.push(HTMLcontactGeneric.replace("%data%", this.contacts[contact]));

			}
		}

		// display contacts in header and footer
		formattedContacts.forEach(function(contact) {
			$("#topContacts").append(contact);
			$("#footerContacts").append(contact);
		});
	}

	// display pic and welcome msg
	$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

	// display skills if bio contains any
	if (this.skills.length > 0) {
		// display skills heading
		$("#header").append(HTMLskillsStart);
		// display formatted list of skills
		this.skills.forEach(function(skill) {
			$("#skills").append(HTMLskills.replace("%data%", skill));
		});
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
			"title": "JavaScript", "school": "Codecademy", "date": "September, 2015", "url": "https://www.codecademy.com/learn/javascript"
		},
		{
			"title": "Intro to HTML and CSS", "school": "Udacity", "date": "November 2015", "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
		},
		{
			"title": "Responsive Images", "school": "Udacity", "date": "December 2015", "url": "https://www.udacity.com/course/responsive-images--ud882-nd"
		},
		{
			"title": "How to Use Git and Github", "school": "Udacity", "date": "January, 2016", "url": "https://www.udacity.com/courses/ud775"
		},
		{
			"title": "JavaScript Basics", "school": "Udacity", "date": "January, 2016", "url": "https://www.udacity.com/course/javascript-basics--ud804-nd"
		}
	]
};

// method for formatting and displaying data contained in education object
education.display = function() {
	// display schools if education object contains any
	if (this.schools.length > 0) {
		this.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name)+HTMLschoolDegree.replace("%data%", school.degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
			// display major(s) for school only if applicable
			if (school.majors.length > 0) {
				var majors = school.majors.join(" / ");
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majors));
			} else {
				// maintain layout if no majors to display
				$(".education-entry:last").append("<br>");
			}
		});
	}

	// display online courses if education object contains any
	if (this.onlineCourses.length > 0) {
		// display online courses heading
		$("#education").append(HTMLonlineClasses);
		// display formatted online courses list
		this.onlineCourses.forEach(function(course) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title)+HTMLonlineSchool.replace("%data%", course.school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
		});
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
	// display jobs if work object contains any
	if (this.jobs.length > 0) {
		// display formatted list of jobs
		this.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer)+HTMLworkTitle.replace("%data%", job.title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
		});
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
	// display projects if projects object contains any
	if (this.projects.length > 0) {
		// display formatted list of projects
		this.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

			// display project images
			project.images.forEach(function(image) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
			});
		});
	}
};


// call display methods for each HTML section
bio.display();
education.display();
work.display();
projects.display();


// display Google Map
$("#mapDiv").append(googleMap);
