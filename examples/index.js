// console
// console.log("Hello world!");
// console.error("This is an error.");
// console.warn("This is a warning");

// let, const -> block level scope

// const
// const age = 30;
// age = 31; -> it will get an error
// console.log(age);

// const (right way)
// const age = 30;
// console.log(age);

// let
// let score;
// score = 10;
// console.log(score);

// string, numbers, boolean, null, undefined

// const name = "John"; // string
// const age = 35; // number
// const rating = 4.5; // float
// const isCool = true; // boolean
// const x = null; // null
// const y = undefined; // undefined
// let z; // null
// console.log(typeof x); // typeof returns the data type of a JS variable

// const name = "John";
// const age = 30;

// concatenation
// console.log("My name is " + name + " and I am " + age);

// template string
// const text = `My name is ${name} and I am ${age}`;
// console.log(text);

// const s = "Hello World";

// string length
// console.log(s.length);

// uppercase
// console.log(s.toUpperCase());

// sub string
// console.log(s.substring(0, 5));

// split string
// const s2 = "technology, computers, it, code";
// console.log(s2.split(", "));

// arrays - variables that hold multiple values
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ["apples", "oranges", "pears"];

// looking for index
// console.log(fruits[1]);

// adding new value in array
// fruits[3] = "grapes";

// adding new value (arr.push() will add in the last index)
// fruits.push("mangos");

// adding new value (arr.unshift() will add in the first index)
// fruits.unshift("strawberries");

// removing the last value from array
// fruits.pop();

// console.log(fruits);

// to check if fruits variable is an array
// console.log(Array.isArray(fruits));

// to get value's index
// console.log(fruits.indexOf("oranges"));

// object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st.",
//     city: "Boston",
//     state: "MA",
//   },
// };

// to get value array in the object
// console.log(person.hobbies[1]);

// to get value object in the object
// console.log(person.address.street);

// destructuring object
// const {
//   firstName,
//   lastNname,
//   address: { city },
// } = person;
// console.log(city);

// adding new property to the existing object
// person.email = "johndoe@mail.com";
// console.log(person);

// for
// for (let i = 0; i < 10; i++) {
//   console.log(`For loop number: ${i}`);
// }

// while
// let i = 0;
// while (i < 10) {
//   console.log(`While loop number: ${i}`);
//   i++;
// }

// dealing array with object properties
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist appt",
//     isCompleted: false,
//   },
// ];

// console todos
// console.log(todos);

// to get the second task's text
// console.log(todos[1].text);

// convert array to JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// get all todos' text
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// get all todos' text (readable)
// for (let todo of todos) {
//   console.log(todo.text);
// }

// forEach, map, filter

// forEach
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// map (array)
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoText);

// filter (filtering the completed todos)
// const todoCompleted = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// advanced (get completed todos with todos' text)
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

// conditional if (always use triple equals)
// const x = 6;
// const y = 11;

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is NOT 10");
// }

// or operator
// if (x > 5 || y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// and operator
// if (x > 5 && y > 10) {
//   console.log("x is more than 5 and y is more than 10");
// }

// ternary operator in conditional if
// const x = 10;

// const color = x > 10 ? "red" : "blue";

// console.log(color);

// switch case
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is NOT red or blue");
//     break;
// }

// function
// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }

// arrow function
// const addNums = (num1 = 1, num2 = 2) => {
//   console.log(num1 + num2);
// };

// using default values in function
// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }

// with return
// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// console.log(addNums(1, 2));

// with return
// const addNums = (num1 = 1, num2 = 2) => {
//   return num1 + num2;
// };

// console.log(addNums(5, 5));

// arrow function (readable)
// const addNums = (num1 = 1, num2 = 2) => console.log(num1 + num2);

// const addNums = (num1 = 1, num2 = 2) => num1 + num2;

// one parameter in a function
// const addNums = (num1) => num1 + 5;
// console.log(addNums(5));

// oop (object-oriented programming)
// constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// this.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// this.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// }

// using prototype property
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "4-3-1978");

// console.log(person2);

// example 1 - console the function
// console.log(person2.getBirthYear());

// example 2
// console.log(person2.getFullName());

// DOM elements
// single element
// console.log(document.getElementById("addForm"));
// console.log(document.querySelector("h1"));

// multiple elements
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementByTagName(""));

// styling elements
// const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.removeChild();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// event addlistener
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("#addForm").style.background = "#c0cbda";
//   //   document.querySelector("").style.color = "#000";

//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });
