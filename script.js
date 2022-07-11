const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return button.id;
    });
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

// Declare initial values of each score (player, computer and when it's a tie)
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

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

    for (let i = 0; i < 5; i++) { // Creates a loop of 5 games to play

        playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase(); 

        const computerSelection = computerPlay(num = 3); 

        console.log(playRound (playerSelection, computerSelection));
    }
}

console.log(game()); // Plays the loop

console.log("Game over. Your final score is " +playerScore+ " wins, " +computerScore+ " losses and " 
            +tieScore+ " draws."); 

function gameResult () { // Compares scores and returns outcome
    
    if (playerScore > computerScore) {
        console.log("Congratulations! You won.");
    }   else if (playerScore === computerScore) {
        console.log("It's a tie.");
    }   else {
        console.log("You lost.");
    }
}

gameResult();