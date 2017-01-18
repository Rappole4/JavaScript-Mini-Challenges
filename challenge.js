// 1.Create an object called Multiplier with two methods: 
// multiply and getCurrentValue. multiply should initially 
// return the number supplied * 1 and from then on whatever 
// the current value is times the number supplied.getCurrentValue 
// should return the last answer returned from multiply.

function Multiplier() {
	this.currentValue = 1
	this.multiply = function(R){
		this.currentValue*=R
		return this.currentValue;
	}
	this.getCurrentValue = function(){
		this.currentValue
		return this.currentValue;
	}
}
var Rob = new Multiplier;
var Heidi = new Multiplier;


// 2.Implement an object model that allows you to store strings that 
// represent a Photo. Your model should include an Album object that 
// can contain many Photo objects in its photos attribute. Each Album 
// should allow you to add a new photo, list all photos, and access a 
// specific photo by the order it was added. Each Photo should store 
// the photo's file name and the location the photo was taken in as 
// strings. Create instances of each object defined to prove that your 
// object model works.

function Album(){
	var photos = [];
	var locations = [];
	this.addPhoto = function(photo){
		photos.push(photo);
	}
	this.addLocation = function(location){
		locations.push(location);
	}
	this.listPhotos = function() {
		return photos.toString();
	}
	this.listLocations = function() {
		return locations.toString();
	}
	this.getPhoto=function(index){
		return [photos[index],locations[index]];
	}
	this.hasPhoto = function(photo) {
		return photos.includes(photo);
	}
}

var realAlbum1 = new Album();
var realAlbum2 = new Album();
var realAlbum3 = new Album();
realAlbum1.addPhoto("Blue_Water.jpg");
realAlbum1.addLocation("Mountain Lake in Idaho");
realAlbum1.addPhoto("Leo.jpg");
realAlbum1.addLocation("Myrtle Beach");
// realAlbum1.addPhoto("Boat.jpg");
realAlbum1.addLocation("Atlantic Ocean");
realAlbum2.addPhoto("Robbie.jpg");
realAlbum2.addLocation("Boston, MA");
realAlbum3.addPhoto("WeddingMan.jpg");
realAlbum3.addLocation("Raleigh, NC");


// 3.Create a prototypical Person object. From this object, extend a 
// Teacher object and a Student object. Each of these objects should 
// have attributes and methods pertinent to what they describe. Also 
// create a School object that should be able to store instances of 
// students and teachers. Make sure to write code afterwards that creates 
// instances of these objects to make sure that what you've written works 
// well and you're able to store the necessary data in each object.

function Person(age, lunch) {
	var ageOpt=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102];
	var lunchOpt=["8:00","8:15","8:30","8:45","9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","1:00","1:15","1:30","1:45","2:00","2:15","2:30","2:45","3:00"];

	this.age=ageOpt[age];
	this["lunch time"]=lunchOpt[lunch];
}
function Teacher(grade1, grade2, subject, years) {
	var gradeOpt=["Kindergarden","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","Associates Degree","Bachelors Degree", "Masters Degree", "Continued Education"];
	var subjectOpt=["Math","Science","History","English","Spanish","French","Life Skills","Physical Education", "Health", "Music", "Art", "Shop", "Computer", "All Subjects"];
	var yearsOpt=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
	this["teaches from"]=gradeOpt[grade1];
	this["to"]=gradeOpt[grade2];
	this["subject taught"]=subjectOpt[subject];
	this["years teaching"]=yearsOpt[years];
	Person.apply(this,Array.prototype.slice.call(arguments,4));
}
function Student(favsubject,leastsubject) {
	var subjectOpt=["Math","Science","History","English","Spanish","French","Life Skills","Physical Education", "Health", "Music", "Art", "Shop", "Computer"];
	this["favorite subject"]=subjectOpt[favsubject];
	this["least favorite subject"]=subjectOpt[leastsubject];
	Person.apply(this,Array.prototype.slice.call(arguments,2));
}
function School() {
	var teacher=[];
	var student =[];
	this.addTeacher=function(teachers){
		teacher.push(teachers);
	}
	this.addStudent=function(students){
		student.push(students);
	}
	this.listTeacher=function(){
		return teacher.toString();
	}
	this.listStudent=function(){
		return student.toString();
	}
}
var NYCDA = new School();
var Harris_Creek_Elementary = new School();
var Sundance = new School();

var Robert_R = new Student(0,4,30,18);
var James_S = new Student(0,4,20,18);
var Agnes_Z = new Teacher(0,5,6,21,102,14);
var Cam_C = new Teacher(16,16,12,5,35,18);
var Heidi_R = new Teacher(0,12,13,13,36,16)


// Extra Challenge: If you have time and are looking for an extra challenge 
// try using your solution to problem 2 to create a simple one page photo 
// gallery. This page should display all photos stored in your photo gallery 
// object. Try your best to implement modern design trends and if you are 
// looking for even more then give a user the option to press a button to 
// animate the images on the page somehow. Have fun!

document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("submit1").onclick = function(){
		realAlbum1.addPhoto( document.getElementById("img1").value )
	}
	document.getElementById("submit2").onclick = function(){
		console.log(document.getElementById("img2").value)
		if(realAlbum1.hasPhoto(document.getElementById("img2").value)){
			document.getElementById("replace").src=document.getElementById("img2").value
		}
	}
});
