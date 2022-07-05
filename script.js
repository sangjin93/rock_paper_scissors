function computerPlay(num = 3) {
    result = Math.floor(Math.random() * num);

    if (result === 0) {
        return "rock";
    }   else if (result === 1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    }   else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase();

const computerSelection = computerPlay();