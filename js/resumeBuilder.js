/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Shouvik Roy",
  "role": "Web Developer",
  "contacts": {
    "mobile": "971-890-6608",
    "email": "shouvik@techie.com",
    "github": "royshouvik",
    "twitter": "@shouvikroy",
    "location": "Gurgaon, India"
  },
  "welcomeMessage": "Technology enthusiast, life long learner",
  "skills": ["Web Development", "Python", "JavaScript", "Java", "C#"],
  "bioPic": "images/profile.jpeg"
};

var fontIcons = {
  "mobile": '<i class="fa fa-mobile fa-stack-1x"></i>',
  "email": '<i class="fa fa-envelope-o fa-stack-1x"></i>',
  "github": '<i class="fa fa-github fa-stack-1x"></i>',
  "twitter": '<i class="fa fa-twitter fa-stack-1x"></i>',
  "location": '<i class="fa fa-map-marker fa-stack-1x"></i>'
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole).prepend(formattedName);

  for (var contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%contact%", fontIcons[contact]).replace("%data%", bio.contacts[contact]);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
  }
  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

var skills = {
  "skills": [{
    id : "front-end",
    value: 0.9,
    text: "Front End" 
  },
  {
    id : "back-end",
    value: 0.8,
    text: "Back End" 
  },
  {
    id : "android",
    value: 0.6,
    text: "Android " 
  }],
};

var circles = {};

skills.display = function() {
  for(var skill in skills.skills) {
    var progressbarName = HTMLProgressName.replace("%data%", skills.skills[skill].text);
    var progressbar = HTMLCircleProgress.replace("%data%", skills.skills[skill].id);
    $("#skillsprogress").append(progressbar);
    $(".progress:last").append(progressbarName);
  }
  $("#skillsprogress").append(clearFix);
};

skills.createCircles = function() {
  for(var skill in skills.skills) {
  var id = "#" + skills.skills[skill].id;  
  var circle = new ProgressBar.Circle(id,{
      text : {
        value : 0
      },
      step : function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      },
      trailColor: '#f4f4f4',
      color: '#1199c3',
      strokeWidth: 2.1,
      duration: 2000,
      easing: 'easeInOut'
    });
  circles[skills.skills[skill].id] = circle;
  }
};

var education = {
  "schools": [{
    "name": "Lovely Professional University",
    "location": "Punjab, India",
    "degree": "Bachelors of Technology",
    "majors": ["Electronics and Communication Engineering"],
    "dates": 2011,
    "url": "www.placeholderurl.com"
  }],
  "onlineCourses": [{
    "title": "Front End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": 2016,
    "url": "www.udacity.com"
  }]
};

education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
    $(".education-entry:last").append(formattedSchoolNameDegree).append(formattedSchoolDates).append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
  }
  for (var course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedCourseTitle + formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    $(".education-entry:last").append(formattedOnlineDates).append(formattedOnlineURL);
  }
};

var work = {
  "jobs": [{
    "employer": "A custom software development and business consulting firm",
    "title": "Senior Associate",
    "dates": "October 2014 - Present",
    "location": "Gurgaon, India",
    "description": "End to end quality assurance activities for BFSI clients. Implemented custom automation testing solution. Responsible for performance testing."
  },
  {
    "employer": "An American multinational financial services corporation",
    "title": "Test Analyst",
    "dates": "October 2013 - October 2014",
    "location": "Gurgaon, India",
    "description": "End to end quality assurance activities for BFSI clients. Implemented custom automation testing solution. Responsible for performance testing."
  }]
};

var projects = {
  "projects": [{
    "title": "Sample Project 1",
    "dates": "2014",
    "description": "Dummy text about the project",
    "images": ["images/197x148.gif"]
  }, {
    "title": "Sample Project 2",
    "dates": "2014",
    "description": "Dummy text about the project",
    "images": ["images/197x148.gif"]
  }, {
    "title": "Sample Project 3",
    "dates": "2014",
    "description": "Dummy text about the project",
    "images": ["images/197x148.gif"]
  }]
};

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);


    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
};

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
  $("#projects").append(clearFix);
};

bio.display();
skills.display();
skills.createCircles();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
