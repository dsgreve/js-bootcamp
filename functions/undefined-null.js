
//undefined for variable
let name = "Big Chungus"
if (name === undefined) {
    console.log("'please enter a name'")
} else {
    console.log(name)
}

//undefined for function arguements
// undefined as function return default value
let square = function (num) {
    console.log(num)
}
let result = square()
console.log(result)

// when null is shown, it is an assigned value

let age = 27

age = null

console.log(age)