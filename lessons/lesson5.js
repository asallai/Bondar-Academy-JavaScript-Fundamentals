// Logical "AND"
console.log(true && false) // All values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) // Any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibleForDriverLicence = ageIsMoreThanEighteen && isUSCitizen
var eligibleForDriverLicence = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for Driver Licence: ' + eligibleForDriverLicence)

// Logical "NOT"
console.log(!true)

console.log(6 == 10)
console.log(6 !== 10)
