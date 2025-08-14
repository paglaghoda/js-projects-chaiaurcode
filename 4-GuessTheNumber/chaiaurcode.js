//Declaring
const canPlay=true;

const guess = parseInt(document.querySelector('#guessField').value)
const submit = document.querySelector('#subt')

const prevGuess = [];

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

//Functions

function randomNum(){
  return Math.floor(Math.random()*(100-1))+1
}

function validateValue(guess){
  if (guess<1 || guess>100 || isNaN(guess)) {
    displayMessage()
    return false
  } else {
    return true
  }
}

function checkGuess(guess){
  const randomNum = randomNum()
  if (validateValue(guess)) {
    if (guess === randomNum) {
      displayGuess()
    } else if (guess>randomNum) {
      //Display Msg too High
    } else {
      //Display Msg too Low
    }
  } else {
    displayErrorMessage()
  }
}

function displayGuess(){

}

function displayErrorMessage(){
}

checkGuess(guess)

