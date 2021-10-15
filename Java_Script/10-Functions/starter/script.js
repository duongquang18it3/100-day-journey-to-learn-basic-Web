'use strict';

///////////////////////////////////////
// 10.2 Defaulf Parameters

/* const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); */

///////////////////////////////////////
// 10.3 How Passing Argument Work: Values vs. Reference

/* const flight = 'LH234';
const thu = {
  name: ' Le Tuyet Thu',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mrs. ` + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Check In !');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, thu);
console.log(thu.name);
console.log(flight);
console.log(thu);
console.log(flight, thu);

// Is the same as doing 
const flightNum = flight; // = 'LH234'
const passenger = thu; 
// passenger + jonas = {
//     name: ' Mrs Le Tuyet Thu',
//     passport: 123456789,
//   };

const newPassport = function (person){
    person.passport = Math.trunc(Math.random()*10000000000);
};
newPassport(thu);
checkIn(flight,thu); */

/////////////////////////////////////
//  10.5 Function Accepting Callback Function

/* const oneWord = function(str){
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str){
  const [First, ...others] = str.split(' ');
  return [First.toUpperCase(), ...others].join(' ');
};

// Higher-order function

const transformer = function(str, fn){
  console.log(`Origianl string: ${str}`);
  console.log(`Transfomer string: ${fn(str)}`);
  console.log(`Transformer by: ${fn.name}`);
}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

  // JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5); */

////////////////////////////////////////////
// 10.6 Function returning function
/* const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
};

const greeterHey = greet('Hey!');
greeterHey('Quang');
greet('Hello')('Quang');

// Challenge arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Thu');
 */
////////////////////////////////////////////
// 10.7 The call and apply methord

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function();
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
    );
    this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
  },
};

lufthansa.book(199, 'Thu');
lufthansa.book(789, 'Quang');
console.log(lufthansa);


const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work 
// because In the regular function, this keyword will undefiend
// book(166,'Bong');

// book function really is an object;
// Objcet have method therefore array have function
// Call method
book.call(eurowings,1223,'Le Tuyet Thu');
console.log(eurowings);

book.call(lufthansa,3454,'Tran Duong Quang');
console.log(lufthansa);

const swis = {
  airline : 'VietNam',
  iataCode:'VN',
  bookings : [],
};

book.call(swis,4524,'Trn Qusng');

// Apply does receive list argument but can take array of arguments

const flightData = [345, 'Quang Dep Trai'];
book.apply(swis, flightData);
console.log(swis);

book.call(eurowings, ...flightData);
console.log(eurowings); */


