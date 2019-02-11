function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    let userInput = prompt('Rock, paper or scissors?', "");
    return userInput.toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log("It's a tie! Try again.")
        return 'gameTie'
    }   else if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                console.log('You lose! Paper beats rock.');
                return "computerWin";
            }  else {
            console.log('You win! Rock beats scissors.');
            return "userWin";
            }
            
    } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                console.log('You win! Paper beats rock.');
                return "userWin";
            } else {
                console.log('You lose! Scissors beats paper.');
                return "computerWin";
            }
    } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                console.log('You Lose! Rock beats scissors.');
                return "computerWin";
            } else {
                console.log('You win! Scissors beats paper.');
                return "userWin";
                }
            } 
    }

function determineWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log('Congratulations! You Win! You had ' 
            + userScore + ' point(s) in total.');
    } else if (userScore < computerScore) {
        console.log('Unlucky! You lost the game! You had ' 
            + userScore + ' point(s) in total.');
    } else if (userScore == computerScore) {
        console.log("It's a tie game! You and the computer had " 
            + userScore + ' point(s).');
    }
}

function game() {
        let userScore = 0;
        let computerScore = 0; 
        
        for (let i=0; i<5; i++) {
            let gameResult = playRound();
            if (gameResult == "userWin") {
                userScore++;
            } else if (gameResult == "computerWin") {
                computerScore++;
            } 
        }
        
        determineWinner(userScore, computerScore);
    }
    
game();