'use strict';

/*const dice = document.querySelector('.dice');
const playerScore = document.querySelectorAll('.score');
for (let i = 0; i < playerScore.length; i++) {
  playerScore[i].textContent = 0;
}
const hideDice = function () {
  dice.style.display = 'none';
};
hideDice();*/

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
score0El.textContent = 0;
score1El.textContent = 0;
const diceElement = document.querySelector('.dice');
diceElement.classList.add('hide');
const score = [0, 0];
let currentScore = 0;
let PLayer = 0;
let playing = true;
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldCurrentScore = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const holdFunction = function () {
  PLayer = PLayer === 0 ? 1 : 0;
  PLayer === 1 ? (currentScore = 0) : (currentScore = 0);
  PLayer === 1
    ? (currentScore0.textContent = 0)
    : (currentScore1.textContent = 0);
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const RollDice = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hide');
    diceElement.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${PLayer}`).textContent = currentScore;
      // currentScore0.textContent += currentScore;
    } else {
      holdFunction();
    }
  }
};

btnRollDice.addEventListener('click', RollDice);

const HoldScore = function () {
  //   if (PLayer === 1 || 0) {
  //     const Hold =
  //   }
  if (playing) {
    score[PLayer] += currentScore;
    document.getElementById(`score--${PLayer}`).textContent = score[PLayer];
    if (score[PLayer] >= 100) {
      playing = false;
      diceElement.classList.toggle('hide');
      document
        .querySelector(`.player--${PLayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${PLayer}`)
        .classList.remove('player--active');
    } else {
      holdFunction();
    }
  }
};

btnHoldCurrentScore.addEventListener('click', HoldScore);

const init = function () {
  //   document.getElementById(`current--${PLayer}`).textContent = 0;
  //   score[PLayer] = 0;
  //   score0El.textContent = 0;
  //   score1El.textContent = 0;
  //   //   diceElement.classList.toggle('hide');
  //   document
  //     .querySelector(`.player--${PLayer}`)
  //     .classList.remove('player--winner');
  //   document
  //     .querySelector(`.player--${PLayer}`)
  //     .classList.remove('player--active');
  //   playing = true;

  /* DECIDED TO WORK SMART NOT HARD. */
  location.reload();
};
btnNewGame.addEventListener('click', init);
