const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h3')
const resultDisplay = document.createElement('h4')

const scoreDisplay = document.createElement('h5')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, scoreDisplay)



//userChoiceDisplay.classList.add('choiceDisplay')
//scoreDisplay.classList.add('displayScore')

let userScore = 0
let computerScore = 0

const choices = ['👊', '🖐', '✌']

let userChoice
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = 'User Choice: ' + userChoice
    generateComputerChoice()
    getResult()
    displayScore()
    //scoreDisplay.textContent = 'User Score: ' + userScore + 'Computer Score: ' + computerScore

}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.textContent = 'Computer Choice: ' + computerChoice
    
}

for(let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.textContent = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch(userChoice + computerChoice) {
        case '✌🖐':
        case '👊✌':
        case '🖐👊':
            resultDisplay.textContent = "YOU WIN!"
            userScore++
            break
        case '🖐✌':
        case '✌👊':
        case '👊🖐':
            resultDisplay.textContent = "YOU LOSE!"
            computerScore++
            break
        case '🖐🖐':
        case '👊👊':
        case '✌✌':
            resultDisplay.textContent = "IT'S A DRAW!"
            break
    }
   
}

const displayScore = () => {
 scoreDisplay.textContent =  'Computer Score: ' + computerScore + ' User Score: ' + userScore
 
 //scoreDisplay.textContent =   'Computer Score: ' + computerScore  
}

/*
const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1 //or possibleChoice.length
    console.log(randomNumber)

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }

    if(randomNumber === 2) {
        computerChoice = 'scissor' 
    }

    if(randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
 
function getResult (){
    if(computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'you lost'
    }
    if(computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    if(computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'you win'
    }
    if(computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'you win'
    }
 
    //if(computerChoice == '')
    resultDisplay.innerHTML = result
}
*/

/*
var Rock = document.getElementById('Rock').addEventListener('click', run);
var Paper = document.getElementById('Paper').addEventListener('click', run);
var Scissors = document.getElementById('Scissors').addEventListener('click', run);

var computerChoice;
var playerChoice;

var player = document.getElementById('player');
var computer = document.getElementById('computer');
var outcome = document.getElementById('outcome');

function run() {
  	playerChoice = this.innerText;
  	computerGamble();
  	compare();
}

function computerGamble() {
  	var dice = Math.random();
	if (dice <= 0.33) {
		computerChoice = "Rock";
    } else if (dice > 0.33 && dice <= 0.66) {
    	computerChoice = "Paper";
    } else {
    	computerChoice = "Scissors";
    }
 }
 
 function compare() {
 	player.innerHTML = "You have chosen " + playerChoice;
 	computer.innerHTML = "Computer chooses " + computerChoice;

 	if (playerChoice == computerChoice) {
 		outcome.innerHTML = "Stalemate";
 		
 	} else if (playerChoice === "Rock" && computerChoice === "Paper") {
 		outcome.innerHTML = "Defeat!";
 	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
 		outcome.innerHTML = "Victory!";
 	

 	} else if (playerChoice === "Paper" && computerChoice === "Rock") {
 		outcome.innerHTML = "Victory!";
 	} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
 		outcome.innerHTML = "Defeat!";


 	} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
 		outcome.innerHTML = "Defeat!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
 		outcome.innerHTML = "Victory!";
 	}
 }
 */
