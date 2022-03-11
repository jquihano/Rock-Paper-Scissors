let playScore = 0;
let compScore = 0;

function game() {
    /* Looping 5 times -- playing round 5 times */
for(let i = 0; i < 5; i++){
    
/* Creating random selection for computer */
let selectionArray = ['Rock', 'Paper', 'Scissors'];
let randomNumber = Math.floor(Math.random()*selectionArray.length);

/* Setting player & computer selection variables */

const playerSelection = prompt('Choose your weapon').toLowerCase();
const computerSelection = computerPlay().toLowerCase();

/* Computer selection function */
function computerPlay() {
    if (randomNumber === 0) {
        return 'Rock'
    } else if (randomNumber === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

/* Playing round function */
function playRound(player, computer) {

    if(player === "rock" && computer === "scissors") {
        playScore += 1
        return `Rock beats Paper! You Win!`
    } else {
        compScore += 1
        return `You Lose!`
    }
}


        console.log(playRound(playerSelection, computerSelection));
        console.log(`${playScore} ${compScore}`)
    }
}
game();