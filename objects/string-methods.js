let name = "Dale S. Greve"
//length property
console.log(name.length)

//convert to upper case is method so it needs parentheses
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.italics())

let quote = "     'Someday this war's gonna end'. That'd be just fine with the boys on the boat.    "
let password = "abc123password098"

//includes method
console.log(password.includes('freeze'))

// Trim Method
console.log(quote.trim())
console.log(quote.trimEnd())

// isValidPassword
// greater than 8 - doesn't contain password

// let isValidPw = function (pw) {
//   if (pw.length > 8 && !pw.includes('password')) {
//     return true
//   } else {
//     return false
//   }
// }

let isValidPw = function (pw) {
  return pw.length > 8 && !pw.includes('password')
}

console.log(isValidPw("abc1"))
console.log(isValidPw("abc1password"))
console.log(isValidPw("abc123456"))
