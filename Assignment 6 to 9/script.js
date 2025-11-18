 
                            // question no 1 //
 
 var value = 10
document.write("the value of A is " + value + "<br>")

document.write("..................................................  <br><br>")

++value
document.write("Now the value of A is " + value + "<bbr><br>")

++value
document.write("Now the value of A is " + value + "<bbr><br><br>")

--value
document.write("Now the value of A is " + value + "<bbr><br>")

--value
document.write("Now the value of A is " + value + "<br><br><br>")

                           // question no 2 //


// var a = 2, b = 1;
// --a; 
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// var a=1;
// var b=0;
// var Result=3;
// document.write("a is  "+a+ "<br>")
// document.write("b is  "+b+ "<br>")
// document.write("Result is "+Result+ "<br>")


let a = prompt("write a value of a.");
let b = prompt("write a value of b.");
//            1     0     2    0
let result = --a - --b + ++b + b--

document.write("a = ", a,"<br>")
document.write("b = ", b,"<br>")

document.write("--a =", a, "<br>")
document.write("--b =", b, "<br>")
document.write("++b =", b,"<br>")
document.write("b-- =", b,"<br><br>")

document.write("the answer is ", result,"<br>");


                           // question no 3 //

var userName = prompt("Enter your Name")
var all = "<h1> Hello "+ userName + "! Welcome to our website.  </h1> <br><br>"
document.write(all) 


                           // Question no 4 //
 var tableNumber = prompt("Enter A Number To Display Your Table")
 document.write(tableNumber + " x 1 =" + (tableNumber*1) + "<br>")
 document.write(tableNumber + "x 2 = " + (tableNumber*2) + "<br>")
 document.write(tableNumber + "x 3 = " + (tableNumber*3) + "<br>")
 document.write(tableNumber + "x 4 = " + (tableNumber*4) + "<br>")
 document.write(tableNumber + "x 5 = " + (tableNumber*5) + "<br>")
 document.write(tableNumber + "x 6 = " + (tableNumber*6) + "<br>")
 document.write(tableNumber + "x 7 = " + (tableNumber*7) + "<br>")
 document.write(tableNumber + "x 8 = " + (tableNumber*8) + "<br>")
 document.write(tableNumber + "x 9 = " + (tableNumber*9) + "<br>")
 document.write(tableNumber + "x 10 = " + (tableNumber*10) + "<br><br><br>")


                           // question no 5 //


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarks = 100;


var marksSubject1 = (+prompt("Enter the obtained marks for " + subject1 + ":"));
var marksSubject2 = (+prompt("Enter the obtained marks for " + subject2 + ":"));
var marksSubject3 = (+prompt("Enter the obtained marks for " + subject3 + ":"));

var percentageSubject1 = (marksSubject1 / totalMarks) * 100;
var percentageSubject2 = (marksSubject2 / totalMarks) * 100;
var percentageSubject3 = (marksSubject3 / totalMarks) * 100;
var sumofmarks=(totalMarks*3);
var sumofobt=(marksSubject1+marksSubject2+marksSubject3);
var tptalper=(sumofobt/ sumofmarks)*100;

document.write("<table >");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksSubject1 + "</td><td>" + percentageSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksSubject2 + "</td><td>" + percentageSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksSubject3 + "</td><td>" + percentageSubject3 + "%</td></tr>");

document.write("<tr><td colspan='4'><hr><h2>Overall Result</h2><hr><br>Total  Marks: " + sumofmarks + "</td></tr>");
document.write("<tr><td colspan='4'>Total Obtained Marks: " + sumofobt + "</td></tr>");

document.write("<tr><td colspan='4'>Overall Percentage: " + tptalper+ "%</td></tr>");
document.write("</table>");
