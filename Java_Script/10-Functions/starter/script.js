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
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(199, 'ER');
lufthansa.book(789, 'Asia');
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
book.call(eurowings, 1223, 'Le Tuyet Thu');
console.log(eurowings);

book.call(lufthansa, 3454, 'Tran Duong Quang');
console.log(lufthansa);

const swis = {
  airline: 'VietNam',
  iataCode: 'VN',
  bookings: [],
};

book.call(swis, 4524, 'Trn Qusng');

// Apply does receive list argument but can take array of arguments

const flightData = [345, 'Vietnam'];
book.apply(swis, flightData);
console.log(swis);

book.call(eurowings, ...flightData);
console.log(eurowings);

//////////////////////////////////////////
// 10.8 The bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swis);
bookEW(34, 'Quang');

const bookEW22 = book.bind(eurowings, 23);
bookEW22('Jonas Schmedtmann');
bookEW22('Nguyen Van A');

// With even Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);
  this.planes ++;
  console.log(this.planes);
};
// Use bind because bind return new function, and in this case we are passing a function an not to call it
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); 

// Now, In this function, we are not use this keyword, so we don't care and use null for function
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Now, this challenge use just function retrun new function

const addTax1 = function(rate){
  return function(value){
    console.log(value + rate * value );
  }
};
const Tax = addTax1(0.2);
Tax(230);
Tax(200);
 */
//////////////////////////////////////
// 10.9 Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/* const poll = {
  question: 'What is your favourite programing language',
  option: ['0: JS', '1: PT', '2: Ru', '3: C++'],
  //This generates[0,0,0,0];
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.option.join('\n')}\n(Write option numer)`
      )
    );
    // console.log(answer);
    // RegisterAnswer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results is ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus
// crete new object {answer: [1,3,5]}
poll.displayResults.call({answers: [5,3,3,2]}, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); */

////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

/* const runOnce = function(){
  console.log('This will never run agian');
};
runOnce();

(function(){
  console.log('This will never run agian');
})();

(()=>console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate); */

///////////////////////////////////////////
// Closure

/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
booker();
booker();
booker(); */


 