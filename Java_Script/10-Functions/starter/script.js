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