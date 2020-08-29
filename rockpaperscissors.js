
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const MOVES= ['rock', 'paper', 'scissors'];
const MOVESRET= ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return MOVES[Math.floor(Math.random() * MOVES.length)];
}
let play = false;

function playRound(playerSelection, computerSelection){
    let player = MOVES.indexOf(playerSelection.toLowerCase());
    let computer = MOVES.indexOf(computerSelection.toLowerCase());
    if(player == -1){
        return "This is bad move";
    }
    if((player - computer) == 1 || (player - computer) == -2){
        return "You Win! " + MOVESRET[player] + " beats " + MOVESRET[computer];
    } else if ((player - computer == 0)){
        return "You Tie! " + MOVESRET[player] + " Ties " + MOVESRET[computer];
    }else { 
        return "You Lose! " + MOVESRET[computer] + " beats " + MOVESRET[player];
    }
    play = false;
}
let val = ""



let i = 5;

function game() {
    
    if(i > 0){
            console.log(playRound(val, computerPlay()));
            val = "";        
    } else{
        console.log("There are no more rounds")
    } 
    i--; 
}

function buttonPress(event) {
    val = event.target.id;
    play = true;
    game();
}

buttonRock.addEventListener('click', buttonPress);
buttonPaper.addEventListener('click', buttonPress);
buttonScissors.addEventListener('click', buttonPress);	

