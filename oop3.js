const person  = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    email: 'john@doe.com'
}

// Object.freeze(person)
// Object.seal(person)

const pi = 3.14;

pi = 2

person.age = 35 //mutable immutable
person.city = 'Miami' //mutable immutable
console.log(person)