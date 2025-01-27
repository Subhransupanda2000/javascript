# regx
* A regular expression (or regex) is a sequence of characters that forms a search pattern. It is used for pattern matching within strings and is widely used for searching, validating, and manipulating text 
```
// Validate an email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "example@gmail.com";
console.log(emailRegex.test(email)); // Output: true

// Replace digits with asterisks
const str = "My number is 12345";
const result = str.replace(/\d/g, "*");
console.log(result); // Output: "My number is *****"

// Extract words
const text = "I love JavaScript!";
const words = text.match(/\w+/g);
console.log(words); // Output: ["I", "love", "JavaScript"]

```
