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

    if ((userInput == "rock" && compInput == "rock") || ((userInput == "paper" && compInput == "paper")) || ((userInput == "scissor" && compInput == "scissor"))) {
        console.log("It is a tie!");

    }

    if ((userInput == "rock") && (compInput == "paper")) {
        console.log("you lose, paper beats rock!");
        computerPoints++;
    }
    else if ((userInput == "paper") && (compInput == "rock")) {
        console.log("you win, paper beats rock!");
        results.classList.toggle('active');
        playerPoints++;
        

    }
    else if ((userInput == "paper") && (compInput == "scissor")) {
        console.log("you lose, scissor beats paper!");
        computerPoints++;
    }
    else if ((userInput == "scissor") && (compInput == "paper")) {
        console.log("you win, scissor beats paper!");
        playerPoints++;
    }
    else if ((userInput == "rock") && (compInput == "scissor")) {
        console.log("you win, rock beats scissor!");
        playerPoints++;
    }
    else if ((userInput == "scissor") && (compInput == "rock")) {
        console.log("you lose, rock beats scissor!");
        computerPoints++;
    }

}

function playGame() {
    while (playerPoints < 3 && computerPoints < 3) {
    playRound();
    console.log("Your Points: " + playerPoints);
    console.log("Computer Points: " + computerPoints);
    }

    if (playerPoints > computerPoints) {
        console.log("You Win!");
    }
    else {
        console.log("You lose!");
    }
}


