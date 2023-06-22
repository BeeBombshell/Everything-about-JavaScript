# Everything-about-JavaScript 💯

- [x] What actually is JavaScript?
- [x] Types of functions
- [x] How JS code is executed?
- [x] Hoisting and Fake Functions
- [x] Lexical scope and scope chain
- [x] Var Let Const


# What actually is JavaScript?

- Very versitile language

- Runs in Javascript runtime environment -> Either browser or Node.js (or electronJS for desktop apps)

- Different browsers implement different JS engines. (V8, SpiderMonkey, Chakra, JavaScriptCore)

- Provide logic inside environment. (Browser, Node.js)

- Environment provides APIs to interact with DOM, File System, Network, etc.

- JS syntax is derived from Java. (Functional Programming, OOP)

- JavaScript name is a copyright of Oracle. Organization named ECMA International standardized the language. (ECMAScript)
ACTUAL NAME IS ECMASCRIPT, CALLED ES. Then we have more versions ES1, ES2, ES3, ES5, ES6.

- TC-39 committee defines the feature of ES.

- Vanilla JavaScript: Simple JavaScript.

- NodeJs: JavaScript runtime environment. (V8 engine) has multiple features. (npm, package manager, etc)

- Angular, React, Vue, etc are frameworks. (React is a library) [Changes in UI are very costly, the reason why GPUs are really expensive] To reduce this cost, we use frameworks. Writes code in JSX. (JSX is a syntax extension to JS) This makes optimised UI changes.


## Types of functions in JS

It is possible to:
- pass a function as an argument to another function
- return a function from a function
- assign a function to a variable
with JS. JS functions are very powerful. They are called first class functions/ citizens.

Refer to function.js for more details.

### Function statement 

```js
function sayHello(param){
    console.log("Hello", param);
}
sayHello(); // invocation
sayHello("World");
sayHello(10);
sayHello([1,2,3,4,5])
sayHello({ name: "Bhavya" })
sayHello(); // this will print "Hello undefined"
```

### Functions are first class citizens 

This means functions are treated as a variable.

```js
let a = [1,2,3,4,5];
let b = a;
console.log(b); // assignment by reference is possible
```
We can directly assign values to a variable.

### Function Expression

```js
let fnContainer = function fn() {
    console.log("I am a function expression");
}
```

Now if we call `FnContainer` it will invoke the `fn` function.

### Anonymous Function

```js
let fnContainer = function () {
    console.log("I am a function expression");
    console.log("I am also an anonymous function");
}
```

Whenever we do not give a name to a function, it is called an anonymous function. (In the above example, the name `fn` wasn't necessary, we could identify it by the name `fnContainer`)

**USAGE:** Higher order functions

### IIFE (Immediately Invoked Function Expression)

Back in the time when we didn't have `let` or `const`, `var` was very troublesome. It was possible to create a global variable by mistake. To avoid this, we used IIFE.

It is like `init()` function in python which is called automatically. (Initialization purposes)

```js
(function fn() {
    console.log("I an IIFE");
    console.log("I will be invoked immediately");
})();
```
> Just need to wrap your functions in round braces and add a pair of round braces at the end => converted into IIFE, called automatically.

**USAGE:** In require, parameter pollution w/o let and const, preserving double pollution, closure (library like Jquery)