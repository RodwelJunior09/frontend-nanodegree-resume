/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(['Rodwel']);
/*
 var awessomethoughts = 'I am Rodwel and i am awessome';
 var funthoughts = awessomethoughts.replace('awessome','fun');

 ///$('#main').append([funthoughts]);
*/

 /*nombre = 'audacity';
 hola = nombre.slice(1);
 nuevo = hola.replace('u','U');
 $('#main').append(nuevo);*/

 //var array = ["Hola","Mundo","que","hacen"];
 //var numbers = array.length;


 //$('#main').append(array); 
 //$('#main').append(numbers);

 /*var array = [1,2,3];
 var new_Array = [];

  var number = array.pop();
   array.push(number + 1);
   new_Array = array;

 //new_Array = array;
 //new_Array = new_Array.pop();
 //new_Array = new_Array.push('4');

 console.log(new_Array);*/

/* var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array){
	var string_list = _array;
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
   	var number = string_list.pop();
   	string_list.push(number + 1);
   	newArray = string_list;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

*/

/*var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    var lowcase = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var bigcase = names[1].toUpperCase();
    finalName = lowcase + " " + bigcase;
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
*/


 //$('#header').prepend([formattedname]);

 //$('#header').prepend([formattedRole]);

// var Skills = ["awessomeness","Programming","teaching","JS"];

var bio = {
	"name": "Rodwel Polanco Martinez",
 	"role": "Web Developer",
 	"contact": {
 		"mobile": "809-971-4957",
 		"email": "RodwelJunior@gmail.com",
 		"github": "RodwelJunior09",
 		"twitter": "Rodwel09",
 		"location": "Santiago de los caballeros",
 	},
 	"welcomeMenssage": "Welcome all to my awessome resume",
 	"skills": ["Web-Developer","Programmer","Python","JS","C","C++","Computer_tecnician"],
 	"pictureUrl": "C:/Users/User/Rodwel_GitHub/frontend-nanodegree-resume/images/photo.jpg"
}

var work = {
	"jobs":[
		{
			"employer": "Rodwel Polanco Martinez",
			"title": "Computer_tecnician",
			"location": "Santiago",
			"Dates": "20/9/2016",
			"Description": "Me gradue en el Instituto Politecnico Industrial de Santiago, (IPISA), Mi trabajo se especializa especificamente en repararacion de maquinas o computadoras, ademas de que hago programacion en diferentes lenguajes y tambien soy aprendiz de desarrolladores web",
		}
	]
}

var allprojects = {
	"projects":[
		{	
			"title": "Javascript_Resume",
			"dates": "30/9/2016",
			"description": "This is another proyect of udacity in the javascript classroom",
			"images": ["C:/Users/User/Rodwel_GitHub/frontend-nanodegree-resume/images/programmer.jpg","C:/Users/User/Rodwel_GitHub/frontend-nanodegree-resume/images/webdeveloment.jpg"],

		}
	]
}


var education = {
	"schools": [
		{
			"nameSchools": "IPISA",
			"schoolDegree": "Last year in high school",
			"location": "Av Hispanoamericana Santiago",
			"Majors": ['Computer_tecnician'],
			"years": "2016",
			"url": "http://www.ipisa.edu.do/" 
		},
		{
			"nameSchools": "Cardenal Beras",
			"schoolDegree": "Basic Degree",
			"location": "Barrio Lindo Santiago",
			'Majors': ['BasicCourse'],
			"years": "2012",
			"url": "http://cardenalberas.edu.do/"
		}

	],
	"onlinecourse":[
		{
			"title": "Javascript_Syntax",
			"schools": "Udacity",
			"dates": "2016",
			"url": "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19506785590923#"
		}

	]
	
}
	
//document.getElementById('education').style.display = "none";

function Rolenamedisplay(){
	var formattedname = HTMLheaderName.replace('%data%',bio.name);
	$("#header").append(formattedname);
	var formattedrole = HTMLheaderRole.replace('%data%',bio.role);
	$("#header").append(formattedrole);
}

Rolenamedisplay();

function biodisplay(){
	var formattedmobile = HTMLmobile.replace('%data%',bio.contact.mobile);
	$("#header").append(formattedmobile);
	var formattedemail = HTMLemail.replace('%data%',bio.contact.email);
	$("#header").append(formattedemail);
	var formattedtwitter = HTMLtwitter.replace('%data%',bio.contact.twitter);
	$("#header").append(formattedtwitter);
	var formattedgithub = HTMLgithub.replace('%data%',bio.contact.github);
	$("#header").append(formattedgithub);
	var formattedlocation = HTMLlocation.replace('%data%',bio.contact.location);
	$("#header").append(formattedlocation);
}

