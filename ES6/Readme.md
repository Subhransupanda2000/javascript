# ES6 feactures:
# New Features in ES6
```
The let keyword
The const keyword
Arrow Functions
The ... Operator
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules
```
# The let keyword:
```
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```
# The const keyword:
```
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
```
# Arrow function:
```
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```
# The spread operator:
```
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
```
# The for/of loop
```
for (variable of iterable) {
  // code block to be executed
}
```
# js maps:
```
const fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200]
]);
```
# js sets:
```
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
```
# js classes:
```
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```
# js promises:
```
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
# js Symbol type:
```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined
```
# function rest parameters:
```
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

```
# Default methods:
```
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
```
# string.includes():
```
let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true
```
# String.startsWith():
```
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello")   // Returns true
```
# String.endsWith():
```
var text = "John Doe";
text.endsWith("Doe")  
```
# Array.From():
```
Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
```
# Array.keys():
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}
```
# Array.find():
```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
# Array.FindIndex():
```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
# math.trunc():
```
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);   // return -4
```
# Math.sign():
```
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
```
# Math.cbrt():
```
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5
```
# Math.Log2():
```
Math.log2(2);    // returns 1
```
