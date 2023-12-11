// Array methods
let numbers = [1, 2, 3, 4, 5,"shahid",[1,2,3,4]];

// push() and pop()
// numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
// numbers.pop();
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// // shift() and unshift()
// numbers.shift();
// console.log(numbers); // Output: [2, 3, 4, 5]
// numbers.unshift(9);
// console.log(numbers,"un shift"); // Output: [1, 2, 3, 4, 5]

// // slice() and splice()
// let slicedNumbers = numbers.slice(0, 6);
// console.log(slicedNumbers); // Output: [2, 3, 4]
// console.log(numbers.length)
numbers.splice(2, 1, 10, 11);
console.log(numbers); // Output: [1, 2, 10, 11, 5]

// // String methods
// let greeting = "Hello, World!";

// // length
// console.log(greeting.length); // Output: 13

// // indexOf() and lastIndexOf()
// console.log(greeting.indexOf("World")); // Output: 7
// console.log(greeting.lastIndexOf("o")); // Output: 8

// // slice()
// let slicedGreeting = greeting.slice(0, 5);
// console.log(slicedGreeting); // Output: Hello

// // toUpperCase() and toLowerCase()
// console.log(greeting.toUpperCase()); // Output: HELLO, WORLD!
// console.log(greeting.toLowerCase()); // Output: hello, world!

// // Object methods
// let person = {
//   name: "John",
//   age: 25,
//   job: "Developer"
// };

// // Object.keys()
// let keys = Object.keys(person);
// console.log(keys); // Output: ["name", "age", "job"]

// // Object.values()
// let values = Object.values(person);
// console.log(values); // Output: ["John", 25, "Developer"]

// // Object.entries()
// let entries = Object.entries(person);
// console.log(entries); // Output: [["name", "John"], ["age", 25], ["job", "Developer"]]

// // hasOwnProperty()
// console.log(person.hasOwnProperty("name")); // Output: true

// // delete
// delete person.job;
// console.log(person); // Output: { name: 'John', age: 25 }
