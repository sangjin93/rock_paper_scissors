// Declare initial values of each score (player, computer and when it's a tie)
let playerScore = 0;
let computerScore = 0;
let resultText = document.getElementById('matchResult');
    
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
        resultText.textContent = ("This match was a tie.");
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        playerCounter.textContent = playerScore;
        resultText.textContent = ("You win! Rock beats " + computerSelection + '.');
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        playerCounter.textContent = playerScore;
        resultText.textContent = ("You win! Paper beats " + computerSelection + '.');
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        playerCounter.textContent = playerScore;
        resultText.textContent = ("You win! Scissors beats " + computerSelection + '.');
    }   else {
        computerScore++;
        computerCounter.textContent = computerScore;
        resultText.textContent = ("You lose. " + computerSelection +  " beats " + playerSelection + "."); 
    }
}

function gameResult () { // Compares scores and returns outcome
    
    if (playerScore === 5) {
        resultText.textContent = ("Congrats! You won 5 games before the computer!");
    }   else if (computerScore === 5) {
        resultText.textContent = ("Sorry, you lost. The computer won 5 games before you.");
    }   
}

const rockButton = document.getElementById("rock");
    rockButton.addEventListener('click', () => {
        console.log("You chose rock");
        playRound ("rock", computerPlay());
    });

const paperButton = document.getElementById("paper");
    paperButton.addEventListener('click', () => {
        console.log("You chose paper");
        playRound ("paper", computerPlay());
    });

const scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener('click', () => {
        console.log("You chose scissors");
        playRound ("scissors", computerPlay());
    });