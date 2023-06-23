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