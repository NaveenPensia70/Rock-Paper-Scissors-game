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
console.log(player_selection);
console.log(computer_selection);
function playground()
{

}