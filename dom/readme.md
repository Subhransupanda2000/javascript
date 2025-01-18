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
# Dom manipulation using inline events:
* <button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>
