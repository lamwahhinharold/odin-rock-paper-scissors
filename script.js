let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomValue = Math.floor(Math.random() * 100) + 1;

  if (randomValue <= 33) {
    return "rock";
  } else if (randomValue >= 34 && randomValue <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  humanChoice = prompt("What is your choice? Rock, paper or scissors?");
  return humanChoice;
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function playRound(humanChoice, computerChoice) {
  let sanitizedHumanChoice = humanChoice.toLowerCase();
  console.log("Your choice: " + capitalizeFirstLetter(sanitizedHumanChoice));
  console.log("Computer's choice: " + capitalizeFirstLetter(computerChoice));
  if (sanitizedHumanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (
    sanitizedHumanChoice === "scissors" &&
    computerChoice === "paper"
  ) {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (sanitizedHumanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (sanitizedHumanChoice === computerChoice) {
    console.log(
      "It's a draw. The computer and you both picked " +
        capitalizeFirstLetter(sanitizedHumanChoice)
    );
  } else {
    console.log(
      "You lose! " +
        capitalizeFirstLetter(computerChoice) +
        " beats " +
        capitalizeFirstLetter(sanitizedHumanChoice)
    );
    computerScore++;
  }
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
