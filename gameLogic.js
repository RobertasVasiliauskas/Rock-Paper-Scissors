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

    if (computerSelection === playerSelection) result = "Draw"; else if (computerSelection === "rock" && playerSelection === "scissors") result = "Computer wins"; else if (computerSelection === "scissors" && playerSelection === "paper") result = "Computer wins"; else if (computerSelection === "paper" && playerSelection === "rock") result = "Computer wins"; else result = "Player wins";

    return result;
}

const buttons = document.querySelectorAll("button");
const displayRound = document.querySelector("#round");
const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");

function updatePlayerScore(newScore) {
    displayPlayerScore.innerHTML = `Players score: ${newScore}`
}

function updateComputerScore(newScore) {
    displayComputerScore.innerHTML = `Computer score: ${newScore}`
}


function updateRound(roundNumber) {
    displayRound.innerHTML = `Round: ${roundNumber}`;
}

let playerScore = 0;
let computerScore = 0;
let count = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        count += 1;

        let winner = playRound(getComputerChoice().toLowerCase(), button.id.toLowerCase());
        alert(winner);

        if (winner === "Computer wins") computerScore += 1;
        else if (winner === "Player wins") playerScore += 1;
        else {
            computerScore += 1;
            playerScore += 1;
        }

        updateRound(count);
        updateComputerScore(computerScore);
        updatePlayerScore(playerScore);

        if (count === 5) {

            playerScore = 0;
            computerScore = 0;
            count = 0;

            if (playerScore > computerScore) alert("Player wins") ;
            else if (playerScore < computerScore) alert("Computer wins") ;
            else alert("Draw!");

        }

    });
});







