const account = {
    balance: 0,
    addBalance: (amount) => {
        account.balance += amount
    },
    withdraw: (amount) => {
        if (amount > account.balance) { //validation
            console.log('Insufficient balance')
            return
        }
        account.balance -= amount
    },
    getBalance: () => account.balance
}

account.addBalance(1000)
account.addBalance(500)
account.withdraw(200)
account.withdraw(2000)
console.log(account.getBalance())
