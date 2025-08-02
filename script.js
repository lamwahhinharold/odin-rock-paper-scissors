let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 100) + 1;

  if (randomValue <= 33) {
    return "rock";
  } else if (randomValue >= 34 && randomValue <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("What is your choice? Rock, paper or scissors?");
  return humanChoice;
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function displayRoundOutcome(displayString) {
  const container = document.querySelector("#game-text-display");
  const roundOutcome = document.createElement("div");
  roundOutcome.textContent = displayString;
  container.appendChild(roundOutcome);
}

function playRound(humanChoice, computerChoice) {
  let sanitizedHumanChoice = humanChoice.toLowerCase();
  const container = document.querySelector("#game-text-display");

  const humanChoiceDisplay = document.createElement("div");
  humanChoiceDisplay.textContent =
    "Your choice: " + capitalizeFirstLetter(sanitizedHumanChoice);
  container.appendChild(humanChoiceDisplay);

  const computerChoiceDisplay = document.createElement("div");
  computerChoiceDisplay.textContent =
    "Computer's choice: " + capitalizeFirstLetter(computerChoice);
  container.appendChild(computerChoiceDisplay);

  if (sanitizedHumanChoice === "paper" && computerChoice === "rock") {
    displayRoundOutcome("You win! Paper beats Rock");
    humanScore++;
  } else if (
    sanitizedHumanChoice === "scissors" &&
    computerChoice === "paper"
  ) {
    displayRoundOutcome("You win! Scissors beats Paper");
    humanScore++;
  } else if (sanitizedHumanChoice === "rock" && computerChoice === "scissors") {
    displayRoundOutcome("You win! Rock beats Scissors");
    humanScore++;
  } else if (sanitizedHumanChoice === computerChoice) {
    displayRoundOutcome(
      "It's a draw. The computer and you both picked " +
        capitalizeFirstLetter(sanitizedHumanChoice)
    );
  } else {
    displayRoundOutcome(
      "You lose! " +
        capitalizeFirstLetter(computerChoice) +
        " beats " +
        capitalizeFirstLetter(sanitizedHumanChoice)
    );
    computerScore++;
  }

  const roundEndLineBreak = document.createElement("div");
  roundEndLineBreak.textContent = "--------------------------------------------------";
  container.appendChild(roundEndLineBreak);
}

const buttons = document.querySelector("#buttons-container");
buttons.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.id) {
    case "rock-button":
      playRound("rock", getComputerChoice());
      break;
    case "paper-button":
      playRound("paper", getComputerChoice());
      break;
    case "scissors-button":
      playRound("scissors", getComputerChoice());
      break;
  }
});
