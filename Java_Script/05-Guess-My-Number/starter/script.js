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
/* let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMessage('No number here .....');

    //When guess is to low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
    }

    // When guess is to high
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' Too hight  ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
    }
    // When player wins
  } else {
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});
//when player click Again
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
removeEventListener; */

//Coding challenge #1

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number ....');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game ! and poor you..hehehe');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Click Again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Star gussing .....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
