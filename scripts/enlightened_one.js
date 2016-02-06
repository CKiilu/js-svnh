var user_input = document.querySelector('input#search').value;
var output_el = document.querySelector('#output');

if (user_input !== "happiness") {
    if (!user_input) {
        //This tells something important about empty strings
        //What would happen if we tried to use?
        //     user_input =
        document.querySelector('input').value = "Hey you! Yes, you. Type here : z";

    } else {
        output_el.textContent = "Sorry, you are looking or the wrong thing. Please try again."
    }
} else {
    output_el.textContent = "Namaste oh enlightened one."
}
