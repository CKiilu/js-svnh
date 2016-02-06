//Swapping text in divs
var source_text = document.querySelector('#source').textContent;
var destination_text = document.querySelector('#destination').textContent;
document.querySelector('#destination').textContent = source_text;
document.querySelector('#source').textContent = destination_text;
