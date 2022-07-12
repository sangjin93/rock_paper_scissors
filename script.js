// Declare initial values of each score (player, computer and when it's a tie)
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const rockButton = document.getElementById("rock");
    rockButton.addEventListener('click', () => {
        console.log("You chose rock");
        result = (playRound("rock", computerPlay()));
    });

const paperButton = document.getElementById("paper");
    paperButton.addEventListener('click', () => {
        console.log("You chose paper");
        result = (playRound("paper", computerPlay()));
    });

const scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener('click', () => {
        console.log("You chose scissors");
        result = (playRound("scissors", computerPlay()));
    });

// Function that randomly determines the computer's play
function computerPlay() {
    let selector = Math.floor(Math.random() * 3);

    if (selector === 0) {
        computerSelection = "rock";
    }   else if (selector === 1) {
        computerSelection = "paper";
    }   else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

// Compares player's choice with computer's play, tallies score and returns a result
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        tieScore++;
        return `It's a tie! You both picked ${playerSelection}`;
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
    }   else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function gameResult () { // Compares scores and returns outcome
    
    if (playerScore === 5) {
        console.log("Congratulations! You won.");
    }   else if (playerScore && computerScore === 5) {
        console.log("It's a tie.");
    }   else if (computerScore === 5) {
        console.log("You lost. Computer wins!");
    }   else {
        console.log("");
    }
}

gameResult();