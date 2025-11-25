                     //       Question 1      //           

let num = prompt("Enter a positive integer:");

document.write("number: " + num + "<br>");
document.write("round off value: " + Math.round(num) + "<br>");
document.write("floor value: " + Math.floor(num) + "<br>");
document.write("ceil value: " + Math.ceil(num) + "<br><br>");


                     //       Question 2      //  
let num2 = prompt("Enter a negative floating-point number:");

document.write("number: " + num2 + "<br>");
document.write("round off value: " + Math.round(num2) + "<br>");
document.write("floor value: " + Math.floor(num2) + "<br>");
document.write("ceil value: " + Math.ceil(num2) + "<br><br>");



                     //       Question 3      //  

let num3 = +prompt("Enter a number to find its absolute value:");

document.write("The absolute value of " + num3 + " is " + Math.abs(num3) + "<br><br>");


                     //       Question 4      //  

let dice = Math.floor(Math.random() * 6) + 1;
document.write("random dice value: " + dice + "<br><br>");

                     //       Question 5      //  

let coin = Math.floor(Math.random() * 2) + 1;

if (coin === 1) {
    document.write("1<br>random coin value: Tails<br><br>");
} else {
    document.write("2<br>random coin value: Heads<br><br>");
}


                     //       Question 6      //  

let randomNum = Math.floor(Math.random() * 100) + 1;

document.write("random number between 1 and 100: " + randomNum + "<br><br>");


                     //       Question 7      //  
let weight = prompt("Enter your weight in kilograms:");

document.write("The weight of user is " + weight + " kilograms<br><br>");


                     //       Question 8      //  

let secret = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Enter a number between 1 and 10:");

if (guess === secret) {
    alert("You guessed it!");
} else {
    alert("Try again! The secret number was " + secret);
}


