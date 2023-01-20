function getComputerChoice() {
    let x = Math.random() * 3;
    console.log(x);
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

function playerChoice() {
    let p = 0;
        return (prompt("Please enter in rock, paper, or scissors"));
}

function playRound() {
    let userInput = playerChoice().toLowerCase();
    let compInput = getComputerChoice().toLowerCase();
    console.log(userInput);
    console.log(compInput);

    if ((userInput == "rock" && compInput == "rock") || ((userInput == "paper" && compInput == "paper")) || ((userInput == "scissor" && compInput == "scissor"))) {
        console.log("It is a tie!");
    }

    if ((userInput == "rock") && (compInput == "paper")) {
        console.log("you lose, paper beats rock!");
    }
    else if ((userInput == "paper") && (compInput == "rock")) {
        console.log("you win, paper beats rock!");
    }
    else if ((userInput == "paper") && (compInput == "scissor")) {
        console.log("you lose, scissor beats paper!");
    }
    else if ((userInput == "scissor") && (compInput == "paper")) {
        console.log("you win, scissor beats paper!");
    }
    else if ((userInput == "rock") && (compInput == "scissor")) {
        console.log("you win, rock beats scissor!");
    }
    else if ((userInput == "scissor") && (compInput == "rock")) {
        console.log("you lose, rock beats scissor!");
    }

}

playRound();



