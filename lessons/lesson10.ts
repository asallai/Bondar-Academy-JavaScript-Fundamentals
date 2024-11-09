
var customerFirstName: string = "John"
var customerLastName: string = "Smith"
var customerAge: number = 25

// we can make own type
type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johnson",
    active: true
}