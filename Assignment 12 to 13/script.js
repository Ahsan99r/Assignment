                     // question1 //
var question1 = +prompt ("write a number.")
if ((question1 >= 65) && (question1 <= 90)) {
    document.write("<h4>uppercase</h4>")
} else if ((question1 >= 97) && (question1 <= 122)) {
    document.write("<h4>lowercase</h4>")
} else {
    document.write("<h4>it is a string</h4>")
}

                     // question no 3 //
var num = prompt("Enter a number:");

if (num > 0) {
    alert("Positive number");
} else if (num < 0) {
    alert("Negative number");
} else {
    alert("Zero");
}

                      // question no 2 //

let input1, input2;

input1 = prompt("Please enter 1st Number = ");
input2 = prompt("Please enter 2nd Number = ");


  if (input1 > input2) {
  document.write((input1)+ " is greater than "+(input2));
} else if (input2 > input1) {
    document.write((input2)+ " is greater than "+(input1));
} else if (input1 == input2) {
    document.write((input1)+ " is equal to "+(input2));
}

                       // question no 4 //

 let input = prompt("Enter a character:");

  if (input.length = 1 &
  input == "a" ||
  input == "e" ||
  input == "i" ||
  input == "o" ||
  input == "u"
) {
  document.write("True");
} else {
  document.write( "False" );
}

                         // questionno 5 //
 var correctPassword = "My Password 123"
 var userPassword = prompt("Enter your password")

 if (userPassword === correctPassword){
    alert("Password validated. Welcome!")
 } else {
    alert("invalid Password. Access denied.")
 }


                         // question no 6 //


var greeting = ""
var hour = 13;
if (hour < 18) {
  var greeting = "Good day";
} else {
  var greeting = "Good evening";
}


                            // question no 7 //

let clock = prompt ("what time is it?")
if (clock >=1  && clock <=12){
    alert("its am.")
} else if (clock >=12 && clock <=24){
    alert("its pm")
}