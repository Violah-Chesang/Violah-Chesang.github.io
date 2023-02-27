//form variable
let form = document.getElementById('myForm');
    
//create an eventlistener that when the form is submitted the code runs
form.addEventListener("submit", e => {
    e.preventDefault();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById('gender').value;
    let output = document.getElementById('output');
        
    //once the output is displayed clear the fields
    document.getElementById('dob').value = '';
    document.getElementById('gender').value = '';
        
    //split the output by /
    var dobSplit = dob.split('/');
    //variables for day,month, century, and year
    var DD = parseInt(dobSplit[0]);
    var MM = parseInt(dobSplit[1]);
    var year = dobSplit[2];
    var CC = parseInt(year.substring(0,2));
    var YY = parseInt(year.substring(2,4));
    

    //check if the dob is valid

    let dobValidation = validation(DD, MM, year);
    if(!dobValidation) {
        return output.innerHTML = 'Please enter a valid date of birth and should be in the correct format of dd/mm/yyyy.';
    }


    //calculate day
     let d = calculateDay(DD, MM, CC, YY);

        

    //prepopulated arrays for storing akan names
    let maleNames = ['Kwasi', 'Kwadwa', 'Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    let femaleNames = ['Akosua', 'Adwaa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    //return Akan names
    let akanName = matchAkanName(maleNames, femaleNames, d, gender, output);
});


function calculateDay(DD, MM, CC, YY) {
    let day = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    return day;
}
//Instead of the loop, you can index the list directly with variable ‘d’. That is instead of using i which is checked against d
function matchAkanName(maleNames, femaleNames, d, gender, output){
    if (gender === 'male'){
                output.innerHTML =`Your Akan name is ${maleNames[d]}`;

    }else if(gender === 'female'){
                output.innerHTML =`Your Akan name is ${femaleNames[d]}`;  

    }else{
        output.innerHTML = `An error ocurred! Could not get your Akan Name`;
    }
}


//validate day, month and the length of year
function validation(DD, MM, year) {
    if(DD > 0 && DD <= 31 && MM > 0 && MM <= 12 && year.length === 4) {
        return true;
    }else{
        return false;
    }
}
