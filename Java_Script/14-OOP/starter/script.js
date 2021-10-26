'use strict';
//////////////////////////////////////////////
// 14.4 Constructor Functions and the new Operator
const Person = function(firstName,birthYear){
    // Instance properties
    this.firtsName = firstName;
    this.birthYear= birthYear;
}
const quang = new Person('Quang', 1999);
console.log(quang);
// 1. New {} is created
// 2. function is called, this = {};
// 3. linked to prototype
// 4. function automatically return();

const thu = new Person('Le', 1999);
const jack = new Person('jack', 1999);
console.log(thu, jack);

console.log(thu instanceof Person);