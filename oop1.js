const country = {
    name: "Banglaesh",
    capital: "Dhaka",
    language: "Bengali",
}

const anotherCountry = {
    name: "USA",
    capital: "Washington DC",
}

country.population= "17crore"
country.language= "Bangla"
delete(country.population)

console.log(country);
console.log(anotherCountry);