let rock= document.querySelector("#rock-btn");
let paper=document.querySelector("#paper-btn");
let scissors=document.querySelector("#scissors-btn");
let player_selection='';
rock.addEventListener('click',(event)=>{
    player_selection='rock';
    playground();
})
paper.addEventListener('click',(event)=>{
    player_selection='paper';
    playground();
})
scissors.addEventListener('click',(event)=>{
    player_selection='scissors';
    playground();
})
// player_button();
function getComputerChoice()
{
    const random_choice=Math.floor(Math.random()*3);
    switch(random_choice)
    {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// console.log(player_selection);
// console.log(computer_selection);
let computer_win=0;
let player_win=0;
function playground()
{
    
    let computer_selection=getComputerChoice();
    if(player_selection=='rock')
    {
        if(computer_selection=='paper')
        {
            console.log("You lose!! paper beats rock.");
            return ++computer_win;
        }
        else if(computer_selection=='scissors')
        {
            console.log("You won!! rock beats scissors.");
            return ++player_win;
        }
        else if(computer_selection=='rock')
        {
            console.log("That's a tie!!");
        }
    }
    if(player_selection=='paper')
    {
        if(computer_selection=="scissors")
        {
            console.log("You lose!! scissors beats paper.");
            return ++computer_win;
        }
        else if(computer_selection=='rock')
        {
            console.log("You won!! paper beats rock.");
            return ++player_win;
        }
        else if(computer_selection=='paper')
        {
            console.log("That's a tie!!");
        }
    }
    if(player_selection==scissors)
    {
        if(computer_selection=='rock')
        {
            console.log("You lose!! rock beats scissors");
            return ++computer_win;
        }
        else if(computer_selection=='paper')
        {
            console.log("You won!! scissors beats paper")
            return ++player_win;
        }
        else if(computer_selection=="scissors")
        {
            console.log("That's a tie.");
        }
    }

}
playground();

// function playgame()
// {
    
    
//     let lose_num=computer_win - player_win;
//     let win_num=player_win-computer_win;
//     if(computer_win>player_win)
//     {
//         console.log(`Sorry!! you have lost by ${lose_num} because you have only won ${player_win} rounds and computer won ${computer_win} rounds.`);
//     }
//     else if(player_win>computer_win)
//     {
//         console.log(`Congratulation!! you have won by  ${win_num} as you have won ${player_win} rounds and computer won only  ${computer_win} rounds.`)
//     }
    
// }
// playgame();
