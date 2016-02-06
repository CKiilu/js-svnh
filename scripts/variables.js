//Test case
var a, b, c;
a = 1, b = 2, c = 3;
d = a + b + c;
a = b;
window.console.log("Value of a: " + a)
b = b + c;
window.console.log("Value of b: " + b)


//Time
var d = new Date();
var hour, minute, midnighth, midnightm;
hour = 10, minute = 30, midnighth = 23, midnightm = 60;
var time = (((midnighth - hour) * 60) + (midnightm - minute)) * 60;
window.console.log(time);

//Var create en masse
var name = "Jake",
    age = 20,
    birthday = "December 25, 2005",
    hometown, occupation = "coder",
    food, friend, height, weight, tree;
console.log("I am %s and I am  a %d year old %s. My birthday is on %s", name, age, occupation, birthday)
