# Finding Dom element:
* const element = document.getElementsByTagName("p");
* const element = document.getElementById("intro");
* const x = document.getElementsByClassName("intro");
* const x = document.querySelectorAll("p.intro");
# Finding html elements by html object collection:
```
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
```
# Changing html content:
* document.getElementById(id).innerHTML = new HTML
# Changing the Value of an Attribute
* document.getElementById(id).attribute = new value
# Dynamic write:
* document.getElementById("demo").innerHTML = "Date : " + Date(); </script>
* document.write()
# Get the value
* let x = document.getElementById("numb").value;
# Constraint Validation HTML Input Attributes
# Attribute	Description
* disabled	Specifies that the input element should be disabled
* max	Specifies the maximum value of an input element
* min	Specifies the minimum value of an input element
* pattern	Specifies the value pattern of an input element
* required	Specifies that the input field requires an element
* type 	Specifies the type of an input element
# Dom manipulation using css
* document.getElementById("p2").style.color = "blue";
# Adding and Deleting Elements
* document.createElement(element)	Create an HTML element
* document.removeChild(element)	Remove an HTML element
* document.appendChild(element)	Add an HTML element
* document.replaceChild(new, old)	Replace an HTML element
* document.write(text)	Write into the HTML output stream
# Dom manipulation using inline events:
```
<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>
<button onclick="displayDate()">Try it</button>
document.getElementById("myBtn").onclick = displayDate;
```
# events example:
* onload
* oninput
* onunload
* onchange
* onmouseover
* onmouseout
* onmouseup
* onmousedown
* onclick
* onfocus
# EventListner
* element.addEventListener(event, function, useCapture);
* document.getElementById("myBtn").addEventListener("click", displayDate);
# When user will try to resize the event
```
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
}); 
```
# Getting content through Dom tree
* document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
* document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
* document.getElementById("demo").innerHTML = document.body.innerHTML;
* document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
* document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
# Nodevalue property
* document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;
# Dom node:
```
<h2>JavaScript HTML DOM</h2>
<p>Add a new HTML Element.</p>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);
</script>
```
```
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
```
```
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const elmnt = document.getElementById("p1"); elmnt.remove();
</script>
```
```
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
```
```
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>
```
# Dom collection
```
const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}
```
# 94.What is use of prevent default and stock propogaƟon methods?
```
preventDefault() and stopPropagation() in JavaScript
These two methods are part of the Event Object in JavaScript and are used to control how events behave when triggered.

1. preventDefault()
Purpose: Prevents the default behavior of an event from occurring.
Use Case: Use when you want to stop an event's default browser action, like submitting a form, following a link, or right-clicking to show the context menu.
```
# dom methods ant properties
```
getElementById()	Select an element by its ID.
getElementsByClassName()	Select elements by their class name.
querySelector()	Select the first element matching a CSS selector.
createElement()	Create a new HTML element.
appendChild()	Append a child element to the parent element.
removeChild()	Remove a child element from the parent element.
addEventListener()	Attach an event handler to an element.
style	Get or set inline CSS styles of an element.
parentNode	Access the parent element of an element.
classList	Manipulate the classes of an element.
innerHTML	Get or set the HTML content inside an element.
value	Get or set the value of input elements.
src	Get or set the source URL of an image or media.
```
