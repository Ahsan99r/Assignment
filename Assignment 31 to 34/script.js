                        // question 1 //
let now = new Date();
document.write(now.toString());


                        // question 2 //

let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonth = months[new Date().getMonth()];
alert("Current month: " + currentMonth);


                         // question 3 //


                        
                        // question 4 //

let day = new Date().getDay();
if (day === 0 || day === 6) {
    alert("It's Fun day");
}



                        // question 5 //

let date = new Date().getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}



                        // question 6 //


                        // question 7 //
let hour = new Date().getHours();

if (hour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}



