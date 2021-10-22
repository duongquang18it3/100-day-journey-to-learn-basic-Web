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

/////////////////////////////////////////////////////////
// Functions
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, +0);
  labelBalance.textContent = `${balance} EURO`;
};
calcDisplayBalance(account1.movements);




// 11.10 Computing Username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

///////////////////////////////////////////////////////////
// forEach with Sets and Maps
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'EUR', 'VND', 'USD', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
}); */

////////////////////////////////////////////////////
//  // Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
 */

//////////////////////////////////////////////////
// The map method
/* 
const euroToUsd = 1.1;

// The map method return new array, so that why we are declare new varible
// const movementUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementUSD);

// Use for of loop

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

// Use current index to description for movements ;

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movements ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} \n`
);
console.log(...movementsDescriptions); */

/////////////////////////////////////////////////////////////
// The filter method
/* 
const depoited = movements.filter(function (mov) {
  return mov > 0;
});
console.log(depoited);

// use For of loop

const depositedFor = [];
for (const mov of movements) if (mov > 0) depositedFor.push(mov);
console.log(depositedFor);

// arrow function
const withdrawals = movements.filter((mov)=>mov < 0);
console.log(withdrawals); */

//////////////////////////////////////////////////////////////
// The reduce method

/* console.log(movements);

// accumulator -> SHOWBALL

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); 

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
*/
// const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const average = adults.reduce((acc, age, i , arr) => acc + age/arr.length,0);
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); */

//////////////////////////////////////////////////
// The magic of chaining method.
/* 
const euroToUsd = 1.1;
console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov)=> acc+mov,0);
console.log(totalDepositsUSD);
 */