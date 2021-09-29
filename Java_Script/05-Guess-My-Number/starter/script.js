'use strict';
// Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉🎉 Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//input filed
document.querySelector('.guess').value = 16;
console.log(document.querySelector('.guess').value);

