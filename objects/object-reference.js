let myAccount = {
    name: 'Rupesh',
    expense: 0,
    income: 0
}
let addexpense = function(account, expense){
    account.expense = account.expense + expense
}

let addIncome = function(account, income){
    account.income = account.income + income
}

let resetAccount = function(account){
    account.expense = 0
    account.income = 0
}

let getSummary = function(account){
    let pendingAmount = account.income - account.expense
    return `Account for ${account.name} has ${pendingAmount}. with ${account.income} income and ${account.expense} expense`
}
addIncome(myAccount,1000)
addexpense(myAccount,300)
addexpense(myAccount,532)

console.log(getSummary(myAccount))

resetAccount(myAccount)
console.log(getSummary(myAccount))


