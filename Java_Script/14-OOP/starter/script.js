'use strict';
//////////////////////////////////////////////
// 14.4 Constructor Functions and the new Operator
/* const Person = function (firstName, birthYear) {
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

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(quang.__proto__);
// Object.prototype (top of prototype chain)
console.log(quang.__proto__.__proto__);
console.log(quang.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1); */

///////////////////////////////////////
// Coding challange 1

/* 
1. Use a constructor function to implement a Car. A car has
 a make and a speed property. The speed property is the current
  speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's
 speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed 
 and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate'
 and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/* const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
  this.speed +=10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

 */
/////////////////////////////////////////////////
// 14.9 ES6 Class

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name !`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey(){
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Quang Tran', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();
console.log(jessica.age);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Quang Duong', 1999);

//////////////////////////////////////////////////////////////
// Setters and Getters

const arr = ['a', 'b', 'c'];
console.log(arr.pop());
console.log(arr);
arr.pop();
console.log(arr);

// set and get are properties
const account = {
  owner: 'Quang',
  movement: [100, 300, 250, 450],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movement);

/////////////////////////////////
// 