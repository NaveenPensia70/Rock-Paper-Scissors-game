let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");
let showResult=document.querySelector(".show-result");
let choiceContainer=document.querySelector(".choice-container");
let pointsContainer=document.querySelector(".points-container");
let displayPlayerPoints=document.querySelector(".show-player-points");
let displayComputerPoints=document.querySelector(".show-computer-points");
let playerChoice=document.createElement("img");
let computerChoice=document.createElement("img");
let rockUrl='images/rockgame.jpg';
let paperUrl='images/papergame.jpg';
let scissorsUrl='images/scissorsgame.jpg';
let playerSelection = '';
let computerPoint = 0;
let playerPoint = 0;

playerChoice.classList.add("player-choice");
computerChoice.classList.add("computer-choice");

function defaultSetup(){
    playerChoice.src=paperUrl;
    computerChoice.src=rockUrl;
    choiceContainer.append(playerChoice);
    choiceContainer.append(computerChoice);
    displayPlayerPoints.textContent=`Player Points: ${playerPoint}`;
    displayComputerPoints.textContent=`Computer Points: ${computerPoint}`;
}
defaultSetup();
rock.addEventListener('click', (event) => {
    playerSelection = 'rock';
    playerChoice.src=rockUrl;
    playground();
});
paper.addEventListener('click', (event) => {
    playerSelection = 'paper';
    playerChoice.src=paperUrl;
    playground();
});
scissors.addEventListener('click', (event) => {
    playerSelection = 'scissors';
    playerChoice.src=scissorsUrl;
    playground();
});

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            computerChoice.src=rockUrl;
            return 'rock';
            
        case 1:
            computerChoice.src=paperUrl;
            return 'paper';
        case 2:
            computerChoice.src=scissorsUrl;
            return 'scissors';
    }
}

// function showChoice(){
//     console.log(`Player Choice: ${playerSelection}`);
//     console.log('Computer Choice: ',getComputerChoice());
// }

function showPoints(){
    displayPlayerPoints.textContent=`Player Points: ${playerPoint}`;
    displayComputerPoints.textContent=`Computer Points ${computerPoint}`;
}

function playground() {
    let computerSelection = getComputerChoice();
    if (playerPoint < 5 && computerPoint < 5) {
        // showChoice();
        choiceContainer.append(playerChoice);
        choiceContainer.append(computerChoice);
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                showResult.textContent="You lose!! paper beats rock.";
                computerPoint++;
            } else if (computerSelection == 'scissors') {
                showResult.textContent="You won!! rock beats scissors.";
                playerPoint++;
            } else if (computerSelection == 'rock') {
                showResult.textContent="That's a tie!!";
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == "scissors") {
                showResult.textContent="You lose!! scissors beats paper.";
                computerPoint++;
            } else if (computerSelection == 'rock') {
                showResult.textContent="You won!! paper beats rock.";
                playerPoint++;
            } else if (computerSelection == 'paper') {
                showResult.textContent="That's a tie!!";
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == 'rock') {
                showResult.textContent="You lose!! rock beats scissors";
                computerPoint++;
            } else if (computerSelection == 'paper') {
                showResult.textContent="You won!! scissors beats paper";
                playerPoint++;
            } else if (computerSelection == "scissors") {
                showResult.textContent="That's a tie.";
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
            showResult.textContent=`Sorry!! you have lost the match by ${computerWin} points.`;
        } else {
            showResult.textContent=`Congratulations!! you won by ${playerWin} points.`;
        }
        // Optionally, you can reset the game here if you want to play again
        computerPoint = 0;
        playerPoint = 0;
        
    // }
}
