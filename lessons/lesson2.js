// Concatination and Interpolation
var price = 80
var itemName = "Table"
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars"  // concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`  // interpolation
console.log(messageToPrint)
console.log(messageToPrint2)


