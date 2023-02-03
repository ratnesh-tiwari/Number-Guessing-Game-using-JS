"use strict";

const btnAgainEl = document.querySelector(".again");
const liveScoreRamdomEl = document.querySelector(".number--real--value");
const highScoreEl = document.querySelector(".high--score");
const RealTimeScoreEl = document.querySelector(".realtime--score");
const btnCheckEl = document.querySelector(".check");
const displayMessageEl = document.querySelector(".heading--secondary");
const inputEl = document.querySelector(".input");

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(randomNumber);

const displayMessage = (el, messgae) => {
  el.textContent = messgae;
};

btnCheckEl.addEventListener("click", function () {
  const guess = +inputEl.value;
  console.log(guess);
  if (!guess) {
    displayMessage(displayMessageEl, "⛔ No number!");
  } else if (guess === randomNumber) {
    liveScoreRamdomEl.textContent = randomNumber;
    displayMessage(displayMessageEl, "🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    liveScoreRamdomEl.style.width = "15rem";
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        displayMessageEl,
        guess > randomNumber ? "📈 Too high!" : "📉 Too low!"
      );
      score--;
      RealTimeScoreEl.textContent = score;
    } else {
      displayMessage(displayMessageEl, "💥 You lose the game!");
    }
  }
});

btnAgainEl.addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessageEl.textContent = "Start guessing...";
  RealTimeScoreEl.textContent = score;
  liveScoreRamdomEl.textContent = "?";
  inputEl.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  liveScoreRamdomEl.style.width = "10rem";
});
