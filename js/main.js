let selectionArray = ['rock', 'paper', 'scissors'];

let randomNumber = Math.floor(Math.random()*selectionArray.length);

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
        return 'You win'
    } 
}

console.log(playRound(playerSelection, computerSelection))
