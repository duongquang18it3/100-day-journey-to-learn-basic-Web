'use strict';
// 3.2 Acvating Strict Mode ////////////////

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534; */

//////////3.3 Function/////////////

/* function logger(){
    console.log("My name is Quang");
}
logger();

function juiceProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}
const appleJuice = juiceProcessor(5, 0);
console.log(appleJuice);
const orangeJuice = juiceProcessor(0, 5);
console.log(orangeJuice); */

//////// 3.4 Function Declarations and Expressions /////
/* // Declaration
function calcAge1 (birthYeah){
    return 2021 - birthYeah;
};
const age1 = calcAge1(1999);

// Expressions
const calcAge2 = function (birthYeah){
    return 2021 - birthYeah;
};
const age2 = calcAge2(1999);
console.log(age1, age2); */

//////////// 3.5 Arrow Function //////////
/* const calcAge3 = birthYeah => 2021 - birthYeah;
const age3 = calcAge3(1999);
console.log(age3);

const yearUtilRetirement = (birthYeah, firstName) =>{
    const age = 2022 - birthYeah;
    const ageRetirment = 65 - age;
    return `${firstName} retirment in ${ageRetirment}`;
} 

console.log(yearUtilRetirement(1999,'Quang'));
console.log(yearUtilRetirement(1999,'Bống'));
 */

////////// 3.5 Function Calling other Function ////////

/* function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `I have ${applePieces} of apple and ${orangePieces} of orange`;
}
console.log(fruitProcessor(4, 5)); */

///////// 3.6