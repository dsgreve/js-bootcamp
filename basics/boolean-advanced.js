let isAccountLocked = false
let userRole = 'user' //or admin


if (isAccountLocked) {
    console.log('Account Is Locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome.')
}


// check the temp
let temp = 65

if (temp <= 32) {
    console.log('Frosty is going to love this')
} else if (temp >= 110) {
    console.log('Stay Inside and crank the AC');
} else {
    console.log('Safe to go outside')
}