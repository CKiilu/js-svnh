if ( true ){
  console.log("Ooooh, yeaaah!!");
}
if ( false ){
  console.log("Noooooo!");
}
var emotion = prompt("What emotion are you feeling right now?");
if ( emotion == "sad" || "sadness"){
  console.log("Sorry, I hope your day can get better. ");
}
var secret_number = prompt("What is the secret number?");
if (secret_number != 3){
  console.log("Intruder! I've seen you.");
}
var password = "You jest";
if (prompt("Enter the password: ") != password){
  window.location = "http://www.google.com";
}
