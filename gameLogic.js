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

function playRound(computerSelection, playerSelection) {
    let result;

    if (computerSelection === playerSelection) result = "Draw";
    else if (computerSelection === "rock" && playerSelection === "scissors") result = "Computer wins";
    else if (computerSelection === "scissors" && playerSelection === "paper") result = "Computer wins";
    else if (computerSelection === "paper" && playerSelection === "rock") result = "Computer wins";
    else result = "Player wins";

    return result;
}

let playerChoice = "Rock";
let computerChoice = getComputerChoice();
console.log(computerChoice, playerChoice, playRound(computerChoice.toLowerCase(), playerChoice.toLowerCase()));



