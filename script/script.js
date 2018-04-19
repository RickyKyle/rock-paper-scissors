//Selection Variables//

let playerSelection;
let computerSelection;

//Scores//

let computerScore = 0;
let playerScore = 0;


//Round Variable//

let round = 0;

//Moves Array//

let moves = ['rock','paper','scissors'];

//--FUNCTIONS--//

//These functions take what the player selects from the webpage and passes them to the playRound function.//

function rock (){
  playerSelection = 'rock';
  game(playerSelection);
}

function paper(){
  playerSelection = 'paper';
  game(playerSelection);
}

function scissors(){
  playerSelection = 'scissors';
  game(playerSelection);
}

//This function generates a random choice by the computer of rock, paper, or scissors.//
function computerPlay(){
 computerSelection = moves[Math.floor(Math.random() * moves.length)];
 return computerSelection;
}

//This function takes compares the playerSelection variable and the computerSelection variable and returns the result.//

function playRound(playerSelection){

  round++;
  computerPlay();
  if (playerSelection == 'rock' && computerSelection == 'scissors'){
    document.getElementById("result").innerHTML = "You picked " + playerSelection + " and the computer picked " + computerSelection + ". <br> You win this one!";
    playerScore++;
  } else if (playerSelection == 'paper' && computerSelection == 'rock'){
    document.getElementById("result").innerHTML = "You picked " + playerSelection + " and the computer picked " + computerSelection + ". <br> You win this one!";
    playerScore++;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    document.getElementById("result").innerHTML = "You picked " + playerSelection + " and the computer picked " + computerSelection + ". <br> You win this one!";
    playerScore++;
  } else if (computerSelection == 'rock' && playerSelection == 'scissors'){
    document.getElementById("result").innerHTML = "You picked " + playerSelection + " and the computer picked " + computerSelection + ". <br> You lost this one!";
    computerScore++;
  } else if (computerSelection == 'paper' && playerSelection == 'rock'){
    document.getElementById("result").innerHTML = "You picked " + playerSelection + " and the computer picked " + computerSelection + ". <br> You lost this one!";
    computerScore++;
  } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
    document.getElementById("result").innerHTML = "You picked " + playerSelection + " and the computer picked " + computerSelection + ". <br> You lost this one!";
    computerScore++;
  } else {
    document.getElementById("result").innerHTML = "Uh-oh, it's a tie!";
  }
}

//This function keeps a track of the rounds and, once 5 rounds has been played, ends the game and outputs the result.//

function game(){

  if (parseInt(round)<5)
  {
    playRound(playerSelection);
  } else if (playerScore < computerScore){
    document.getElementById("result").innerHTML = "You've played 5 rounds and lost! <br />" + " <b>YOUR SCORE:</b> " + playerScore + " <br /><b>COMPUTER'S SCORE:</b> " + computerScore + ".";
  }
  else {
    document.getElementById("result").innerHTML = "You've played 5 rounds and won! <br />" + " <b>YOUR SCORE:</b> " + playerScore + " <br /><b>COMPUTER'S SCORE:</b> " + computerScore + ".";
  }
}
