// Function - input, code, output

let greetUser = function () {
    console.log("Welcome User")
}

greetUser()
greetUser()
greetUser()



let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area

// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9)
    return celcius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
//call a coupld of times 32 -> 0, 68 -> 20

//Print converted values
