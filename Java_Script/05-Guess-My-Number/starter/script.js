'use strict';
/* // Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉🎉 Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//input filed
document.querySelector('.guess').value = 16;
console.log(document.querySelector('.guess').value); */

//7.5 Handling Click Events

//7.6 Implementing the Game Logic
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number haha';
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' Too hight  ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
    }
  } else {
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
