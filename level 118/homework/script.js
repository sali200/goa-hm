function performConversion() {
    const value = parseFloat(document.getElementById("inputValue").value);
    let output = "";

    if (isNaN(value)) {
        output = "Please enter a valid number.";
    } else {
        const toFahrenheit = (value * 9/5) + 32;
        const toCelsius = (value - 32) * 5/9;

        output = `Value as Celsius: ${value}°C converts to ${toFahrenheit.toFixed(2)}°F<br>
                  Value as Fahrenheit: ${value}°F converts to ${toCelsius.toFixed(2)}°C`;
    }

    document.getElementById("output").innerHTML = output;
}