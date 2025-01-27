```
Event Delegation
Definition: A pattern where you attach a single event listener to a parent element to handle events triggered by its child elements.
Purpose: Efficiently manage events for multiple child elements, including dynamically added ones.
How it Works: It uses event bubbling (a phase of event propagation) to capture events from child elements at the parent level.
```
```
<div class="parent">
  <button class="child">Button 1</button>
  <button class="child">Button 2</button>
</div>

<script>
  const parent = document.querySelector('.parent');

  parent.addEventListener('click', event => {
    if (event.target.classList.contains('child')) {
      console.log(`Button clicked: ${event.target.textContent}`);
    }
  });
</script>

```
```
2. Event Propagation
Definition: The mechanism by which events travel through the DOM tree in different phases: capturing, target, and bubbling.
Purpose: Describes the path an event takes as it moves through the DOM.
Phases:
Capturing Phase: The event starts from the root and moves down to the target element.
Target Phase: The event reaches the target element.
Bubbling Phase: The event bubbles back up to the root from the target element.
<div class="grandparent">
  <div class="parent">
    <button class="child">Click me</button>
  </div>
</div>

<script>
  document.querySelector('.grandparent').addEventListener('click', () => {
    console.log('Grandparent clicked');
  });

  document.querySelector('.parent').addEventListener('click', () => {
    console.log('Parent clicked');
  });

  document.querySelector('.child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>

```
