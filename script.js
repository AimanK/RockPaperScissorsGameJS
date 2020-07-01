

function computerPlay(){
let choose = ["rock", "paper", "scissors"];
let valueChosen = choose[Math.floor(Math.random() * choose.length)];
return valueChosen;
}


function playRound(playerSelect, computerSelect){

  let player = playerSelect.toLowerCase();
  let computer = computerSelect.toLowerCase();

if(player == "rock"){
if (computer == "paper"){
  result = "You lost! Paper beats rock";
return result;
}
else if(computer == "scissors")
{
  result = "You win! Rock beats Scissors";
 return result;
}
else if (computer == "rock")
{
  result = "A stalemate has been reached!";
 return result;
}
else {
  return "Error! Unkown input entered";
}
}

if(player == "scissors"){
if (computer == "paper"){
  result = "You win! Scissors beats Paper";
  return result;
}
else if(computer === "rock")
{
  result = "You lost! Rock beats Scissors";
  return result;
}
else if (computer == "scissors") {
  result = "A stalemate has been reached!";
  return result;
}
else {
  return "Error! Unknown input entered";
}
}

if(player === "paper"){
if(computer == "rock"){
  result = "You win! Paper beats Rock";
  return result;
}
else if (computer == "scissors"){
  result = "You lost! Scissors beats Paper";
  return result;
}
else if (computer == "paper"){
  result = "A stalemate has been reached!";
  return result;
}
else {
  return "Error! Unkown input entered";
}
}

game()
}

const playerSelect = choice;
const computerSelect = computerPlay();
console.log("computer has chosen: " + computerSelect);
var choice = prompt("Player, make a choice");
console.log(playRound(choice, computerSelect));


function game()
{
let i = 1;
do {
  playRound()
  i++
}
  while (i != 5)
}
