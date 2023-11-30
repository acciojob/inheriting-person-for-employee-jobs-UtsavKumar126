function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method added to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function inheriting from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // inherit name and age from Person
  this.jobTitle = jobTitle;
}

// Inherit Person prototype methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method added to Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
