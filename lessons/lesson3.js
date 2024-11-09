// Objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Volvo", "Toyota", "Tesla"]
}

console.log(customer)

// Dot notation
console.log(customer.lastName)
// Bracket notation
console.log(customer['lastName'])

customer.firstName = 'Mike' // new value
console.log(customer.firstName)

console.log(`${customer.firstName} ${customer.lastName} `)


// Arrays

var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])
console.log(car[1])

car[1] = "BMW"
console.log(car[1])

console.log(customer.cars[0])