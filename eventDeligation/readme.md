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
