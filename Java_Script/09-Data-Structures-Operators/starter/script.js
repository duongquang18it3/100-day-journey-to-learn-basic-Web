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
/* const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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

  openingHours,
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
 */
// Optional chaining

/* console.log(restaurant.openingHours);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.fri.open);
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(day, open);
}

//Check object
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisott?.(0, 1) ?? 'Method dose not exist');
// Array
const users = [
  {
    name: 'Quang',
    age: 22,
    email: 'quang@gmail.com',
  },
];
// const users =[];
console.log(users[0]?.name ?? 'No name');
// -> Quang
if (users.length > 0) console.log(users[0].name);
else console.log('no name'); */

//////////////////////////////////
// Looping object : object key, values , and Entries

// Looping array
/* const arr = [...restaurant.mainMenu];
console.log(arr);
for (const item of arr) console.log(item);

//Looping Object
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} day: `;
for (const day of properties) {
  openStr += `${day} ,`;
}
console.log(openStr);

// for (const day of Object.keys(openingHours))
// console.log(day);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entrie object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} */

//Coding challenge 2;

/* Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK � */
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
};  */

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// 1.
/* for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.

const odds = Object.values(game.odds);
console.log(odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

// 3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4.

const scorers = {};
for (const player of game.scored) {

  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); */

//////////////////////////////////////////////
// 9.14 Sets

// Set is collection of unique values -> a set can never have any duplicate.

/* const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

// The order of elements is irrelevant -> not index[0];

console.log(new Set('Jonas'));
//size of set
console.log(ordersSet.size);

//check set exist
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// add new element
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// delete a element
ordersSet.delete('Pizza');
console.log(ordersSet);

// clear Set
// ordersSet.clear();
// console.log(ordersSet);

// Iterable // Loop Set
for (const order of ordersSet) console.log(order);

// Remove duplicate value in an array by use SET;

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef'];
const staffUnique = new Set(staff);

//New array by set and []
const staffArr = [...new Set(staff)];
console.log(staffUnique);
console.log('------New Array from Set--------------');
console.log(staffArr);

console.log(new Set(['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef']).size);
console.log(new Set('Jonasskjdnvksdnvk00').size); */

///////////////////////////////////////////
// 9.15 MAP

// Map is a data structue that we can use map value to key
// Different Map vs Obj is Maps the keys can have any type
// Obj - the keys alwway strings.
// In Map we can have any type of key it can object, array, or other map

// Create a empty Map we can use new Map();
/* const rest = new Map();

// Fill up map (add) use two argument
// the first is key and the second is name of the key
rest.set('name', 'Quang Thu restaurant');
rest.set(1, 'Quy Nhơn, Bình Định');
console.log(rest);
console.log(rest.set(2, 'Hai Chau, Da Nang'));

// We can chain the next set

rest
  .set('categories', ['Banh trang tron', 'Sup cua', 'Rau song'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open: 🧡💛❤')
  .set(false, 'We are closed : ((');

// Read data from map -> use get
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Now , we use boolean keys to check value time us below

// const time = 21;
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Method
// Check if a map contain a certain key
console.log(rest.has('categories'));

// delete a key 
rest.delete(2);
console.log(rest);

// clear rest
// rest.clear();
// Size of Maps
console.log(rest.size);

// We can face use arrays or objects as map keys

const arr = [1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr)); */

//////////////////////////////////////////////////////////
// 9.16 Maps: Iteration

/* const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Create new Maps mutiple key and value (array in array) but don't use set

const question = new Map([
  ['question', 'What is the best programing language in the world ? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct ❤'],
  [false, 'Try again !'],
]);

console.log(question);

// Convert object to map
console.log(openingHours);
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// For loop Quizz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = 3;
console.log(answer);
// const answer = Number(prompt('Your answer'));
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);  

 */

////////////////////////////////////////////
// 9.17 Coding challenge 3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that
 happened (no duplicates)
2. After the game has finished, is was found that the yellow 
card from minute
 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened,
 on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking 
whether it's in the first half or second half (after 45 min) 
of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/* const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happen, on average, every ${90/ gameEvents.size} minutes`
);

// 4.

for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
 */

//////////////////////////////////////
// 9.19 Working with String Part 1

/* // New String by new keywords
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline);
console.log(plane);

// Logs letter of string
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(airline[0]);

// Logs lenght of string
console.log(airline.length);
console.log('Quang'.length);

// Logs index of one letter in string
console.log('Logs index of one letter in string');
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// Slice string at an position in string use 'slice' keyword.
console.log('-----------slice--------------');
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Function check middle seat on plane

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky ❤');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(new String('jonas').slice(1));
console.log(typeof new String('jonas').slice(1)); */

//////////////////////////////////////////////
// Working with String Part 2
/* 
const airline = 'TAP Air portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'qUaNG';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails

const email = 'hello@quang.gmail';
const loginEmail = ' HEllo@Quang.Gmail \n';

// Trimmed String use trim() method
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// relacing
const priceGB = '300,00£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

//announcement : thong bao, canh bao

const announcement =
  'All passenger come to boarding door 23. Boarding door 23! ';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('320'));
console.log(plane.includes('Booeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); */

//////////////////////////////////////////
// Working with String Part 3

// Split
/* console.log('a+very+nice+string'.split('+'));
console.log('Le Tuyet Thu'.split(' '));

const [firstName, lastName] = 'Tuyet Thu'.split(' ');
console.log(`Mrs.`, firstName, lastName.toUpperCase());

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names){
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('le tuyet thu');

// Padding 
const message = 'Go to gate 22!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Thu'.padStart(25, '+').padEnd(35, '+'));

//
const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
 return last.padStart(str.length, '*');
}

console.log(maskCreditCard(2324546453434));
console.log(maskCreditCard('245452324546453434'));

// repeat 

const message2 = 'Bad weather...All Departues Deplayed...';
console.log(message2.repeat(5));


const planesInline = function(n){
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
} ;
planesInline(5);
planesInline(4); */
