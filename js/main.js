let playScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('input')
    
/* Creating random selection for computer */


/* Setting player & computer selection variables */

//const playerSelection = prompt('Choose your weapon').toLowerCase();

/* Computer selection function */
function computerPlay() {
    let selectionArray = ['Rock', 'Paper', 'Scissors'];
    return  selectionArray[Math.floor(Math.random()*selectionArray.length)];
}

/* Playing round function */
function playRound(player) {
    const computer = computerPlay().toLowerCase();
    if(player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper" ) {
        playScore += 1
        console.log(`${player} beats ${computer}! You Win!`)
    } else if(player === "rock" && computer === "paper" || player === "paper" && computer === "scissors"  || player === "scissors" && computer === "rock" ){
        compScore += 1
        console.log(`${player} doesn't beat ${computer}! You Lose!`)
    } else {
        return `It's a tie!`
    }
}


        //console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playScore} Computer Score:${compScore}`);

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                playRound(button.value)
            })
        })