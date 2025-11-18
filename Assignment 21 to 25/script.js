                            // question no 1 //
           
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

                            // question no 2 //

var phone = prompt("Enter your favorite mobile phone model:");

document.write("My favorite phone is: " + phone + "<br>");
document.write("Length of string: " + phone.length);

                            // question no 3 //
var word = "Pakistani";
var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

                           // question no 4 //

var text = "Hello World";
var lastIndex = text.lastIndexOf("l");

document.write("String: " + text + "<br>");
document.write("Last index of 'l': " + lastIndex);

                            // question no 5 //
var word = "Pakistani";
var character = word.charAt(3);

document.write("String: " + word + "<br>");
document.write("Character at index 3: " + character);

                            // question no 6 //


                            // question no 7 //
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);
                            // question no 8 //
 var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.write("Original message: " + message + "<br>");
document.write("After replacement: " + newMessage);

                            // question no 9 //
var str = "472";

document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");

var num = Number(str);

document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num);


                            // question no 10 //
var userInput = prompt("Enter something:");
var upperCase = userInput.toUpperCase();

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase);



                            // question no 11 //

var userInput = prompt("Enter something:");
var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCase);


                            // question no 12 //
var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + result);


                            // question no 13 //

var username = prompt("Enter a username:");

var invalid = false;

for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);

    if (code === 33 || code === 44 || code === 46 || code === 64) {
        invalid = true;
        break;
    }
}

if (invalid) {
    alert("Please enter a valid username");
} else {
    alert("Username accepted: " + username);
}

                            // question no 14 //
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

var searchItem = userInput.toLowerCase();
var index = items.indexOf(searchItem);

if (index !== -1) {
    document.write(searchItem + " is <strong>available</strong> at index " + index + " in our bakery");
} else {
    document.write("We are sorry. " + searchItem + " is <strong>not available</strong> in our bakery");
}








