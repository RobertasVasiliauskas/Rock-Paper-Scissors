function getComputerChoice() {
    let choice;
    const howMuchChoices = 3;

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    switch (getRandom(howMuchChoices)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
}

console.log(getComputerChoice());