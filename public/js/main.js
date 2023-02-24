//access user dob from the html input field and store the:
// dob is a variable called dob
//gender to gender, output para to output and myForm to form    
    
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
        output.innerHTML = `DOB: ${YY} </br> Gender: ${gender}`;
    });

//validate the dob if:
//  i)  It's in the correct format
//  ii) The date is greater than 0 and less than 31
// iii) The month is greater than 0 and less than twelve

// function isDobValid(){
//     if(!dob || !dob.includes('/')){
//         return "Please enter your date of birth in the correct format";
//     }
//     if(DD > 0 && DD <= 31 && MM > 0 && MM <= 12 && year.length === 4){
//         let day = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    
//     return day;
//     }
// }

// output.innerHTML = isDobValid();


//if all the above conditions are met, store the following variables:
// DD- Date of birth
// MM- Month
// CC- Century
// YY- Year
//use the given formula to caldulate day of the week and store it in the day variable


//put the akan names in 2 arrays for male and female respectively

let maleNames = ['Kwasi', 'Kwadwa', 'Kwabena','Kwaku','Yaw','Kofi','Kwame'];
let femaleNames = ['Akosua', 'Adwaa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
//create a function that accepts gender and dob paramenters
//if gender is male, access the index of day in the malaName's array
//tell the male user their akan name in the output paragraph
//else if gender is female access the index of day in the femalaName's array
//tell the female user their akan name in the output paragraph(create a function)
//create an event listener click when the button is clicked, the above function is called.
// btn.addEventListener('click',()=> { 
//     if (gender === 'male'){
//         for(let i = 0; i < maleNames.length; i++){
//             if(i === d){
//                 output.innerHTML =`Your Akan name is ${maleNames[i]}`;
//                 break;
//             }
//         }
//     }else if(gender === 'female'){
//         for(let i = 0; i < femaleNames.length; i++){
//             if(i === d){
//                 output.innerHTML =`Your Akan name is ${femaleNames[i]}`;
//                 break;
//             }   
//         }
//     }else{
//         output.innerHTML = `An error ocurred! Could not get your Akan Name`;
//     }
        
// });