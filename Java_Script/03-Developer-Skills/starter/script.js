// Remember, we're gonna use strict mode in all scripts now!
/* 'use strict';
const calcAge = birthYear => 2037 - birthYear;

console.log("Hi");
console.log("hui"); */

////////////////////////////
// 5.8 Debugging with the Console and Breakpoint
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius...'))
    value: 100
  };
  console.table(measurement);

  const kelvin = measurement.value + 366;
  return kelvin;
};
console.log(measureKelvin());
