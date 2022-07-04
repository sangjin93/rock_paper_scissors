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

computerPlay();