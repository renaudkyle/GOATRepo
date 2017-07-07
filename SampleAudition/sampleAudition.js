function getNumbers(num1, num2, stepNum){
    var numbers = [];
     for(var i = num1; i<num2; i+=stepNum){
        if (i % 2 ==0){
           
             numbers.push(i);
   }
     }
   };
//return false;
//}
//----- use line below to make sure you can print out a simple math equation if for loop causing issue comment it out
    //numbers = num1 * num2;

//---- use below if you think the array of numbers needs to be printed out as a string 
    //var numberString = numbers.toString();
    //return numberString;
//------ not sure if below is even needed
    //document.getElementById("results").innerText = numbers;


// function validateValues(){var num1 =document.forms["auditionForm"][num1].value
// var num2 =document.forms["auditionForm"][num2].value
// document.getElementById("numbers").textContent=num1;
// return false;}
//var numbers = [getNumbers];
getNumbers.toString();
var stepNum;
var num1;
var num2;

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["auditionForm"].elements.length; 
        loopCounter++) {
        if (document.forms["auditionForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["auditionForm"].elements[loopCounter]
               .parentElement.className = "form-group";
               return false;
        }
    }    
}

function validateValues() {
    clearErrors();
    var num1 = document.forms["auditionForm"]["num1"].value;
    var num2 = document.forms["auditionForm"]["num2"].value;
    var stepNum = document.forms["auditionForm"]["stepNum"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting number must be filled in with a number.");
        document.forms["auditionForm"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["auditionForm"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2) || num1 >= num2) {
       alert("Ending number must be filled in with a number greater than the starting number.");
       document.forms["auditionForm"]["num2"]
          .parentElement.className = "form-group has-error";
       document.forms["auditionForm"]["num2"].focus();
       return false;
   }
      if (stepNum == "" || isNaN(stepNum)) {
       alert("Step by number must be filled in with a number.");
       document.forms["auditionForm"]["stepNum"]
          .parentElement.className = "form-group has-error";
       document.forms["auditionForm"]["stepNum"].focus();
       return false;
   }
  //numbers = getArr(num1, num2, stepNum);
   //document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("getNumbers").innerText = "test";}
   //{
     //var numbers = [];
     //for(var i = num1; i<num2; i+=stepNum){
       // if (i % 2 ==0){
           
         //    numbers.push(i);
   //}
     //}
   //};

   

//do i still need to determine actual math logic here
   //document.getElementById("addResult").innerText = Number(num1) +
                                                    // Number(num2);
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   //return false;