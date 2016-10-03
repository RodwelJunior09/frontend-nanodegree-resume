/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(['Rodwel']);
/*
 var awessomethoughts = 'I am Rodwel and i am awessome';
 var funthoughts = awessomethoughts.replace('awessome','fun');

 ///$('#main').append([funthoughts]);

 var name = 'Rodwel Polanco Martinez';
 var formattedname = HTMLheaderName.replace('%data%', name);
 var role = 'Web Developer';
 var formattedRole = HTMLheaderRole.replace('%data%',role);
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
	"name": "Rodwel",
 	"role": "Web Developer",
 	"contact": {
 		"mobile": "809-971-4957",
 		"email": "RodwelJunior@gmail.com",
 		"github": "RodwelJunior09",
 		"twitter": "Rodwel09",
 		"location": "Santiago de los caballeros",
 	},
 	"welcomeMenssage": "Welcome Rodwel To the Bio",
 	"skills": ["awessomeness","Programming","teaching","JS"],
 	"pictureUrl": "images/photo.jpg"
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

var proyect = {
	"proyects":[
		{	
			"title": "Javascript_Resume",
			"dates": "30/9/2016",
			"Description": "This is another proyect of udacity in the javascript classroom",
			"Images": ["../images/photo.jpg"]

		}
	]
}


var education = {
	"schools": [
		{
			"Name_schools": "IPISA",
			"location": "Santiago",
			"schools_majors": ["Computer_tecnician"],
			"graduation_years": "2016",
			"online_course": "Udacity",
			"url": "http://www.ipisa.edu.do/" 
		},
		{
			"Name_schools": "Cardenal Beras",
			"schools_city": "Santiago",
			"schools_minors": ["Basic_level"],
			"graduation_years": "2012",
			"online_course": "None",
			"url": "http://cardenalberas.edu.do/"
		}

	],
	"online_course":[
		{
			"title": "Javascript_Syntax",
			"schools": "Udacity",
			"Dates": "2016",
			"Url": "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19506785590923#"
		}

	]
	
}
	
//document.getElementById('education').style.display = "none";

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
}
	
for(job in work.jobs){
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

