let playScore = 0
let compScore = 0
const buttons = document.querySelectorAll('.input')
let result = ""
let champ = ''

/* Computer selection function */
/* Creating random selection for computer */
function computerPlay() {
    let selectionArray = ['Rock', 'Paper', 'Scissors'];
    return  selectionArray[Math.floor(Math.random()*selectionArray.length)];
}

function disableButton() {
    buttons.disabled = 'true';
}

function winner(){
    alert(champ)
    alert('click to play again')
    playScore = 0;
    compScore = 0;
}


/* Playing round function */
function playRound(player) {
    const computer = computerPlay().toLowerCase();
    if(playScore >= 5) {
        winner()
        champ = 'Player wins!'
        return result
        
    } else if(compScore >= 5){
        champ = 'Comp Wins..'
        winner()
        return result
    }

    if(player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper" ) {
        playScore += 1
        result =  `${player} beats ${computer}! You Win!`
    } else if(player === "rock" && computer === "paper" || player === "paper" && computer === "scissors"  || player === "scissors" && computer === "rock" ){
        compScore += 1
        result = `${player} doesn't beat ${computer}! You Lose!`
        
    } else {
        result = `It's a tie!`
    }

document.querySelector('.display').innerHTML = result
document.querySelector('.compScore').innerHTML = compScore
document.querySelector('.playerScore').innerHTML = playScore

return result

}



//console.log(playRound(playerSelection, computerSelection));
        
 buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value)
        })
    })