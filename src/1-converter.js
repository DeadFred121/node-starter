function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8
}

function formatCelsius(celsius){
  return (`${Math.round(celsius)} °C`)
}

let fahrenheit

let celsius

let weeklyTemps = [24, 31, 26, 23, 28, 28, 30]

// Monday

const mondayTemperature = 24
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of Monday's temp as ${fahrenheit}°F`)
celsius = convertFahrenheitToCelsius(convertCelsiusToFahrenheit(mondayTemperature))
console.log(`On Monday it is ${formatCelsius(celsius)}`)


// Tuesday

const tuesdayTemperature = 31
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of Tuesday's temp as ${fahrenheit}°F`)
celsius = convertFahrenheitToCelsius(convertCelsiusToFahrenheit(tuesdayTemperature))
console.log(`On Tuesday it is ${formatCelsius(celsius)}`)

console.log(`This week's temperatures are going to be ${weeklyTemps}`)
console.log(`and the highest temperature will be: ${Math.max(...weeklyTemps) + '°'}`)


/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
