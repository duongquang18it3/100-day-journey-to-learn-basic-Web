///////////////////////////////////////
// The Module Pattern

/* const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
  
    const addToCart = function (product, quantity) {
      cart.push({ product, quantity });
      console.log(
        `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
      );
    };
  
    const orderStock = function (product, quantity) {
      console.log(`${quantity} ${product} ordered from supplier`);
    };
  
    return {
      addToCart,
      cart,
      totalPrice,
      totalQuantity,
    };
  })();
  
  ShoppingCart2.addToCart('apple', 4);
  ShoppingCart2.addToCart('pizza', 2);
  console.log(ShoppingCart2);
  console.log(ShoppingCart2.shippingCost);

  //////////////////////////////////////
// CommonJS Modules
// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js'); */

//////////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
