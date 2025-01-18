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
