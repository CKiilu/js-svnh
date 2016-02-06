//Second approach of enlightened one
if (user_input === "happiness") {
    output_el.textContent = "You are definitely the second most enlightened person here.";
} else if (!user_input) {
    document.querySelector('input').value = "Hey you, why are you doing this? Please type here : "
} else {
    output_el.textContent = "You are doing probably doing this on purpose. Please search for the right thing or define your terms correctly."
}
