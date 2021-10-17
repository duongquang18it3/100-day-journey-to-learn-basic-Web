'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 */
/////////////////////////////////////////////////
// 11.2 Simple Array Method
/* const arr = ['a','b','c','d','e'];
console.log(arr);

// SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(-2,-1));
console.log(arr.slice(-2,-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE METHOD se lay di mot phan trong mang tai vi tri 
// va tra ve chinh no.
// Lay di tat ca tu vi tri 2 cua mang, luc nay chi con lai
// hai phan tu dung truoc
// console.log(arr.splice(2));
// => lay ra: ['c','d','e']
arr.splice(-1);
console.log(arr);
// Lay ra va xoa di chu tai 1 va 2
// -> ['a','b','c','d']
arr.splice(1,2)
console.log(arr);
// => chi con la : ['a','d']

// REVERSE: Dao nguoc

const arr2 = ['f','g','h','i','j'];
const arr3 = ['a','b','c','d','e'];
arr2.reverse;
console.log(arr2);
// -> ['f', 'g', 'h', 'i', 'j']

//CONCATENATE: ghep noi mang

const letters = arr3.concat(arr2);
console.log(letters);
// concatenate 2 arrays use spread operator
console.log([...arr2,...arr3]);
// -> ['f', 'g', 'h', 'i', 'j', 'a', 'b', 'c', 'd', 'e']

//JOIN

console.log(letters.join('-')); */

//////////////////////////////////////////////
// 11.3 Looping Arrays forEach
// movements : bien dong tai khoan, so tien ra vao tai khoan
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You depoited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------------------FOREACH-----------------');

movements.forEach(function (mov,i,arr ) {
 // mov(movement) current element: thanh phan hien tai
 // i(index): current index: vi tri hien tai
 // arr(array):the entire array that we are looping: toan bo mang ma chung ta dang lap
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You depoited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); */

// forEach hoat dong ra sao khi co function la doi so
// => 0: function(200);
//    1: function(450);
//    2: 
