                         // question no 1 //

// var city = prompt ("Enter the nameof your city")
// if (city === "karachi") {
//     document.write("Welcome to the city of lights " + "<br>")
// } else if (city === "lahore") {
//     document.write("Welcome to Lahore <br>")
// } else {
//     document.write("welcome to "  + city  + "<br>")
// }

                         // question no 2 //

// var gender = prompt ("Write your Gender here")
// if (gender === "Male") {
//     document.write("welcome to sir " + "<br>")
// } else if (gender === "Female"){
//     document.write("Welcome to Mam " + "<br>")
// } else {
//     document.write(" Your Welcome <br>")
// }

                         // question no 3 //

// var color = prompt ("Enter the color of the Traffic signal")
// if (color === "Red"){
//     document.write("Must stop " + "<br>")
// } else if (color === "yellow"){
//     document.write("Ready to Move" + "<br>")
// } else if (color === "Green"){
//     document.write("Move Now" + "<br>")
// } else {
//     document.write("invalid color Entered"  + "<br>")
// }


                         // question no 4 //

// let litres = prompt("Enter the remaining fuel in your car ")
// if (litres < 0.25) {
//   document.write("Please refill the fuel in your car");
// } else if (litres > 0.25) {
//     document.write("Enjoy your ride")
// }


                         // question no 5 //

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// } //true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//false


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//false
// if (c === 13){
// alert("condition 2 is true");
// }//true
// if (++c < 14){
// alert("condition 3 is true");
// }//false
// if(c === 14){
// alert("condition 4 is true");
// }//true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//yes the cost is equal


// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }//alert message is True

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }//Alert mesaage car is smaller then cat

                         // question no 6 //

// var subject1 = 70
// var subject2 = 69
// var subject3 = 80
// var totalMarks = 300

// var obtainedMarks = subject1 + subject2 + subject3
// var percentage = (obtainedMarks / totalMarks ) * 100

// var grade;

// if (percentage >= 80) {
//     grade = "A-one"
//     Remarks = "Excellent"
// } else if (percentage >= 70) {
//     grade = "A"
//     Remarks = "Good"
// } else if (percentage >= 60) {
//     grade = "B"
//     Remarks = "You need to imorove"
// } else {
//      grade = "Fail"
//     Remarks = "sorry"
// }

// document.write("Marks Sheet" + "<br>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%" +"<br>"); 
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");  


                         // question no 7 //

  var Secretnumber = "1"
  var userGuess = prompt("guess the number from 1 to 10")
  if (userGuess === Secretnumber){
    alert("you Win")
  } else if (userGuess !== Secretnumber){
    alert("try again")
  }

                         // question no 8 //

  let num = parseInt(prompt("Enter a number:"));

if (num % 3 === 0) {
    console.log("The number is divisible by 3.");
} else {
    console.log("The number is NOT divisible by 3.");
}

                         // question no 9 //
  
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}                         
                         // question no 10 //
 
 let T = parseFloat(prompt("Enter temperature:"));

if (T > 40) {
    console.log("It is too hot outside.");
} 
else if (T > 30) {
    console.log("The Weather today is Normal.");
}
else if (T > 20) {
    console.log("Today's Weather is cool.");
}
else if (T > 10) {
    console.log("OMG! Today's weather is so Cool.");
}
else {
    console.log("It's very cold!");
}

                         // question no 11 //


let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let op = prompt("Enter operation (+, -, *, /, %):");

let result;

if (op === "+") {
    result = num1 + num2;
}

if (op === "-") {
    result = num1 - num2;
}

if (op === "*") {
    result = num1 * num2;
}

if (op === "/") {
    result = num1 / num2;
}

if (op === "%") {
    result = num1 % num2;
}

console.log("Result: " + result);