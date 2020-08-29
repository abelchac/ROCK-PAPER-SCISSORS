
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const buttonReset = document.getElementById("reset");
const windiv = document.getElementById("winner");

const MOVES= ['rock', 'paper', 'scissors'];
const MOVESRET= ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return MOVES[Math.floor(Math.random() * MOVES.length)];
}
let play = false;
let humanPoints = 0;
let compPoints = 0;
function playRound(playerSelection, computerSelection){
    let player = MOVES.indexOf(playerSelection.toLowerCase());
    let computer = MOVES.indexOf(computerSelection.toLowerCase());
    if(player == -1){
        return "This is bad move";
    }
    if((player - computer) == 1 || (player - computer) == -2){
        humanPoints++;
        return "You Win! " + MOVESRET[player] + " beats " + MOVESRET[computer];
    } else if ((player - computer == 0)){
        return "You Tie! " + MOVESRET[player] + " Ties " + MOVESRET[computer];
    }else { 
        compPoints++;
        return "You Lose! " + MOVESRET[computer] + " beats " + MOVESRET[player];
    }
    play = false;
}
let val = ""



let i = 5;

function setScore() {
    let element;
    element = document.getElementById("hscore");
    element.innerHTML = humanPoints.toString();
    element = document.getElementById("cscore");
    element.innerHTML = compPoints.toString();

}

function game() {
    windiv.innerHTML = playRound(val, computerPlay());
    val = "";       
    setScore();
}

function buttonPress(event) {
    val = event.target.id;
    play = true;
    game();
}

function reset() {
    humanPoints = 0;
    compPoints = 0;
    i = 5;
    windiv.innerHTML = ""
    setScore()
}

setScore();
buttonRock.addEventListener('click', buttonPress);
buttonPaper.addEventListener('click', buttonPress);
buttonScissors.addEventListener('click', buttonPress);	
buttonReset.addEventListener('click', reset);
