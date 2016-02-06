var response, image_path;
var secret_saying = document.querySelector('#message').textContent;

function path() {
    if (secret_saying === "You jest") {
        response = "Open Sesame!!";
        image_path = "images/open_door.png";
    } else {
        response = "You shall not pass!!";
        image_path = "images/gandalf.png";
    }

    document.querySelector('#result').textContent = response;
    document.querySelector('#img').textContent = image_path;
}
