# EventLoop
* javascript is a single threaded, non blocking ,asycronous concurrent language.
* It has a call stack ,an event loop and a callback queue + other api
* v8 engine is the js runntime which has a callstack and heap
* The heap is the used for memory allocation and the stack holds the execution context
* Dom,setTimeout,xml HttpRequest does not exist v8 source code
# Task queue
* javascript can do only one thing at time
* The rest are queued to the task queue waiting to executed
* When we run setTimeout,webapis will run timer and push the function provided to setTimeout to 
 the task queue once the timer ends
* These taskd will be pushed to the stack where they can executed
# Event loop
* The event loop in JavaScript is a crucial part of its runtime model, particularly for managing asynchronous operations. It enables non-blocking I/O, allowing JavaScript to handle multiple tasks efficiently, even though it is a single-threaded language.
# Callstack
* JavaScript has a call stack where functions are added when called and removed once executed. The call stack follows the Last In, First Out (LIFO) principle.
# Web APIs / Task Queue:
* When asynchronous functions like setTimeout, fetch, or addEventListener are executed, they are handed over to Web APIs (like the browser or Node.js runtime) to process.Once the task is completed, the callback is * added to the task queue (or microtask queue in some cases).
# Task Queue:
* There are two types of task queues:
* Macro-task queue: For setTimeout, setInterval, setImmediate, and certain events.
* Micro-task queue: For Promises (or async/await), MutationObserver, and queueMicrotask.
# Event loop
* Event Loop:
* The event loop constantly checks if the call stack is empty.
* If the call stack is empty, it picks tasks from the micro-task queue first and executes them.
* After clearing all micro-tasks, it processes tasks from the macro-task queue.
```
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});
Execution flow
console.log('End');
Execution Flow:
console.log('Start') → Added to the call stack → Executed → Prints: Start.
setTimeout → Sends the callback to the Web API → Adds to the macro-task queue.
Promise.resolve().then → Adds the callback to the micro-task queue.
console.log('End') → Added to the call stack → Executed → Prints: End.
Event loop checks the micro-task queue:
Executes the Promise callback → Prints: Promise.
Event loop checks the macro-task queue:
Executes the setTimeout callback → Prints: Timeout.
```
