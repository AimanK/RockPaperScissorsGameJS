
/**
 * Contains the choices for the computer to choose from and returns a randomized value chosen to play each round with
 */
function computerPlay() {
  let choose = ["rock", "paper", "scissors"];
  let valueChosen = choose[Math.floor(Math.random() * choose.length)];
  return valueChosen;
}


let computerScore = 0;
let playerScore = 0;


/**
 * Plays a round of rock, paper, sicissors based on the input from the user and the computers randomized choice from the function computerPlay() and increments the scores accordingly
 */
function playRound(playerSelect, computerSelect) {

  let player = playerSelect.toLowerCase();
  let computer = computerSelect.toLowerCase();


  if (player == "rock") {
    if (computer == "paper") {
      result = "You lost! Paper beats rock";
      computerScore++;
      return result;

    }
    else if (computer == "scissors") {
      result = "You win! Rock beats Scissors";
      playerScore++;
      return result;
    }
    else if (computer == "rock") {
      result = "A stalemate has been reached!";
      return result;
    }
    else {
      return "Error! Unkown input entered";

    }
  }

  if (player == "scissors") {
    if (computer == "paper") {
      result = "You win! Scissors beats Paper";
      playerScore++;
      return result;
    }
    else if (computer === "rock") {
      result = "You lost! Rock beats Scissors";
      computerScore++;
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

  if (player === "paper") {
    if (computer == "rock") {
      result = "You win! Paper beats Rock";
      playerScore++;
      return result;
    }
    else if (computer == "scissors") {
      result = "You lost! Scissors beats Paper";
      computerScore++;
      return result;
    }
    else if (computer == "paper") {
      result = "A stalemate has been reached!";
      return result;
    }
    else {
      return "Error! Unkown input entered";

    }
  }

}

/**
 * Takes input from the user and calls the playRound function 5 times and prints the output of each round to create a 5-round game
 */
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelect = prompt("Pick a move");
    const computerSelect = computerPlay()
    let compSelect = alert("computer just chose: " + computerSelect);
    console.log(playRound(playerSelect, computerSelect));
  }
  return reportWinner(playerScore, computerScore);
}

game();


/**
 * Takes the scores accumulated through the game and based on the scores at the end of the game determines and returns the winner, if applicable
 */
function reportWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You won the game! You beat the computer " + playerScore + ' to ' + computerScore);
  }
  else if (computerScore > playerScore) {
    console.log("You lost the game! The computer beat you  " + computerScore + ' to ' + playerScore);
  }
  else {
    console.log("You reached a tie! Great minds think alike!");
  }
}




