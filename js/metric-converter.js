// Metric Converter Tool

// Get the conversion button
let convertButton = document.getElementById("convert-btn");

// Add an event listener to the button
convertButton.addEventListener("click", function(event) {

```
// Prevent the form from submitting
event.preventDefault();

// Get the numeric input from the HTML
let input_value = document.getElementById("conversion-value").value;

// Convert the input to a number
input_value = parseFloat(input_value);

// Get the select list
let conversionList = document.getElementsByTagName("select")[0];

// Get the selected option index
let choice = conversionList.selectedIndex;

// Create a variable for the result
let result;

// Convert the value based on the selected option
if (choice === 0) {

    result = input_value * 2.54;

    document.getElementById("conversion-result").innerHTML =
        input_value + " inches is " + result.toFixed(2) + " centimeters";

} else if (choice === 1) {

    result = input_value * 30.48;

    document.getElementById("conversion-result").innerHTML =
        input_value + " feet is " + result.toFixed(2) + " centimeters";

} else if (choice === 2) {

    result = input_value * 0.91;

    document.getElementById("conversion-result").innerHTML =
        input_value + " yards is " + result.toFixed(2) + " meters";

} else if (choice === 3) {

    result = input_value * 1.61;

    document.getElementById("conversion-result").innerHTML =
        input_value + " miles is " + result.toFixed(2) + " kilometers";

} else if (choice === 4) {

    result = input_value * 0.39;

    document.getElementById("conversion-result").innerHTML =
        input_value + " centimeters is " + result.toFixed(2) + " inches";

} else if (choice === 5) {

    result = input_value * 0.0328;

    document.getElementById("conversion-result").innerHTML =
        input_value + " centimeters is " + result.toFixed(2) + " feet";

} else if (choice === 6) {

    result = input_value * 1.09;

    document.getElementById("conversion-result").innerHTML =
        input_value + " meters is " + result.toFixed(2) + " yards";

} else if (choice === 7) {

    result = input_value * 0.62;

    document.getElementById("conversion-result").innerHTML =
        input_value + " kilometers is " + result.toFixed(2) + " miles";

} else {

    document.getElementById("conversion-result").innerHTML =
        "Invalid conversion choice.";

}
```

});
