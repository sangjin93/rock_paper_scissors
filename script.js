function getRandomInt(num) {
    const result = Math.floor(Math.random() * num);
    if (result === 0) {
        console.log("Rock");
    }   else if (result === 1) {
        console.log("Paper");
    }   else {
        console.log ("Scissors");
    }
}

const computerPlay = getRandomInt (3);