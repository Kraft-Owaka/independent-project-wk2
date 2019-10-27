
var a = document.getElementById("btnClick");
// creates a button "a" from the "btnClick" in html
a.addEventListener("click", function(){// add an onClick event litener to btClick so that when clicked, it runs the function})
var DOB = document.getElementById('dateOB'). valueAsDate//variable "DOB" stores the value from the daye picker
var dayOfBirth = DOB.getDay();//variable "dateOfBirth" returns an integer value for the day of the week 
//0-6:Sunday-Saturday
var radioselect = document.querySelector('input[name="gender"]:checked').value;//var "radioselect gets the choice selected from the radio button"
        if(radioselect == "male" && dayOfBirth == 0){
            documents.getElementById("resultSelect").innerHTML = "Kwasi";
        }
        else if(radioselect == "male" && dayOfBirth == 1){
            documents.getElementById("resultSelect").innerHTML = "Kwadwo";
        }
        else if(radioselect == "male" && dayOfBirth == 2){
            documents.getElementById("resultSelect").innerHTML = "Kwabena";
        }
        else if(radioselect == "male" && dayOfBirth == 3){
            documents.getElementById("resultSelect").innerHTML = "Kwaku";
        }
        else if(radioselect == "male" && dayOfBirth == 4){
            documents.getElementById("resultSelect").innerHTML = "Yaw";
        }
        else if(radioselect == "male" && dayOfBirth == 5){
            documents.getElementById("resultSelect").innerHTML = "Kofi";
        }
        else if(radioselect == "male" && dayOfBirth == 6){
            documents.getElementById("resultSelect").innerHTML = "Kwame";
        }
        else if(radioselect == "female" && dayOfBirth == 0){
            documents.getElementById("resultSelect").innerHTML = "Akosua";
        }
        else if(radioselect == "female" && dayOfBirth == 1){
            documents.getElementById("resultSelect").innerHTML = "Adwoa";
        }
        else if(radioselect == "female" && dayOfBirth == 2){
            documents.getElementById("resultSelect").innerHTML = "Abenaa";
        }
        else if(radioselect == "female" && dayOfBirth == 3){
            documents.getElementById("resultSelect").innerHTML = "Akua";
        }
        else if(radioselect == "female" && dayOfBirth == 4){
            documents.getElementById("resultSelect").innerHTML = "Yaa";
        }
        else if(radioselect == "female" && dayOfBirth == 5){
            documents.getElementById("resultSelect").innerHTML = "Afua";
        }
        else if(radioselect == "female" && dayBirth == 6){
            documents.getElementById("resultSelect").innerHTML = "Ama";
        }
    });