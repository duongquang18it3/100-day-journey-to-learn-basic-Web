'use strict';

///////////////////////////////
// 9.2 Destructuring Arrays
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , second] = restaurant.categories;
console.log(main, second);

// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

// Reverse
[main, , second] = [second, , main];
console.log(main, second);
// Receive 2 return values from a function;
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
const [p, q, r=1] = [8, 9];
console.log(p, q, r); */
/* // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
*/
////////////////////////////////////////////////
// Destructuring Objects
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to 
     ${address} at ${time} `);
  },
};

restaurant.orderDelivery({
  time: '11:00',
  address: 'Da Nang Viet Nam',
  
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating Values
let a = 11;
let b = 99;
const obj = { a: 111, b: 222, c: 333 };
({ a, b } = obj);
console.log(a, b);

//Nested obj
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); */

// The Spread Operator
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to 
     ${address} at ${time} `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicioius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Mi tom'];
console.log(...newMenu);

// Copy array;
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);
//Join 2 array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

// Interable array, string, maps, sets. NOT Object.
const str = 'Quang';
const letters = [...str, ' ', ...'Thu'];
console.log(letters);
console.log(...str);

const ingredient = [
  // prompt('Let make Pasta!. Ingredient 1 ?'),
  // prompt('Ingredient 2 ?'),
  // prompt('ingredient 3'),
];
console.log(ingredient);
restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
restaurant.orderPasta(...ingredient);

// Objects
console.log({ ...restaurant });
const newRestaurant = { foundedIN: 1998, ...restaurant, fouder: 'Quang' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = 'Thu Quang Restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// Rest pattern and parameters.
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to 
     ${address} at ${time} `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicioius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Destructuring
// Spread, because on Right of =
//Unpacking
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

// // Rest, beacause on Left of =
// // Packing
const [a, b, ...orthers] = [1, 2, 3, 4, 5];
console.log(a, b, orthers);

const [pizza, , risotto, ...ortherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ortherFoods);

//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Functions
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};
add(1, 2);
add(3, 4, 5);
add(7, 8, 9, 10);
const x = [20, 30, 40];
add(...x);

restaurant.orderPizza('mushroom', 'chess', 'onion', 'olives');
restaurant.orderPizza('mushroom'); */

// Short Circuiting && and ||;
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to 
     ${address} at ${time} `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicioius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

console.log('---------------------OR-------------');
console.log(3 || 'Quang');
console.log('' || 'Quang');
console.log(true || 0);
console.log(undefined || null);
// xet value đầu nếu là false thì tiêp tục xét giá trị tieeso theo
// nếu giá trị tiếp theo là true thì logs giá trị tiếp theo

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 22;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('-------------------AND-------------');

console.log(0 && 'Quang');
// - > 0
console.log(45 && 'Quang');
// -> Quang because it return last value true if first value is true

console.log('hello' && 23 && 'null' && 'Jonas');
// -> Tra về null khi xét hello và 23 là true tới khi gặp null là false thì trả về false;

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'onion', 'cheess');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'onion', 'cheess');
// -> Nếu cái restaurant.orderPizza tồn tại thì tiếp tục evulating
///////////////////////////
// The nullish Coalescing Operator
restaurant.orderGuest = 0;
const guests = restaurant.orderGuest || 10;
console.log(guests);

const guestCorrect = restaurant.orderGuest ?? 10;
console.log(guestCorrect); */

// Coding challange 1

/* We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function (' printGoals ') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored */

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

//5.
// Nested obj
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7.

team1 < team2 && console.log('Team 1 win');
team1 > team2 && console.log('Team 2 win');
 */

// Looping for array the for of Loop;

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to 
     ${address} at ${time} `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicioius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// For of loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

// Enhanced Object Literals
const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

//

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  hours,
  // write function shorter
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, address }) {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to 
     ${address} at ${time} `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicioius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
console.log(restaurant.hours);