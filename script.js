let rock = document.querySelector("#rock-btn");
let paper = document.querySelector("#paper-btn");
let scissors = document.querySelector("#scissors-btn");
let playerSelection = '';
let computerPoint = 0;
let playerPoint = 0;

rock.addEventListener('click', (event) => {
    playerSelection = 'rock';
    playground();
});
paper.addEventListener('click', (event) => {
    playerSelection = 'paper';
    playground();
});
scissors.addEventListener('click', (event) => {
    playerSelection = 'scissors';
    playground();
});

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function showChoice(){
    console.log(`Player Choice: ${playerSelection}`);
    console.log('Computer Choice: ',getComputerChoice());
}

function showPoints(){
    console.log(`Player Points: ${playerPoint}`);
    console.log(`Computer Points: ${computerPoint}`);
}

function playground() {
    let computerSelection = getComputerChoice();
    if (playerPoint < 5 && computerPoint < 5) {
        showChoice();
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                console.log("You lose!! paper beats rock.");
                computerPoint++;
            } else if (computerSelection == 'scissors') {
                console.log("You won!! rock beats scissors.");
                playerPoint++;
            } else if (computerSelection == 'rock') {
                console.log("That's a tie!!");
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == "scissors") {
                console.log("You lose!! scissors beats paper.");
                computerPoint++;
            } else if (computerSelection == 'rock') {
                console.log("You won!! paper beats rock.");
                playerPoint++;
            } else if (computerSelection == 'paper') {
                console.log("That's a tie!!");
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == 'rock') {
                console.log("You lose!! rock beats scissors");
                computerPoint++;
            } else if (computerSelection == 'paper') {
                console.log("You won!! scissors beats paper");
                playerPoint++;
            } else if (computerSelection == "scissors") {
                console.log("That's a tie.");
            }
        }
        showPoints();
        if (playerPoint == 5 || computerPoint == 5) {
            playgame();
        }
    }
}

function playgame() {
    let playerWin = playerPoint - computerPoint;
    let computerWin = computerPoint - playerPoint;
    // if (playerPoint == 5 || computerPoint == 5) {
        if (computerPoint > playerPoint) {
            console.log(`Sorry!! you have lost the match by ${computerWin} points.`);
        } else {
            console.log(`Congratulations!! you won by ${playerWin} points.`);
        }
        // Optionally, you can reset the game here if you want to play again
        computerPoint = 0;
        playerPoint = 0;
        
    // }
}
