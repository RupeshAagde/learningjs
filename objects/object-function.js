let convertFahrenheit = function(fahrenheit){
    let celsius = (fahrenheit-32) *(5/9)
    let kelvin = celsius + 273.15

    return {
        converter: `${fahrenheit} fahrenheit is eaqual to ${celsius} celsius and ${kelvin} kelvin.`,
        fahrenheitValue: `${fahrenheit} fahrenheit `,
        celsiusValue: `${celsius} celsius `,
        kelvinValue: `${kelvin} kelvin`
    }
    
}
let values = convertFahrenheit(32)
console.log(values.converter)
console.log(values.fahrenheitValue)
console.log(values.celsiusValue)
console.log(values.kelvinValue)