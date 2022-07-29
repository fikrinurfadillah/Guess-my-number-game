'use strict';

let secretNumber = getRandomNumber();
let scores = 20;
let highScore = 0;

const messageElement = document.querySelector('.message');
const scoresElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const bodyElement = document.querySelector('body');
const numberELement = document.querySelector('.number');
const btnCheckElement = document.querySelector('.check');
const btnAgainElement = document.querySelector('.again');

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

btnCheckElement.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no guess
  if (!guess) {
    messageElement.textContent = 'No Guess..🚫';
  }
  //   when player wins
  else if (guess === secretNumber) {
    if (scores > highScore) {
      highScore = scores;
      highScoreElement.textContent = highScore;
    }
    messageElement.textContent = 'Correct Number!🎉';
    bodyElement.style.backgroundColor = '#60b347';
    numberELement.textContent = secretNumber;
    numberELement.style.width = '30rem';
    btnCheckElement.setAttribute('disabled', 'true');
  }
  //   when guess is wrong(refactored code)
  else if (guess !== secretNumber) {
    if (scores > 1) {
      scores--;
      scoresElement.textContent = scores;
      messageElement.textContent =
        guess > secretNumber ? 'Too High!📈' : 'Too Low!📉';
    } else {
      messageElement.textContent = 'You lost the game';
      scoresElement.textContent = 0;
      btnCheckElement.setAttribute('disabled', 'true');
      bodyElement.style.backgroundColor = 'red';
    }
  }

  // when guess too high
  //   else if (guess > secretNumber) {
  //     if (scores > 1) {
  //       scores--;
  //       scoresElement.textContent = scores;
  //       messageElement.textContent = 'Too High!📈';
  //     } else {
  //       messageElement.textContent = 'You lost the game';
  //       scoresElement.textContent = 0;
  //     }
  //   }
  //   // when guess too low
  //   else if (guess < secretNumber) {
  //     if (scores > 1) {
  //       scores--;
  //       scoresElement.textContent = scores;
  //       messageElement.textContent = 'Too Low!📉';
  //     } else {
  //       messageElement.textContent = 'You lost the game';
  //       scoresElement.textContent = 0;
  //     }
  //   }
});

btnAgainElement.addEventListener('click', function () {
  secretNumber = getRandomNumber();
  scores = 20;
  bodyElement.style.backgroundColor = '#222';
  numberELement.textContent = '?';
  numberELement.style.width = '15rem';
  messageElement.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  scoresElement.textContent = scores;
  btnCheckElement.removeAttribute('disabled');
});
