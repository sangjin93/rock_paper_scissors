// Declare initial values of each score (player, computer and when it's a tie)
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const rockButton = document.getElementById('rock');
    rockButton.addEventListener('click', () => {
        console.log("You chose rock");
        let result = (playRound ("rock", computerPlay()));
    });

const paperButton = document.getElementById('paper');
    paperButton.addEventListener('click', () => {
        console.log("You chose paper");
        let result = (playRound ("paper", computerPlay()));
    });

const scissorsButton = document.getElementById('scissors');
    scissorsButton.addEventListener('click', () => {
        console.log("You chose scissors");
        let result = (playRound ("scissors", computerPlay()));
    });

// Function that randomly determines the computer's play
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

function game() {
    
    const computerSelection = computerPlay(num = 3); 

    console.log(playRound (playerSelection, computerSelection));
}

console.log(game()); 

console.log("Game over. Your final score is " +playerScore+ " wins, " +computerScore+ " losses and " 
            +tieScore+ " draws."); 

function gameResult () { // Compares scores and returns outcome
    
    if (playerScore === 5) {
        console.log("Congratulations! You won.");
    }   else if (playerScore && computerScore === 5) {
        console.log("It's a tie.");
    }   else (computerScore === 5) 
        console.log("You lost.");
}

gameResult();