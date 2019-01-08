let temp = 140

// logical And operator - true if both sides are true else false

if (temp >= 60 && temp <= 90) {
    console.log("It's pretty nice out")
} else {
    console.log("It's not ideal")
}

//logical Or Operator True if at least one side is true. False otherwise
if (temp <= 0 || temp >= 120) {
    console.log("DO NOT GO OUT")
} else {
    console.log("Do what you want")
}

// //#endregion
let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan?
// At least 1 vegan?
// If neither is vegan?

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Veggies from everyone!")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("A little bit of everything!")
} else {
    console.log("Knock the horns off it and serve it up")
}
