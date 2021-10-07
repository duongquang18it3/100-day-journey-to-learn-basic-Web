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

//Destructuring Objects
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
const restaurant = {
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
restaurant.orderPizza('mushroom');
