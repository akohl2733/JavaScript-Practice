// Hoisting quiz

console.log(a);      // hoisted but undefined
console.log(b);      // referenceError
console.log(c);      // referenceError
foo();               // Fully hoisted and will run the output
bar();               // Assigned to a constant so will not run - ReferenceError

var a = 1;
let b = 2;
const c = 3;

function foo() {
  console.log("foo called");
}

const bar = function () {
  console.log("bar called");
};