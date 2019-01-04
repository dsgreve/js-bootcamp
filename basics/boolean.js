// === -> equality operator
// !== -> not equal operator
// < less than operator <= less or equal
// > greater than operator > greater or equal


let temp = 38
let isFreezing = temp <= 32

if (isFreezing) {
    console.log('Frosty is going to love this')
} else {
    console.log('Suns out guns out');
}


//challenge area
// create age var
let age = 44

// calculate if child is 7 or under
let isChild = age <= 7

// calc is senior 65 or older
let isSenior = age >= 65

//print is child

console.log(isChild);
//print is senior
console.log(isSenior);

if (isChild) {
    console.log('You are ' + age + ' so you get a Child discount')
} else if (isSenior) {
    console.log('You are ' + age + ' so you get a Senior discount')
} else {
    console.log('You are ' + age + ' so NO DISCOUNT FOR YOU')
}