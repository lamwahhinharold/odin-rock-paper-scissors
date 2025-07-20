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
