//student score, total possible score
//15/20 75% -> You got a C(75%)!

let gradeCalc = function(studentScore, totalScore) {
    let gradePercent = Math.ceil((studentScore / totalScore ) * 100);
    if (gradePercent >= 90) {
        return `You scored ${studentScore}/${totalScore}.  You received an A(${gradePercent}%)!`
    } else if (gradePercent >= 80) {
        return `You scored ${studentScore}/${totalScore}.  You received an B(${gradePercent}%)!`
    } else if ( gradePercent >= 70) {
        return `You scored ${studentScore}/${totalScore}.  You received an C(${gradePercent}%)!`
    } else if (gradePercent < 70) {
        return `You scored ${studentScore}/${totalScore}.  Sorry you did not pass the test with (${gradePercent}%)!`
    }
}

let finalGrade = gradeCalc(70, 100)
console.log(finalGrade)

let gradeCalcTwo = function(studentScore, totalScore) {
    let gradePercent = Math.ceil((studentScore / totalScore ) * 100);
    let letterGrade = ''
    if (gradePercent >= 90) {
        letterGrade = 'A'
    } else if (gradePercent >= 80) {
       letterGrade = 'B'
    } else if ( gradePercent >= 70) {
        letterGrade = 'C'
    } else if (gradePercent < 70) {
        letterGrade = 'NP'
    }
    return `You scored ${studentScore}/${totalScore}.  You received an ${letterGrade}(${gradePercent}%)!`
}
let finalGradeTwo = gradeCalcTwo(85, 100)
console.log(finalGradeTwo)