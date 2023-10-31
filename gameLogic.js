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

function game(){
    let count = 0;

    for (let i = 0; i < 5; i++) {
        let winner;
        let playerChoice = prompt();
        let computerChoice = getComputerChoice();

        winner = playRound(computerChoice.toLowerCase(), playerChoice.toLowerCase());
        console.log(computerChoice, playerChoice, winner);

        if(winner === "Computer wins") count += 1;
    }

    if (count >= 3) return "Computer won most rounds";
    else if(count <= 3) return "Player won most rounds";
    else return "Draw";

}

console.log(game());





