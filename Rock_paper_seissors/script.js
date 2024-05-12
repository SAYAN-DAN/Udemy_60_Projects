const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.querySelector("#user-score");
const ComputerScoreEl = document.querySelector("#computer-score");

let playerScore = 0;
let ComputerScore = 0;
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerSelection = button.id;
    const computerSelection = computerplay();
    const result = playRound(playerSelection, computerSelection);
    resultEl.textContent = result;
  });
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    ComputerScore++;
    ComputerScoreEl.textContent = ComputerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function computerplay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
