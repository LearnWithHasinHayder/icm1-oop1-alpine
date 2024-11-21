const person = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    getFname(){
        return this.fname
    },
    getLname(){
        return this.lname
    },
    getAge(){
        return this.age
    },
    getFullName(){ //computed property
        // return this.fname + ' ' + this.lname
        return `${this.fname} ${this.lname}`
    },
    setFname(fname){
        this.fname = fname
    },
    setLname(lname){
        this.lname = lname
    },
    setAge(age){
        if(age <= 0){
            console.log('Age must be greater than 0')
            return
        }

        if(age > 110){
            console.log('Age must be less than 110')
            return
        }
        this.age = age
    }
}

// Object.freeze(person)

person.setAge(11)

console.log(person.getFname())
console.log(person.getLname())
console.log(person.getAge())
console.log(person.getFullName())
