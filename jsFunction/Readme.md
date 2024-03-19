# Function
```
function function1()
{
console.log("Hello")
}
```
# Parameterized function:
```
let x = myFunction(4, 3);
function myFunction(a, b) {
  return a * b;
}
```
# Arrow function
```
let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);
```
# Alert hello on Button click event
```
<button id="myButton">click me</button>
    <script>
        document.getElementById("myButton").addEventListener("click", function () {
            alert("hello");
        });
    </script>
```
![Screenshot (652)](https://github.com/Subhransupanda2000/javascript/assets/123824203/7f77aea7-52f9-44f6-9d24-9fd32f945910)

# Input name in text and alert on submit of form
```
 <form id="myForm">
        <label for="nameInput">Name:</label>
        <input type="text" id="nameInput" name="nameInput"><br><br>
        <input type="submit" value="Submit">
    </form>

    <script>
        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();
            var name = document.getElementById("nameInput").value;
            alert("Hello, " + name + "!");
        });
    </script>
```

![Screenshot (653)](https://github.com/Subhransupanda2000/javascript/assets/123824203/ad995bcb-1d1e-4ecd-b25d-a1758f696232)
# Input 2 numbers from textbox and on submit display result inside a div.
```

<body>
    <form id="numberForm">
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1" required>
        <br>
        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2" required>
        <br>
        <input type="submit" value="Submit">
    </form>
    <div id="result"></div>
    <script>
        document.getElementById('numberForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            const result = num1 + num2; // Replace with your desired operation (+, -, *, /)

            document.getElementById('result').textContent = "Result: " + result;
        });

    </script>
</body>
```
![Screenshot (654)](https://github.com/Subhransupanda2000/javascript/assets/123824203/e1b02adc-f02e-4b6e-a45e-02f3402bd964)



