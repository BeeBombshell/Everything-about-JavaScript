// types of function -> 
// function statement
// define a function
function sayHello(param) {
    console.log('Hello', param)
}
// function invocation
sayHello(10)
sayHello('Hello')
sayHello([1, 2, 3, 4, 5])
sayHello({ name: 'Bhavya' })
sayHello()

let rVal = sayHello()
console.log("rVal", rVal)

// IIFE -> Immediately Invoked Function Expression



// arrow function

// first class citizens