const player_selection=prompt("Enter anything among rock, paper and scissors: ");
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
const computer_selection=getComputerChoice();
// console.log(player_selection);
// console.log(computer_selection);
let computer_win=0;
let player_win=0;
function playground(player_selection,computer_selection)
{
    if(player_selection=='rock')
    {
        if(computer_selection==='paper')
        {
            console.log(++computer_win);
        }
        else if(computer_selection='scissors')
        {
            console.log(++player_win);
        }
    }
    if(player_selection=='paper')
    {
        if(computer_selection==='scissors')
        {
            console.log(++computer_win);
        }
        else if(computer_selection='rock')
        {
            console.log(++player_win);
        }
    }
    if(player_selection=='scissors')
    {
        if(computer_selection==='rock')
        {
            console.log(++computer_win);
        }
        else if(computer_selection='paper')
        {
            console.log(++player_win);
        }
    }

}
playground(player_selection,computer_selection);