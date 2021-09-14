// 3. Linking a JS File
/* let js = "OMG";
if (js === "OMG") alert("Wow, this is so amazing.haha");

console.log(10+10); */
///////////////////////////////////
// 4. Values and Variable
/* console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob); */
////////////////////////////////////////

// 5. Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

///////////////////// 7. Let, const, and var /////////////////////

// Declare let
/* let age = 20;
age = 21;
console.log(age);

// Declare const
const birthYear = 1999;
console.log(birthYear);

// Declare var prior ES6
var job = 'Programmer';
job = 'Teacher';
console.log(job);

// Not recommended
firstName = 'TDQ';
console.log(firstName); */

//////////////// 8.Basic operator ///////////
// Math operators
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */

///////////////// 9. Operator precendence //////////
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

/////////////////////// 10. Coding challenge /////////////
/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall */
//Declare Variables
// Data
/* const massM = 95;
const heightM = 1.88;
const massJ = 85;
const heightJ = 1.76;

const BMIM = massM / heightM ** 2;
const BMIJ = massJ / heightJ * heightJ;
const markHigherBMI = BMIM > BMIJ;

console.log(BMIM, BMIJ, markHigherBMI); */


///////////////// 11. String and template literals /////////////

/* const firstName = 'Quang ';
const job = 'Engineer';
const birthYear = 1999;
const year = 2021;

const quang = ('I am ' + firstName + (year - birthYear) + ' year old ,a ' + job);
console.log(quang);

const newQuang = `I'am ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(newQuang);

console.log(`Just a regular string ....`);

console.log(`sdkvnskd 
insiododsvs`); */

////////////////// 12. Taking Decision IF else statement //////////////////

/* const birthYear = 1999;
let century;
 if (birthYear <= 2000) {
     century = 20;
 } else {
     century = 21;
 }
 console.log(century); */

 ////////////// 13. Coding challenge ///////////////

/* const massM = 95;
const heightM = 1.88;
const massJ = 85;
const heightJ = 1.76;

const BMIM = massM / heightM ** 2;
const BMIJ = massJ / heightJ * heightJ;

if (BMIM > BMIJ) {
    console.log(`Mark's BMI (${BMIM}) is higher than John's (${BMIJ}) `);
} else {
    console.log(`Mark's BMI (${BMIM}) is lower than John's (${BMIJ}) `);
}
 */

/////////////// 14. Type conversion and coercion( ep kieu )//////////////

// Type conversion
/* const birthYear = '1999';
console.log(Number(birthYear), birthYear);
console.log(2021 - Number(birthYear));

console.log(String(22), 23);

// Type conercion
console.log('I am ' + 23 + ' year old !');
console.log('22' - '10' - 2);
console.log('22' / '2');
console.log('22' * '2');

let n = '1' + 1; //'11'
n = n - 1; //10;
console.log(n); */

///////////////// 15. Truthy and Falsy Values ///////////////
// 5 falsy values: 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
} */

////////////////// 16. Equality operator == vs === ////////////

/* const age = '22';
if (age === 22 ) console.log('You just became an adult strict');
if (age == 22) console.log('You just became adult (loose)');

const favourite = Number(prompt("What's your favorite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 22){
    console.log('Wow, amazing good job. It is accually 22')
} else if (favourite === 15) {
    console.log('Wow amazing good job . It is 15')
} else {
    console.log('number is not 22 or 15');
}

if (favourite !== 23) console.log('Why not 23 ? Huhu'); */

////////////// 18. Logical Operator////////////////

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
} */

////////////////////// 19. Coding Challenge 3 /////////////////

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
/* const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
} */

/////////////////// 17. The switch Statement ///////////

/* const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
} */

/////////////// 21. Statement and Expression ///////////
/* 
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`); */

///////////////// 22.The Conditional (Ternary) Operator//////////

/* const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); */

/////////////////////// 23. Coding Challenge 4///////////
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/