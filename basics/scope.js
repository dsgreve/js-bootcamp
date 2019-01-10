//js uses Lexical scoping

//ScopeTree
// Global Scope (varOne)
// ----Local Scope (varTwo)
//----------Local Scope (varFour)
// ----Local Scope (varThree)
let varOne = 'varOne -g'


if (true) {
    console.log(varOne)
    let varTwo = 'varTwo -l'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
        console.log(varFour)
        console.log(varTwo)
        console.log(varOne)
    }
}

if (true) {
    let varThree = 'varThree -l'
    console.log(varThree)
}

//console.log(varTwo)
