

const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const btn = document.querySelector('.btn')
const startGame = document.querySelector('.start-game')

 
function iifa () {
    const allGuessesArray = []
    let randomNumber = Math.round(Math.random() * 100)

form.addEventListener ('submit', (e) => {
  e.preventDefault()
  const userInputValue = parseInt(userInput.value)

  if (userInputValue < randomNumber ) {
    result.innerText = "TOO LOW"
    
  }
  else if (userInputValue > randomNumber) {
    result.innerText = "TOO HIGH"
   
  }
  else {
    result.innerText = "Congratulationsssssssssssss..! your guess is correct";
    startGame.disabled = false
    btn.disabled = true
  }
  allGuessesArray.push(userInputValue)
  allGuesses.innerText = "Your Guesses : " + allGuessesArray.join (",")
  form.reset()
})


startGame.addEventListener('click' , () => {
    allGuesses.innerText = ' '
    result.innerText= ' '
    startGame.disabled = true
    btn.disabled = false
    randomNumber = Math.round(Math.random() * 100)
})
}

iifa();