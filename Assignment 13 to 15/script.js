//                     // question no 1 //
// var studentName = []
// studentName = ["Ahmed","shayan","Ahsan","sami","Asad"]

//                      //question no 2 //
// var studentNameObject = new array();

//                      //question no 3 //
// var stringArray = ["Peach","Strawberry","Orange","Banana","Apple"]

//                    //question no 4 //
// var numberArray = [5, 6,7 ,8 ,9, 10]

//                        //question no 
// var booleanArray = [True, False ,True]

//                     //question no 6 //

// var MixedArray = ["Text" , 100, False , null]
//                       //question no 7 //
var Qualification = [ "Qualification<br>"+"SSC<br>" + "HSC<br>" + "BCS<br>" + "BS<br>" + "BCOM<br>" + "MS<br>" + "M.Phil<br>" + "PHD<br>"]
document.write(Qualification, "<br><br><br>")
 

                      // question no 8 //
let studentsName = ["Ahmed","Ahsan","Ali"]
let totalScore = 500
let studentsScore = ["200","400","300"]

let calculation0 = studentsScore[0] / 500 * 100;
let calculation1 = studentsScore[1] / 500 * 100;
let calculation2 = studentsScore[2] / 500 * 100;

document.write(studentsName[0] + " got " + studentsScore[0] + " percentage " + calculation0 +"%" + "<br>")
document.write(studentsName[1] + " got " + studentsScore[1] + " percentage " + calculation1 +"%" + "<br>")
document.write(studentsName[2] + " got " + studentsScore[2] + " percentage " + calculation2    +"%" + "<br><br><br><br><br>")
                               // question no 9 //
                               // Initial array of colors
let colors = ["Red", "Green", "Blue"];
console.log("Initial colors:", colors);

// (a) Add color to the beginning
let addStart = prompt("Enter a color to add at the beginning:");
colors.unshift(addStart);
console.log("After adding to beginning:", colors);

// (b) Add color to the end
let addEnd = prompt("Enter a color to add at the end:");
colors.push(addEnd);
console.log("After adding to end:", colors);

// (c) Add two more colors to the beginning
let color1 = prompt("Enter another color to add at the beginning:");
let color2 = prompt("Enter second color to add at the beginning:");
colors.unshift(color1, color2);
console.log("After adding two colors to beginning:", colors);

// (d) Delete the first color
colors.shift();
console.log("After deleting first color:", colors);

// (e) Delete the last color
colors.pop();
console.log("After deleting last color:", colors);

// (f) Add color at a specific index
let indexAdd = parseInt(prompt("Enter index to add a color:"));
let newColor = prompt("Enter color name:");
colors.splice(indexAdd, 0, newColor);
console.log("After adding color at index:", colors);

// (g) Delete color(s) at specific index
let deleteIndex = parseInt(prompt("Enter index to delete color(s):"));
let deleteCount = parseInt(prompt("How many colors to delete?"));
colors.splice(deleteIndex, deleteCount);
console.log("After deleting colors:", colors);


                     // question no 10 //
var boysScore = [50,60,40]
boysScore.sort(function(a, b) {
    return a - b;
});
document.getElementById("boys-score").innerHTML = (boysScore + "");

                   // question no 11 //
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(2, 4); 


console.log("Cities list:", cities.join(","));
console.log("Selected cities list:", selectedCities.join(","));               
                   // question no 12 // 

var arr = ["This ", " is ", " my ", " cat"];

console.log("Array:");
console.log(arr.join(","));

var str = arr.join("");   // join without commas
console.log("String:");
console.log(str);
                 // question no 13 //