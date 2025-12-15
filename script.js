console.log("Calculator JS is connected!");

// Select display element
var displayEl = document.getElementById("display");

// Select all digit buttons
var digitButtons = document.querySelectorAll('button[data-type="digit"]');

console.log(displayEl);
console.log(digitButtons);

// Add click listeners to each digit button
digitButtons.forEach((button) => {
    button.addEventListener("click", () => { // adds a click listener to each button, when user clicks button, the function inside runs
        var clickedValue = button.textContent; // reads the text inside the button. TextContent reads the text inside the element

        if (displayEl.textContent === "0") {
            displayEl.textContent = clickedValue; // replaces 0 with the clicked digit
        } else{
            displayEl.textContent += clickedValue; // If the displayty is not 0 then we append e.g. display is 7 and you click 8, the result is 78.
        }
    });
});