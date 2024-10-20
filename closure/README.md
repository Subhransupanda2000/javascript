# Closure
* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
# Lexical scoping
``
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

``

