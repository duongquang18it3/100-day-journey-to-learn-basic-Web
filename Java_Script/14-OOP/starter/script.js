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

/* class PersonCl {
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
  // Static method only class not in object
  static hey() {
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
PersonCl.hey();

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
 */
/////////////////////////////////
// 14.12 Object.create

/* const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const quang = Object.create(PersonProto);
console.log(quang);
quang.name = 'Quang';
quang.birthYear = 2002;
quang.calcAge();
console.log(quang.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); */

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current 
speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current 
speed in mi/h (but converts it to km/h before storing the 
  value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate \
and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed){
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 100);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); */

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 1999, 'Front End Website');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car 
(called EV) as a CHILD "class" of Car. Besides a make and 
current speed, the EV also has the current battery charge 
in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's
 speed by 20, and decrease the charge by 1%. Then log a message 
 like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 
'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
Notice what happens when you 'accelerate'! HINT: Review the
 definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `'Tesla going at ${this.speed}, with a charge of ${this.charge}%'`
  );
};

const tesla = new EV('Teska Model X', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

///////////////////////////////////////////////////////////////////
// Inheritance Between Classes: Object.create

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i studey ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Quang Dep Trai', 1999, 'Web Dev');
jay.introduce();
jay.calcAge();

///////////////////////////////////////////////////////
// Another Classes Example

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));


const acc1 = new Account('Quang', 'EUR', 1111);
// acc1.movements.push(400);
// acc1.movements.push(-200);
acc1.deposit(300);
acc1.withdraw(150);
acc1.approveLoan(2000);
acc1.requestLoan(2000);

console.log(acc1);
console.log(acc1.pin);
