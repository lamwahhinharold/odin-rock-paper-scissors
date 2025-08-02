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

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function displayChoices(sanitizedHumanChoice, computerChoice) {
  const container = document.querySelector("#game-text-display");

  const displayHumanChoice = document.createElement("div");
  displayHumanChoice.textContent =
    "Your choice: " + capitalizeFirstLetter(sanitizedHumanChoice);
  container.appendChild(displayHumanChoice);

  const displayComputerChoice = document.createElement("div");
  displayComputerChoice.textContent =
    "Computer's choice: " + capitalizeFirstLetter(computerChoice);
  container.appendChild(displayComputerChoice);
}

function executeRoundLogic(sanitizedHumanChoice, computerChoice) {
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
}

function displayRoundOutcome(string) {
  const container = document.querySelector("#game-text-display");

  const roundOutcome = document.createElement("div");
  roundOutcome.textContent = string;
  container.appendChild(roundOutcome);
}

function displayScores() {
  const container = document.querySelector("#game-text-display");

  const displayHumanScore = document.createElement("div");
  displayHumanScore.textContent = "Your score: " + humanScore;
  container.appendChild(displayHumanScore);

  const displayComputerScore = document.createElement("div");
  displayComputerScore.textContent = "Computer's score: " + computerScore;
  container.appendChild(displayComputerScore);
}

function displayRoundEndLineBreak() {
  const container = document.querySelector("#game-text-display");

  const roundEndLineBreak = document.createElement("div");
  roundEndLineBreak.textContent =
    "--------------------------------------------------";
  container.appendChild(roundEndLineBreak);
}

function gameReset() {
  humanScore = 0;
  computerScore = 0;
}

function announceWinnerAndReset() {
  if (humanScore === 5 && computerScore < 5) {
    const container = document.querySelector("#game-text-display");

    const announceWinner = document.createElement("div");
    announceWinner.textContent = "Game ends. You win!";
    container.appendChild(announceWinner);

    displayRoundEndLineBreak();
    gameReset();
  } else if (computerScore === 5 && humanScore < 5) {
    const container = document.querySelector("#game-text-display");

    const announceWinner = document.createElement("div");
    announceWinner.textContent = "Game ends. You lose.";
    container.appendChild(announceWinner);

    displayRoundEndLineBreak();
    gameReset();
  }
}

function playRound(humanChoice, computerChoice) {
  let sanitizedHumanChoice = humanChoice.toLowerCase();

  displayChoices(sanitizedHumanChoice, computerChoice);
  executeRoundLogic(sanitizedHumanChoice, computerChoice);
  displayScores();
  displayRoundEndLineBreak();
  announceWinnerAndReset();
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
