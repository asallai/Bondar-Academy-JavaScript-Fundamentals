// Loops

// console.log('Hello World!!')
// console.log('Hello World!!')
// console.log('Hello World!!')
// console.log('Hello World!!')
// console.log('Hello World!!')

// for loop

for(let i=0; i<5; i++) {
    console.log('Hello World!! ' + i)
}

// for-of loop

var cars = ["Volvo", "Toyota", "Tesla"]

for(let car of cars) {
    console.log(car)
}

// ES6 syntax for each loop

cars.forEach(car => {
    console.log(car)
})


// stop the loop

for(let car of cars) {
    console.log(car)
    if(car == "Toyota") {
        break
    }
}

