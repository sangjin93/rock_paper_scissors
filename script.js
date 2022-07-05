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
        tieScore++;
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
        playerScore++;
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
        playerScore++;
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
        playerScore++;
    }   else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase();

const computerSelection = computerPlay(num = 3);

function game() {

    for (let i = 0; i < 5; i++) {
        console.log (playRound (playerSelection, computerSelection));
    }
}

game ();