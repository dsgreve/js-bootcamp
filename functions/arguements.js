// Multiple Arguements
let add = function (a, b) {
    return a - b
}
let result = add(10, 15)
console.log(result)

// default arguements

let getScoreText = function (name = 'Bob\'s your uncle', score = 0) {
    return `Name: ${name} - Score: ${score}`   
    //return 'Name: ' + name + ' - Score: ' + score
}
let scoreText = getScoreText(undefined, 18000)
console.log(scoreText)

// Tip Calc

let calcTip = function (bill, tipPercent = .15) {
    let tip = bill * tipPercent;
    let total = (bill * tipPercent) + bill;
    return `Your bill was $${bill}. If you tip ${tipPercent}, your tip will be ${tip} and your total will be ${total}`
    
}
let tipTotal = calcTip(150, .10)
console.log(tipTotal) 