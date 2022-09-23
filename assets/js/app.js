// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');
let personsname = window.prompt("What's your name")
let inputminutes = window.prompt("Fill your minutes in that you want to convert")
const message = "Hello " + personsname + ", Your input was " + inputminutes + " minutes";
let hours = (inputminutes / 60);
let rhours = Math.floor(hours);
let minutes = (hours - rhours) * 60;
let rminutes = Math.round(minutes);
document.write(message);
document.write("<br>,<br>");
document.write("<text align=center>Output: " + rhours + " hours" + " and " + rminutes + " minutes");