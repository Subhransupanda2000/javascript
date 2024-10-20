# Closure
* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
# Lexical scoping
```
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

```
# Scoping with let and const
* blocks with curly braces do not create scopes:
```
  if (Math.random() > 0.5) {
  var x = 1;
  } else {
  var x = 2;
  }
  console.log(x);

 ```
* In ES6, JavaScript introduced the let and const declarations, which, among other things like temporal dead zones, allow you to create block-scoped variables.
```
  if (Math.random() > 0.5) {
  const x = 1;
  } else {
  const x = 2;
  }
  console.log(x); // ReferenceError: x is not defined
```
# Example
```
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
document.getElementById("size-12").onclick = size12;
<button id="size-12">12</button>

```
# Emulating private methods with closures
```
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

```

