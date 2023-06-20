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

