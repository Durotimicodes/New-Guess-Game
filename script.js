"use strict";

// modal window start

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//OPEN MODAL EXPRESSION
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//CLOSE MODAL EXPRESSION
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// modal window ends

// functionality of Game starts

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

let lowestScore = 0;

const displayMessage = function (message) {
  document.querySelector("");
};

document.querySelector(".checker").addEventListener("click", function () {
  const checkNumber = Number(document.querySelector(".check-number").value);
  console.log(checkNumber);

  if (!checkNumber) {
    document.querySelector(".message").textContent = "⚠ No Number !";
  } else if (checkNumber === secreteNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number !";
    document.querySelector(".modal").style.backgroundColor =
      "rgba(85, 66, 196, 0.9)";

    document.querySelector(".secrete-number").textContent = secreteNumber;
    document.querySelector(".number-holder").style.borderRadius = "0%";

    // HIGHSCORE CONFIG
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // else (score < 11) {
    //   lowestScore = score;
    //   document.querySelector(".lowestscore").textContent = lowestScore;
    //   document.querySelector(".highscore").textContent = 0;
    // }

    // LOWEST SCORE CONFIG
  }

  // WHEN GUESS IS DIFFERENT
  else if (checkNumber !== secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        checkNumber > secreteNumber ? "📈Too High!" : "📉Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😁 You Lost The Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// RESTE BUTTON

document.querySelector(".reset-button").addEventListener("click", function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".secrete-number").textContent = "?";
  document.querySelector(".check-number").value = " ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".modal").style.backgroundColor = "rgb(49, 49, 49)";
  document.querySelector(".number-holder").style.borderRadius = "50%";
});
// functionality of Game ends