biodisplay();

function extrathingsdisplay(){
	var formattedmenssage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMenssage);
	$("#header").append(formattedmenssage);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureUrl);
	$("#header").append(formattedPicture);

}

extrathingsdisplay();
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%',bio.skills[6]);
	$("#skills").append(formattedSkill);
}


function displayWork(){
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedYears = HTMLworkDates.replace("%data%",work.jobs[job].Dates);
			$(".work-entry:last").append(formattedYears);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
			$(".work-entry:last").append(formattedDescription);
		}
}

displayWork();


/*
function projectdisplay(){
	for(var project in projects) {
		$("#projects").append(HTMLprojectStart);
		var formatedProjectInfo = [];
		console.log("proj lenght =" + projects.length);
		console.log("current index=" + project);

		var info = HTMLprojectTitle.replace("%data%", projects[project].title);
		formatedProjectInfo.push(info);

		var info = HTMLprojectDates.replace("%data%", projects[project].dates);
		formatedProjectInfo.push(info);
		
		var info = HTMLprojectDescription.replace("%data%", projects[project].description);
		formatedProjectInfo.push(info);

		for(image in projects[project].images) {

			var info = HTMLprojectImage .replace("%data%", projects[project].images[image]);
			formatedProjectInfo.push(info);
		}


		for(index in formatedProjectInfo) {
				$(".project-entry:last").append(formatedProjectInfo[index]);				
			}
		}
}*/

function educationdisplay(){
	for(one in education.schools)
	{
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%',education.schools[one].nameSchools);
		var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[one].schoolDegree);
		var formattedNameDegree = formattedName + formattedDegree;
		$('.education-entry:last').append(formattedNameDegree);

		var formattedyears = HTMLschoolDates.replace('%data',education.schools[one].years);
		$('.education-entry:last').append(formattedyears);

		var formattedLocation = HTMLschoolLocation.replace('%data',education.schools[one].location);
		$('.education-entry:last').append(formattedLocation);

		if(education.schools[one].Majors.length > 1){
			for(edu in education.schools[one].Majors){
				var formattedMajors = HTMLschoolMajor.replace('%data%',education.schools[one].Majors);
				$('.education-entry:last').append(formattedMajors);
			}
		}
		else
		{
			var formattedMajors = HTMLschoolMajor.replace('%data%',education.schools[one].Majors);
			$('.education-entry:last').append(formattedMajors);
		}
	}
}
educationdisplay();

function educationOnlinedisplay(){
	for(two in education.onlinecourse){
		$("#onlineClasses").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace('%data%',education.onlinecourse[two].title);
		var formattedSchools = HTMLonlineSchool.replace('%data%',education.onlinecourse[two].schools);
		var formattedDegreeSchools = formattedTitle + formattedSchools;
		$('.online-entry:last').append(formattedDegreeSchools);
		var formattedDates = HTMLonlineDates.replace('%data%',education.onlinecourse[two].dates);
		$('.online-entry:last').append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace('%data%',education.onlinecourse[two].url);
		$('.online-entry:last').append(formattedUrl);

	}
}
educationOnlinedisplay();

function allprojectsdisplay(){
	for(second in allprojects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%',allprojects.projects[second].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace('%data%',allprojects.projects[second].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace('%data%',allprojects.projects[second].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

allprojectsdisplay();

function extraprojecthings(){
	for(one in allprojects.projects){
		if(allprojects.projects[one].images.length > 0){
			for(cicle in allprojects.projects[one].images){
				var formattedImage = HTMLprojectImage.replace('%data%',allprojects.projects[one].images[cicle]);
				$("#projects").append(formattedImage);
			}
		}

	}
}

extraprojecthings();

function mapDisplay(){
	$("#mapDiv").append(googleMaps);
}

mapDisplay();











/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
/*
/*function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newlocation = work_obj.jobs[job].location;
		locationArray.push(newlocation);
	}
	return locationArray;
}*/


/*function inName(string){
	string = string.trim().split(" ");
	console.log(name);
	string[1] = string[1].toUpperCase();
	string[0] = string[0].slice(0,1).toUpperCase() + string[0].slice(1).toLowerCase();

	return string[0] + " " + string[1];

}

$('#main').append(internationalizeButton);
*/


