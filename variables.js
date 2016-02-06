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
