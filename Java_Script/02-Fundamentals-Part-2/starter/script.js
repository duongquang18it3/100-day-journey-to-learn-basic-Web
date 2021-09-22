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

/////////////////////////////////////
// 3.10 Basic Array Operations (Methods)
/* const friends = ['Bong', 'Thu', 'Be'];
console.log(friends);

// Add Elements
const newLength = friends.push('Quang');// Add last Element
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Add first element
console.log(friends);

// Remove elements
friends.pop();//Remove last Element
console.log(friends);
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();//First
console.log(friends);

console.log(friends.indexOf('Thu'));
console.log(friends.indexOf('Quang Dep Trai'));

friends.push('Quang Dep Trai');
friends.unshift(22);
console.log(friends.includes('Thu'));
console.log(friends.includes('Quang xau trai'));
console.log(friends.includes(22));

if (friends.includes('Thu')){
    console.log('You have a friend called Thu Dep Gai');
} */

//////////////////////
// 3.11 Coding Challenge #2

/* const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); */

//////////////////////////////////////////////
// 3.11 Introduction of Objects
/* const thuArray = [
    'Le',
    'Tuyet Thu',
    2021-199,
    'student',
    ['Tran', 'Duong', 'Quang']
];
console.log(thuArray);
const quang = {
    firstName: 'Le',
    lastName: 'Tuyet Thu',
    age: 2021 - 1999,
    job: 'student',
    friends: ['Quang', 'Dep', 'Trai']
};
console.log(quang); */

////////////////////////////
// 3.12 Dot vs. Bracket Notation
/* const quang = {
    firstName: 'Le',
    lastName: 'Tuyet Thu',
    age: 2021 - 1999,
    job: 'student',
    friends: ['Quang', 'Dep', 'Trai']
};
console.log(quang);

console.log(quang.lastName);
console.log(quang['lastName']);

const nameKey = 'Name';
console.log(quang['first'+ nameKey]);
console.log(quang['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Quang'); 


quang.location = 'Da Nang';
quang['twitter'] = '@sdbvibsldvjs';
console.log(quang);



*/
///////////////////////////
//3.13 Object Method

/* const quang = {
    firstName: 'Le',
    lastName: 'Tuyet Thu',
    birthYear: 1999,
    job: 'student',
    friends: ['Quang', 'Dep', 'Trai'],
    hasDriversLicense: true,

    /* calcAge: function(){
        console.log(this);
        return 2021 - this.birthYear;
    } */
   /*  calcAge : function (){
        // Create new properties
        this.age = 2021-  this.birthYear;
        return this.age
    },

    getSumary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old, 
        ${this.job}, and she has ${this.hasDriversLicense ? 'a': 'no'} driver's license. `

    }
};
console.log(quang.calcAge());
console.log(quang.age);
console.log(quang.getSumary());  */

////////////////////////////////////
// 3.14 Coding challenge'

/* const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
mark.calcBMI();
john.calcBMI();
console.log(mark);
console.log(john);
console.log(mark.bmi);
console.log(john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  } */

////////////////////////////////////
//3.15 Iteration : The For loop
/* 
for ( let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}.`);
} */
///////////////
// 3.16 Looping Arrays, Breaking, and Continuing

const thuArray = [
    'Le',
    'Tuyet Thu',
    2021-199,
    'student',
    ['Tran', 'Duong', 'Quang'],
    true
];
const types = [];
for (let i = 0; i < thuArray.length; i++){
    //Reading from thuArray
    console.log(thuArray[i], typeof thuArray[i]);
    //Filling types array
    //types[i] = typeof thuArray[i];
    types.push(typeof thuArray[i]);
}
console.log(types);

// Calc age IF you have birthYear

const birthYeah = [1995,1996,1997];
const ages = [];
for (let i = 0; i < birthYeah.length; i++){
    ages.push(2021-birthYeah[i]);
}
console.log(ages);

// Continue and break
console.log('------- ONLY STRING ------');
for (let i = 0; i < thuArray.length; i++){
    if(typeof thuArray[i] !== 'string') continue;
    console.log(thuArray[i], ' is type: ' ,typeof thuArray[i]);
}
console.log('------- ONLY STRING ------');
for (let i = 0; i < thuArray.length; i++){
    if(typeof thuArray[i] === 'number') break;
    console.log(thuArray[i], ' is type: ' ,typeof thuArray[i]);
}