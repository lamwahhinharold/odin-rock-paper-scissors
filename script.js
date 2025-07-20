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

console.log(getComputerChoice());

function getHumanChoice() {
  humanChoice = prompt("What is your choice? Rock, paper or scissors?");
  return humanChoice;
}

console.log(getHumanChoice());
