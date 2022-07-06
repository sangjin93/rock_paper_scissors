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

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const computerSelection = computerPlay(num = 3);

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

function game() {

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase();

        console.log(playRound (playerSelection, computerSelection));
    }
}

console.log(game());

console.log("Your final score is" +playerScore+ "wins" +computerScore+ "loses and" 
            +tieScore+ "draws.");