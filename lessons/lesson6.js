// Conditional statement

// if(condition) {
//     // execute some code here
// } else {
//     // exectute some code here
// }

// If hour between 6 and 12 then print "Good Morning"
// If hour between 12-18 then print "Good Afternoon"
// Otherwise: "Good Evening"

var hour = 22
if(hour >= 5 && hour < 12) {
    console.log('Good Morning')
} else if( hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}


var ageIsMoreThanEighteen = false
var isUSCitizen = true
if(ageIsMoreThanEighteen && isUSCitizen) {
    console.log('Customer is eligible for Driving Licence')
} else {
    console.log('Customer is NOT eligible for Driving Licence')
}
