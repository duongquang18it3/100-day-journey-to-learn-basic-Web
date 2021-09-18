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

///////// 3.6 Reviewing Functions ////////

/* function calcAge(birthYeah){
    return 2021 - birthYeah;
}
function yearUntilRetirement (birthYeah, firstName){
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    } else {
        console.log(`${firstName} has already retied :))`);
        return -1;
    }
}
console.log(yearUntilRetirement(1999, 'Quang')); */

//////// 3.7 Coding Challenge 1//////
/* const calcAverage = (a, b, c) => (a+b+c)/3;
console.log(calcAverage(3,4,5));

// Test 1

let scoreD = calcAverage(58, 68, 97);
let scoreK = calcAverage(25, 34, 27);
console.log(scoreD, scoreK);
const checkWinner = function (avgD, avgK){
    if (avgD >= 2* avgK){
        console.log(`Dolphin win ${avgD} and  Koaloas ${avgK}`);
    } else if (avgK >= avgD){
        console.log(`Koalas win ${avgK} and Dolphin ${avgK}`);
    } else{
        console.log("No team wins....");
    }
}
checkWinner(scoreD, scoreK); */

///////////////////////////////////
// 3.9 Introduction Array 
/* const friend1 = ['Bong'];
const friend2 = ['Thu'];
const friend3 = ['Be'];

const friends = ['Bong', 'Thu', 'Be'];
console.log(friends);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Le Tuyet Thu';
console.log(friends);
//friends = ['Quang','Dep trai']; Don't do this;

const firstName = 'Tran ';
const quang = [firstName, 'Quang', 2021-1999, 'student', friends];
console.log(quang);
console.log(quang.length);

//Exercise
const calcAge = function (birthYeah){
    return 2021 - birthYeah;
}
const years = [1990,1992,1993,1994,1995];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);
const ages = [age1,age2, age3];
console.log(ages); */



