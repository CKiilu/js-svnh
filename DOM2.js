//User input on web page
var visitor_name = window.prompt("Kindly enter your name.");
var welcome_message = "Hello" + visitor_name;
document.querySelector('#greeting').textContent = welcome_message;
var town = window.prompt("What is your hometown?");
document.querySelector('#hometown').textContent = town;
