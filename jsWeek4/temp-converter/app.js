const { toCelsius, toFahrenheit } = require("./temp-utils");

const [,, unit, value] = process.argv;

if (!unit || isNaN(value)) {
    console.log("Usage: node app.js <c|f> <value>");
    process.exit(1);
}

if (unit.toLowerCase() === 'c') {
    const tempFahrenheit = toFahrenheit(value);
    console.log(`The temperature of ${value} Celsius is ${tempFahrenheit} degree Fahrenheit.`)
} else if (unit.toLowerCase() === "f") {
    const tempCelsius = toCelsius(value);
    console.log(`The temperature of ${value} Fahrenheit is ${tempCelsius} degree Celsius.`)
} else {
    console.log("Please present a valid value. <c|f>");
}