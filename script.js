let playerPoints = 0;
let computerPoints = 0;

const playerRock = document.querySelector('#rock');
const playerScissor = document.querySelector('#scissor');
const playerPaper = document.querySelector('#paper');
const results = document.querySelector('.results');

playerRock.addEventListener('click', () =>  { playRound('rock')});
playerPaper.addEventListener('click', () =>  { playRound('paper')});
playerScissor.addEventListener('click', () =>  { playRound('scissor')});





function getComputerChoice() {
    let x = Math.random() * 3;
    if (x <= 1 ) {
        return "rock";
    }
    else if (x <= 2) {
        return "paper";
    }
    else if (x <= 3) {
        return "scissor";
    }
}

function playRound(userInput) {
    let compInput = getComputerChoice().toLowerCase();

    const x = "Computer Points: " + computerPoints + "\nPlayer Points: " + playerPoints;

    if ((userInput == "rock" && compInput == "rock") || ((userInput == "paper" && compInput == "paper")) || ((userInput == "scissor" && compInput == "scissor"))) {
        const xy = (userInput.substring(0,1).toUpperCase() + userInput.substring(1)) + " vs " + (compInput.substring(0,1).toUpperCase() + compInput.substring(1)) + ": Draw!\n" + x;
        results.textContent = xy;
    }
    else if ((userInput == "rock") && (compInput == "paper")) {
        results.textContent = 'You lose, Paper beats Rock!\n' + x;
        computerPoints++;
    }
    else if ((userInput == "paper") && (compInput == "rock")) {
        results.textContent = 'You win, Paper beats Rock!\n' + x;
        playerPoints++;
    }
    else if ((userInput == "paper") && (compInput == "scissor")) {
        results.textContent = 'You lose, Scissor Beats Paper!\n' + x;
        computerPoints++;
    }
    else if ((userInput == "scissor") && (compInput == "paper")) {
        results.textContent = 'You win, Scissor beats Paper!\n' + x;
        playerPoints++;
    }
    else if ((userInput == "rock") && (compInput == "scissor")) {
        results.textContent = 'You win, Rock beats Scissor\n' + x;
        playerPoints++;
    }
    else if ((userInput == "scissor") && (compInput == "rock")) {
        results.textContent = 'You lose, Rock Beats Scissor!\n' + x;
        computerPoints++;
    }

    playGame();
}

function playGame() {
    const score = document.createElement('div');
    score.textContent = "Player Points: " + playerPoints;

    if (playerPoints > 3) {
        results.textContent = "You win!";
    }
    else if (computerPoints > 3) {
        results.textContent = "You Lose!";
    }
}


