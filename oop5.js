const account = {
    balance: 0,
    addBalance : function(amount){
        this.balance += amount
        // account.balance += amount
    },
    withdraw:function(amount){
        if(amount>this.balance){ //validation
            console.log('Insufficient balance')
            return
        }
        this.balance -= amount
    },
    getBalance:function(){
        return this.balance
    }
}

account.addBalance(1000)
account.addBalance(500)
account.withdraw(200)
account.withdraw(2000)
console.log(account.getBalance())

