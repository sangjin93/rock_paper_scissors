function computerPlay(num = 3) {
    result = Math.floor(Math.random() * num);

    if (result === 0) {
        console.log("Rock");
    }   else if (result === 1) {
        console.log("Paper");
    }   else {
        console.log ("Scissors");
    }
}

function playRound(playerSelection, computerSelection) {

    prompt ("Rock, Paper or Scissors?", "");

    if (playerSelection === "rock" && selection === answer.toLowerCase()) {
        return playerSelection;
    }   else if (playerSelection === "paper" && selection === answer.toLowerCase()) {
        return playerSelection;
    }   else (playerSelection === "scissors" && selection === answer.toLowerCase()) {
        return playerSelection;
    }
    
}