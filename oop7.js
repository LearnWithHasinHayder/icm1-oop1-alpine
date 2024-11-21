const person = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    // getFullname: function(){
    //     return `${this.fname} ${this.lname}`
    // }
    // getFullname: () => {
    //     // return `${this.fname} ${this.lname}` //undefined
    //     return `${person.fname} ${person.lname}`
    // },
    getFullname: () => `${person.fname} ${person.lname}`
}

console.log(person.getFullname())