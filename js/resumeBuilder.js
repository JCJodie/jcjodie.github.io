/* globals $, HTMLschoolStart, HTMLheaderRole, HTMLheaderName, HTMLmobile, HTMLmobile, HTMLemail, HTMLemail, HTMLgithub, HTMLlocation, HTMLbioPic, HTMLWelcomeMsg, HTMLskillsStart, HTMLskills, HTMLskills, HTMLskills, HTMLprojectStart, HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage, HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription, HTMLschoolName, HTMLschoolDegree, HTMLschoolLocation, HTMLschoolDates, HTMLschoolMajor, HTMLonlineClasses, HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL, internationalizeButton, googleMap */
/* jshint undef: true, unused: true */
var bio = {
    "name": "Joanna Moisant",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "847-254-7855",
        "email": "jcmoisant@gmail.com",
        "github": "JCJodie",
        "location": "Chicago, IL"
    },

    "welcomeMessage": "Welcome to my Resume",
    "skills": ["HTML", "CSS", "JS"],
    "biopic": "images/jodiephoto.jpg"
};

bio.display = function() {

    var formattedRole =
        HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName =
        HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile =
        HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail =
        HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub =
        HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedLocation =
        HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedBioPic =
        HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage =
        HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
    }
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

var projects = {
    "projects": [{
        "title": "Udacity Neighborhood Map Project",
        "dates": "2016",
        "description": "A single-page application featuring a map of a neighborhood.",
        "images": [
            "http://lorempixel.com/200/200/abstract/1"
        ],
        "url": "https://github.com/jcjodie/udacity-neighborhood-map-project"
    },{
        "title": "Udacity Arcade Game",
        "dates": "2016",
        "description": "Provided with visual assets and a game loop engine, recreated the classic arcade game Frogger.",
       "images": [
            "http://lorempixel.com/200/200/abstract/4"
       ],
       "url": "https://github.com/jcjodie/udacity-arcade-game-project"
    },{
        "title": "Udacity Portfolio Project",
        "dates": "2016",
        "description": "Developed a responsive website, replicated the design mockup.",
        "images": [
            "http://lorempixel.com/200/200/abstract/3"
        ],
        "url": "https://github.com/jcjodie/udacity-portfolio-project"
    },{
        "title": "Udacity Optimization Project",
        "dates": "2016",
        "description": "Optimized a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
        "images": [
            "http://lorempixel.com/200/200/abstract/8"
        ],
        "url": "https://github.com/jcjodie/udacity-optimization-project"
    },{
        "title": "Udacity Feed Reader Project",
        "dates": "2016",
        "description": "Tested with Javascript using Jasmine.",
        "images":[
            "http://lorempixel.com/200/200/abstract/6"
        ],
        "url": "https://github.com/jcjodie/udacity-feedreader-project"
        }
    ]
};  

projects.display = function() {
    if (projects.projects.length > 0) {

        $("#projects").append(HTMLprojectStart);
    }
    for (var i = 0; i < projects.projects.length; i++) {
        var projectUrl = projects.projects[i].url
        var formattedTitle =
            HTMLprojectTitle.replace("#", projectUrl)
        formattedTitle = formattedTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates =
            HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription =
            HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);


        for (var n = 0; n < projects.projects[i].images.length; n++) {

            var formattedImage =
                HTMLprojectImage.replace("%data%", projects.projects[i].images[n]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

projects.display();

var work = {
    "jobs": [{
        "title": "Web Developer",
        "dates": "2016",
        "employer": "YNPN Milwaukee",
        "location": "Milwaukee, WI",
        "url": "https://ynpnmilwaukee.nationbuilder.com",
        "description": "Edited HTML, CSS on nationbuilder.com website to their specifications as a volunteer for a non-profit organization."
    }, {
        "title": "Library Technology Assistant",
        "dates": "2006-2012",
        "employer": "Hawthorn Aspen Elementary School",
        "location": "Vernon Hills, IL",
        "url": "https://www.hawthorn73.org",
        "description": "Provided technical support for students on Mac OSX Snow Leopard. Assisted students with computer programs including slideshow presentations and word processing. Implemented barcode scanner system for inventory."
    }, {
        "title": "Claims Adjuster",
        "dates": "1995-1998",
        "employer": "Hanover Insurance",
        "location": "Itasca, IL",
        "url": "https://www.hanover.com",
        "description": "Investigated, evaluated, and negotiated Insurance claims."
    }]
};

work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
    }
    for (var i = 0; i < work.jobs.length; i++) {
        var workUrl = work.jobs[i].url;

        var formattedEmployer =
            HTMLworkEmployer.replace("#", workUrl);
        formattedEmployer = formattedEmployer.replace("%data%", work.jobs[i].employer);

        var formattedTitle =
            HTMLworkTitle.replace("%data%", work.jobs[i].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates =
            HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedworkLocation =
            HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedworkLocation);

        var formattedworkDescription =
            HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedworkDescription);
    }
};
work.display();

var education = {
    "schools": [{
        "name": "Illinois Wesleyan University",
        "dates": "1992",
        "degree": "Bachelor of Science",
        "location": "Bloomington, IL",
        "majors": ["Business Administration"],
        "url": "https://www/iwu.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "date": "2016",
        "title": "Front-End Web Development NanoDegree",
        "url": "https://www/udacity.com"
    }, {
        "school": "Udemy",
        "date": "2016",
        "title": "Intro to HTML and CSS",
        "url": "https://www.udemy.com"
    }, {
        "school": "Linux Foundation",
        "date": "2015",
        "title": "Intro to Linux",
        "url": "https://www.linuxfoundation.org"
    }]
};
education.display = function() {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
    }
    for (var i = 0; i < education.schools.length; i++) {
        var schoolUrl = education.schools[i].url;

        var formattedschoolName =
            HTMLschoolName.replace("#", schoolUrl);
        formattedschoolName = formattedschoolName.replace("%data%", education.schools[i].name);

        var formattedDegree =
            HTMLschoolDegree.replace("%data%", education.schools[i].degree);

        var formattedNameDegree = formattedschoolName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedschoolLocation =
            HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolDates =
            HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedMajor =
            HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);


    for (var n = 0; n < education.onlineCourses.length; n++) {
        var onlineSchoolUrl = education.onlineCourses[n].url;

        var formattedOnlineTitle =
            HTMLonlineTitle.replace("#", onlineSchoolUrl);
        formattedOnlineTitle = formattedOnlineTitle.replace("%data%", education.onlineCourses[n].title);

        var formattedOnlineSchool =
            HTMLonlineSchool.replace("%data%", education.onlineCourses[n].school);

        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedOnlineDates =
            HTMLonlineDates.replace("%data%", education.onlineCourses[n].date);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL =
            HTMLonlineURL.replace("#", onlineSchoolUrl);
        formattedOnlineURL = formattedOnlineURL.replace("%data%", onlineSchoolUrl);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);