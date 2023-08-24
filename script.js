'use strict';

const btnCheck = document.querySelector('.check');
const inputField = document.querySelector('.guess')
const message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreNumber = document.querySelector('.score');
let score = 20;
let highScore = 0;


btnCheck.addEventListener('click', () => {
  const input = Number(inputField.value);

  if (!input) {
    message.textContent = 'no number!';
  } else if (input === secretNumber) {
    message.textContent = 'Correct Number'
    score++
    scoreNumber.textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '40rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (input < secretNumber) {
    message.textContent = 'too low';
    score--
    scoreNumber.textContent = score;
  } else if (input > secretNumber) {
    message.textContent = 'too high'
    score--
    scoreNumber.textContent = score;
  };

  if (score < 1) {
    message.textContent = 'Game Over';
    scoreNumber.textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});


// The Again Button

const again = document.querySelector('.again')

again.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreNumber.textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  inputField.value = '';
  document.querySelector('.number').style.width = '15rem';
})





