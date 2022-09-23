// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');
const personsname = window.prompt("What's your name");
const inputminutes = window.prompt("Fill your minutes in that you want to convert");
const message = "Hello " + personsname + ", Your input was " + inputminutes + " minutes";
const hours = (inputminutes / 60);
const rhours = Math.floor(hours);
const minutes = (hours - rhours) * 60;
const rminutes = Math.round(minutes);
document.write(message);
document.write("<br><br>");
document.write("<text align=center>Output: " + rhours + " hours" + " and " + rminutes + " minutes");