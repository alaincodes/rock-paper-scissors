// ROCK PAPER SCISSORS THE ODIN PROJECT

let computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  let result = Math.floor(Math.random() * 3);
  return choices[result];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) { return "IT'S A TIE" } 

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "YOU WIN CPU LOSE!"
    } else { return "CPU WIN YOU LOSE!" }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "YOU LOSE CPU WIN!"
    } else { return "PLAYER WIN CPU LOSE!" }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") { 
      return "CPU WIN YOU LOSE!"
    } else { return "PLAYER WIN CPU LOSE!" }
  }

};