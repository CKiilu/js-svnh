function bob() {
    if (age < 21) {
        output_el.textContent = "Sorry, son!";
    } else if (!(age > 35)) {
        output_el.textContent = "ID please.";
    } else if (name === "Bob") {
        output_el.textContent = "I've had enough. You're banned Bob!";
    } else {
        output_el.textContent = "Thank goodness. Come on in";
    }
}
