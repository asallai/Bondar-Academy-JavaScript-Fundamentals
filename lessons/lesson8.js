// Declarative function
function helloOne() {
    console.log('Hello one!')
}

helloOne()


// Anonymus function
var helloTwo = function() {
    console.log('Hello two!')
}

helloTwo()


// ES6 (arrow) function
var helloThree = () => {
    console.log('Hello three!')
}

helloThree()


// Function with arguments
function printName(name, lastName) {
    console.log(name + ' ' + lastName)
}

printName('Mike', 'Smith')


// Function with return
function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(20)
console.log(myResult)


// import one function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

// import everthing
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)