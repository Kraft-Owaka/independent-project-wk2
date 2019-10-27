
var mylist ["akosua","audwuoa","abenaa","akua","yaa","afa","ama"]

var YY = 2020;
var MM = 11;
var DD = 04;
var CC = (YY/100).toFixed();
parseInt(CC);


var mylist = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var mylist = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afaa","Ama"];

var myday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

var a = document.getElementById("btnClick");
// creates a button "a" from the "btnClick" in html
a.addEventListener("click", function(){// add an onClick event litener to btClick so that when clicked, it runs the function})
var DOB = document.getElementById('dateOB'). valueAsDate//variable "DOB" stores the value from the daye picker
var dayOfBirth = DOB.getDay();//variable "dateOfBirth" returns an integer value for the day of the week 
//0-6:Sunday-Saturday
var radioselect =document.querySelector('input[name="gender"]:checked').value;//var "radioselect gets the choice selected from the radio button"