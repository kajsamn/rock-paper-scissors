let playerScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice() {
  const num1 = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (num1) {
    case 0:
      computerChoice = "stein";
      break;
    case 1:
      computerChoice = "papir";
      break;
    case 2:
      computerChoice = "saks";
      break;
  }
  return computerChoice;
}
//getComputerChoice();
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "stein" && computerSelection === "saks") {
    return playerScore++;
  } else if (playerSelection === "papir" && computerSelection === "stein") {
    return playerScore++;
  } else if (playerSelection === "saks" && computerSelection === "papir") {
    return playerScore++;
  } else if (playerSelection === computerSelection) {
    return tie++;
  } else {
    return computerScore++;
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose stein, papir or saks").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  showWinner();
}
game();

function showWinner() {
  console.log("Du fikk: " + playerScore);
  console.log("likt: " + tie);
  console.log("Maskinen fikk: " + computerScore);
  if (playerScore > computerScore) {
    console.log("Du vinner!");
  } else if (computerScore > playerScore) {
    console.log("Maskinen vinner!");
  } else {
    console.log("Det ble likt!");
  }
}
