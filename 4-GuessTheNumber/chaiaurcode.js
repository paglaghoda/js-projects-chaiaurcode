//Declaring
let canHePlay=true;
const submit = document.querySelector('#subt')
const target = randomNum()

let prevGuess = [];
let noOfGuessesRem = 10;
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const resultDiv = document.querySelector('.resultParas')

//Functions

function randomNum(){
  let ranNum = Math.floor(Math.random()*(100))+1
  return ranNum
}

function validateValue(guess){
  if (guess<1) {
    displayErrorMessage(`Enter a valid number greater than 1`)
    return false
  } else if (guess>100) {
    displayErrorMessage(`Enter a valid number less than 100`)
    return false
  } else if (isNaN(guess)) {
    displayErrorMessage(`Enter a valid integer`)
    return false
  } else {
    return true
  }
}

function canPlay(){
  if (noOfGuessesRem<1 && canHePlay){
    const p = document.createElement('p')
    p.style.backgroundColor="red"
    p.style.color="white"
    p.style.padding="15px";
    p.style.textAlign="center"
    p.appendChild(document.createTextNode("Guess Limit Khatam! GAME OVER LIL' BRO!"))
    resultDiv.appendChild(p)
    canHePlay=false;
    submit.disabled=true;
    return false
  } else {
    return true
  }
}

function checkGuess(guess, randomNumber){
  if (validateValue(guess)) {

    noOfGuessesRem--
    prevGuess.push(guess)
    displayPrevGuess()
    displayRemGuess()
    canPlay()

    if (guess == randomNumber) {
      displayCorrectGuess("Ek Crore! (in Big B's voice)")
      canHePlay=false;
      submit.disabled=true;
    } else if (guess>randomNumber) {
      displayErrorMessage("Guess is too High")
    } else {
      displayErrorMessage("Guess is too Low")
    }
  }
}

function displayCorrectGuess(success){
  const p = document.createElement('p')
  p.style.backgroundColor="green"
  p.style.color="white"
  p.style.padding="15px";
  p.style.textAlign="center"
  p.appendChild(document.createTextNode(success))
  resultDiv.appendChild(p)
}

function displayPrevGuess(){
  guesses.innerHTML=prevGuess
}

function displayErrorMessage(error){
  lowOrHigh.innerText=error;
}

function displayRemGuess(){
  lastResult.innerHTML=noOfGuessesRem
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const guess = parseInt(document.querySelector('#guessField').value)
  checkGuess(guess, target)
})