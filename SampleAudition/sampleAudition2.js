//from here down was copied in from ClickToAddItems
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["auditionForm"].elements.length; 
        loopCounter++) {
        if (document.forms["auditionForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["auditionForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function resetForm() {
    clearErrors();
    document.forms["auditionForm"]["num1"].value = "";
    document.forms["auditionForm"]["num2"].value = "";
    //document.forms["auditionForm"]["stepNum"].value = ""; when i remove this line, console is concatening 2's as if they are string
    //but with line in there, the console will not show any results
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["auditionForm"]["num1"].focus();
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["auditionForm"]["num1"].value;
    var num2 = document.forms["auditionForm"]["num2"].value;
    var stepNum = document.forms["auditionForm"]["stepNum"].value;
    if (num1 == "" || isNaN(num1) || num1 < 0) {
        alert("Starting number must be filled in with a positive number.");
        document.forms["auditionForm"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["auditionForm"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2) || num2 <= num1 || num2 < 0) {
       alert("Ending Number must be filled in with a positive number that is greater than the Starting Number.");
       document.forms["auditionForm"]["num2"]
          .parentElement.className = "form-group has-error";
       document.forms["auditionForm"]["num2"].focus();
       return false;
   }
    if (stepNum == "" || isNaN(stepNum) || stepNum < 0) {
       alert("Step must be filled in with a positive number.");
       document.forms["auditionForm"]["stepNum"]
          .parentElement.className = "form-group has-error";
       document.forms["auditionForm"]["stepNum"].focus();
       return false;
   }
   //from this point down, actual execution/display is handled
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("evenNumbers").innerText = evenNumbers(num1, num2, stepNum);
   return false;
}
 //var numsForDisplay = [];
function evenNumbers(num1, num2, stepNum){
    console.log('started function');
    var output = [];
        console.log("looping from " + num1 + " to " + num2 + " by " + stepNum);
    for (var i= num1; i < num2; i += stepNum){
    if (i % 2 == 0){
        console.log("pushing " + i);
       output.push(i); 
        }
    }

    //return output;
     console.log("output is: " + output.join(','));
    document.getElementById("results").innerText = output.join(',');
return false;}

//document.getElementById("results").innerText = output;