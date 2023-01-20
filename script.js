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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());