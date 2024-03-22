// Define a function to determine the weather condition based on temperature
function determineWeather(temperature: number): string {
    if (temperature < 0) {
        return "Freezing";
    } else if (temperature >= 0 && temperature < 10) {
        return "Very Cold";
    } else if (temperature >= 10 && temperature < 20) {
        return "Cold";
    } else if (temperature >= 20 && temperature < 30) {
        return "Mild";
    } else if (temperature >= 30 && temperature < 40) {
        return "Warm";
    } else {
        return "Hot";
    }
}

 // Test the function
const temperature1 = 5;
const temperature2 = 25;

console.log(`At ${temperature1} degrees Celsius, the weather is ${determineWeather(temperature1)}.`);
console.log(`At ${temperature2} degrees Celsius, the weather is ${determineWeather(temperature2)}.`);
