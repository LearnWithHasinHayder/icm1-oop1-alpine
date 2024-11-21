const country = {
    name: "Banglaesh",
    capital: "Dhaka",
    language: "Bangla",
    introduce: function(){
        // const output = "The capital of " + this.name + " is " + this.capital + ". The people speak " + this.language + "."
        const output  = `The capital of ${this.name} is ${this.capital} and the people speak ${this.language}`
        console.log(output)
    },
    getCapital(){
        return this.capital
    },
    getName(){
        return this.name
    }
}

country.introduce()

const capital = country.getCapital()
console.log(capital)
