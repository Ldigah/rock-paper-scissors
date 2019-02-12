let userChoice = document.querySelector('#userChoice');
let computerChoice = document.querySelector('#computerChoice');
let roundResult = document.querySelector('#roundResult');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let gameResult = document.querySelector('#gameResult');
let rules = document.querySelector('#rules');
let buttons = document.querySelector('.buttons');

let playerSelection;
let wins = 0;
let losses = 0;

let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    userChoice.textContent = 'You choose rock.'
    computerChoice.textContent = 'Computer choose ' + computerSelection + '.'
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    userChoice.textContent = 'You choose paper.'
    computerChoice.textContent = 'Computer choose ' + computerSelection + '.'
});

let scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    userChoice.textContent = 'You choose scissors.'
    computerChoice.textContent = 'Computer choose ' + computerSelection + '.'
});

function getComputerChoice() {
    const CHOICES = ['rock', 'paper', 'scissors'];
    computerSelection = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    rules.style.display = 'none';
    if (playerSelection == computerSelection) {
        roundResult.textContent = "It's a draw! Try again."
    }   else if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                roundResult.textContent = ('You lose! Paper beats rock.');
                losses++;
            }  else {
                roundResult.textContent = ('You win! Rock beats scissors.');
                wins++;
            }
    } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                roundResult.textContent = 'You win! Paper beats rock.';
                wins++;
            } else {
                roundResult.textContent = 'You lose! Scissors beats paper.';
                losses++;
            }
    } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                roundResult.textContent = 'You Lose! Rock beats scissors.';
                losses++;
            } else {
                roundResult.textContent = 'You win! Scissors beats paper.';
                wins++;
                }
            } 
    playerScore.textContent = 'Your score: ' + wins;
    computerScore.textContent = "Computer's score: " + losses;
    endGame();
    }

function endGame() {
    if (wins >= 3) {
        gameResult.textContent = 'Congratulations! You won the game!';
        buttons.style.display = 'none';
    } 
    if (losses >= 3) {
        gameResult.textContent = 'Unlucky! You lost the game!';
        buttons.style.display = 'none';
    } 
}

