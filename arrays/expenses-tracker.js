const account = {
    name:'Rupesh Aagde',
    expenses: [],
    income:[],
    addIncome: function(description, amount){
        this.income.push({
            description: 'description',
            amount: amount
        })
    },
    addExpense: function(description, amount){
        this.expenses.push({
            description: 'description',
            amount: amount
        })
    },
    getAccountSumanary: function(account){
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        balance = totalIncome - totalExpenses
        return `${this.name} has total expenses of ${totalExpenses} nd income of ${totalIncome} current balance is${balance}`
    }
}


account.addIncome('salary', 5000)
account.addIncome('extra', 500)
account.addExpense('rent', 900)
account.addExpense('coffee', 5)
account.addExpense('food', 250)
console.log(account.getAccountSumanary())