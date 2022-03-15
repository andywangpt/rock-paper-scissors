const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h3')
const resultDisplay = document.createElement('h4')

const scoreDisplay = document.createElement('h5')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, scoreDisplay)


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
 
}
//