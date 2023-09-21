// ES6 Class Types, Arrow Functions, and Variable Types Example

// Class Declaration
class Person {
  constructor(name) {
    this.name = name;
  }

  // Instance Method
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // Static Method
  static greet() {
    console.log('Greetings');
  }
}

// Class Expression
const Animal = class {
  constructor(name) {
    this.name = name;
  }

  // Instance Method
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
};

// Arrow Function with Implicit Return
const multiply = (a, b) => a * b;

// Arrow Function with Block Body
const add = (a, b) => {
  const sum = a + b;
  return sum;
};

// Variable Types
const name = 'Ravi'; // String
const age = 32; // Number
let isStudent = true; // Boolean
const hobbies = ['coding', 'gaming', 'reading']; // Array
const person = { name: 'Rj', age: 33 }; // Object
const symbol = Symbol('unique'); // Symbol
let data = null; // Null
let undef; // Undefined

// Template Literal
const message = `My name is ${name}, and I am ${age} years old.`;

// Destructuring Assignment
const [firstHobby, secondHobby] = hobbies;
const { name: personName, age: personAge } = person;

// Spread Operator
const numbers = [1, 2, 3];
const mergedArray = [...hobbies, ...numbers];

// Default Parameter
const greetPerson = (personName = 'Stranger') => {
  console.log(`Hello, ${personName}!`);
};

// Rest Parameter
const sumNumbers = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};

// Calling Class Methods
const john = new Person('Ravi');
john.sayHello();
Person.greet();

const dog = new Animal('bell');
dog.makeSound();

console.log(multiply(5, 3));
console.log(add(2, 4));

console.log(firstHobby, secondHobby);
console.log(personName, personAge);

console.log(message);

console.log(mergedArray);

greetPerson('test');
greetPerson();

console.log(sumNumbers(1, 2, 3, 4, 5));

console.log(symbol);

console.log(data);
console.log(undef);

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Symbol
const uniqueKey = Symbol("uniqueKey");
const obj = {
  [uniqueKey]: "This is a symbol key",
};

console.log(obj[uniqueKey]);

// Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

// Function Rest Parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// String.includes()
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox")); // true

// String.startsWith()
console.log(sentence.startsWith("The")); // true

// String.endsWith()
console.log(sentence.endsWith("dog")); // true

// Array.from()
const iterable = "12345";
const numArray = Array.from(iterable, (char) => parseInt(char));
console.log(numArray); // [1, 2, 3, 4, 5]

// Array.keys()
const fruits = ["apple", "banana", "cherry"];
const keys = Array.from(fruits.keys());
console.log(keys); // [0, 1, 2]

// Array.find()
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const foundUser = users.find((user) => user.id === 2);
console.log(foundUser); // { id: 2, name: "Bob" }

// Array.findIndex()
const ages = [25, 30, 35, 40, 45];
const index = ages.findIndex((age) => age >= 35);
console.log(index); // 2