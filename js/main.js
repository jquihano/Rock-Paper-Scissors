let selectionArray = ['rock', 'paper', 'scissors'];
let randomNumber = Math.floor(Math.random()*selectionArray.length);

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
computerPlay();



let playerSelection = 'rock';
let computerSelection = computerPlay();

function playRound(a, b) {
    console.log(b)
    if (a === 'rock' && b === 'scissors') {
        playerScore++
        return 'You win'
    } 
}

console.log(playRound(playerSelection, computerSelection));

function game(){
    
    for(let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
        console.log(`Player score is ${playerScore}`)
    }
    
}

game();