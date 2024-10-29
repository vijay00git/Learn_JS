// Using var (not recommended for new code)
var name1 = "Alice";

console.log(name1)

// Using let for block-scoped variables
let age = 30;

// Using const for constants
const pi = 3.14159;


//Data types
let number = 10;
let string = "Hello";
let boolean = true;
let object = { name: "John", age: 25 };
let array = [1, 2, 3, "apple"];
let nullValue = null;
let undefinedValue = undefined;

//Operators:

let x = 5;
let y = 10;

// Arithmetic operators
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

// Comparison operators
let isGreater = x > y;
let isLess = x < y;
let isEqual = x == y;
let isNotEqual = x != y;

// Logical operators
let andResult = x > 5 && y < 20;
let orResult = x < 5 || y > 10;
let notResult = !x;

// Control Flow
//if/else:

let age1 = 25;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//switch:

let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's another day!");
}

//Loops:

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // while loop
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }



//Functions:
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice");
  
  // Arrow function
  const greetArrow = (name) => {
    console.log("Hello, " + name + "!");
  };
  
  greetArrow("Bob");


//Arrays:

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Output: "apple"

fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

let filteredFruits = fruits.filter(fruit => fruit.startsWith("a"));
console.log(filteredFruits); // Output: ["apple"]

//Selecting Elements:
let myDiv = document.getElementById("myDiv");
console.log(myDiv);
let paragraphs = document.getElementsByTagName("p");
let elementsByClass = document.getElementsByClassName("myClass");

//Modifying Elements:
myDiv.innerHTML = "New content";
paragraphs[0].style.color = "red";
elementsByClass[0].classList.add("newClass");

// Event Listeners:
let button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});


//async/await

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();