// Multiple Arguements
let add = function (a, b) {
    return a - b
}
let result = add(10, 15)
console.log(result)

// default arguements

let getScoreText = function (name = 'Bob\'s your uncle', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}
let scoreText = getScoreText(undefined, 18000)
console.log(scoreText)

// Tip Calc

let calcTip = function (bill = 0, tipPercent = .15) {
    return 'Your bill was ' + bill + '. If you tip ' + tipPercent + ', your tip will be ' + bill * tipPercent + ' and your total will be ' + (bill * tipPercent) + bill
}
let tipTotal = calcTip(150, .20)
console.log(tipTotal) 