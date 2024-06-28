let rock = document.querySelector("#rock-btn");
let paper = document.querySelector("#paper-btn");
let scissors = document.querySelector("#scissors-btn");
let player_selection = '';
let computer_win = 0;
let player_win = 0;

rock.addEventListener('click', (event) => {
    player_selection = 'rock';
    playground();
});
paper.addEventListener('click', (event) => {
    player_selection = 'paper';
    playground();
});
scissors.addEventListener('click', (event) => {
    player_selection = 'scissors';
    playground();
});

function getComputerChoice() {
    const random_choice = Math.floor(Math.random() * 3);
    switch (random_choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playground() {
    let computer_selection = getComputerChoice();
    if (player_win < 5 && computer_win < 5) {
        if (player_selection == 'rock') {
            if (computer_selection == 'paper') {
                console.log("You lose!! paper beats rock.");
                computer_win++;
            } else if (computer_selection == 'scissors') {
                console.log("You won!! rock beats scissors.");
                player_win++;
            } else if (computer_selection == 'rock') {
                console.log("That's a tie!!");
            }
        } else if (player_selection == 'paper') {
            if (computer_selection == "scissors") {
                console.log("You lose!! scissors beats paper.");
                computer_win++;
            } else if (computer_selection == 'rock') {
                console.log("You won!! paper beats rock.");
                player_win++;
            } else if (computer_selection == 'paper') {
                console.log("That's a tie!!");
            }
        } else if (player_selection == "scissors") {
            if (computer_selection == 'rock') {
                console.log("You lose!! rock beats scissors");
                computer_win++;
            } else if (computer_selection == 'paper') {
                console.log("You won!! scissors beats paper");
                player_win++;
            } else if (computer_selection == "scissors") {
                console.log("That's a tie.");
            }
        }

        if (player_win == 5 || computer_win == 5) {
            playgame();
        }
    }
}

function playgame() {
    let win_margin = player_win - computer_win;
    let lose_margin = computer_win - player_win;
    if (player_win == 5 || computer_win == 5) {
        if (computer_win > player_win) {
            console.log(`Sorry!! you have lost the match by ${lose_margin} points.`);
        } else {
            console.log(`Congratulations!! you won by ${win_margin} points.`);
        }
        // Optionally, you can reset the game here if you want to play again
        // computer_win = 0;
        // player_win = 0;
    }
}
