// console.log(global); // in browser we have window object instead of global
// console.log(this) // equals an empty object in nodejs environment
// this equals the window object in browser

// console.log("a is: ", a);
// var a;
// console.log("a is: ", a);
// a = 10;
// console.log("a is: ", a);


fn();
function fn() {
    console.log("I can be called even before my declaration");
}