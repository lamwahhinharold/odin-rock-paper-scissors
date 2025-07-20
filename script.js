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

function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("");
  }
  console.log("");
  console.log("Your score: " + humanScore);
  console.log("Computer's score: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose.");
  } else {
    console.log("It's a draw");
  }
}

playGame();
