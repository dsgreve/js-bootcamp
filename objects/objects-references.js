let myAccount = {
  name: "Dale Greve",
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
  //console.log(account)
}

let addIncome = function (account, income) {
  account.income = account.income + income
}

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// addIncome
let getAccountSummary = function (account) {
  let accountBalance = account.income - account.expenses
  return `Account for ${account.name} has $${accountBalance}. $${account.income} income and $${account.expenses} in expenses`
}




// getAccountSummary
// Account for Dale has $900. $1000 income. $100 in income


addIncome(myAccount, 2400)
addExpense(myAccount, 2.50)
addExpense(myAccount, 200)
addExpense(myAccount, 900)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
// resetAccount
//getAccountSummary