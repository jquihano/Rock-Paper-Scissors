let playScore = 0;
let compScore = 0;

document.querySelector('#rock').addEventListener('click', playRound)
document.querySelector('#paper').addEventListener('click', playRound)
document.querySelector('#scissors').addEventListener('click', playRound)

function playRound(){
    alert('clicked')
}

function game() {
    /* Looping 5 times -- playing round 5 times */
do{
    
/* Creating random selection for computer */
let selectionArray = ['Rock', 'Paper', 'Scissors'];
let randomNumber = Math.floor(Math.random()*selectionArray.length);

/* Setting player & computer selection variables */

//const playerSelection = prompt('Choose your weapon').toLowerCase();
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

    if(player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper" ) {
        playScore += 1
        return `${player} beats ${computer}! You Win!`
    } else if(player === "rock" && computer === "paper" || player === "paper" && computer === "scissors"  || player === "scissors" && computer === "rock" ){
        compScore += 1
        return `${player} doesn't beat ${computer}! You Lose!`
    } else {
        return `It's a tie!`
    }
}


        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playScore} Computer Score:${compScore}`);
       
    } while (playScore < 5 && compScore < 5);
    if (playScore === 5) {
            alert(`You Win!`)
        } else if (compScore === 5) {
            alert(`You Lose!`)
        }
} 


game();