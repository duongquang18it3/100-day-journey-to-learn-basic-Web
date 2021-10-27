'use strict';
//////////////////////////////////////////////
// 14.4 Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const quang = new Person('Quang', 1999);
console.log(quang);
// 1. New {} is created
// 2. function is called, this = {};
// 3. linked to prototype
// 4. function automatically return();

const thu = new Person('Thu', 1999);
const jack = new Person('Jack', 1999);
console.log(thu, jack);

console.log(thu instanceof Person);

//////////////////////////////////////
// Prototype

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

quang.calcAge();
thu.calcAge();

console.log(quang.__proto__);
console.log(quang.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(quang));
console.log(Person.prototype.isPrototypeOf(thu));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(quang.species, thu.species);

console.log(quang.hasOwnProperty('firstName'));
console.log(Person.prototype.hasOwnProperty('species'));
