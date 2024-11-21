const person = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    hobbies: ['reading', 'travelling'],
}

//loop in an object
for (let property in person){
    console.log(property)
    console.log(person[property])
    console.log('-------------------')
}