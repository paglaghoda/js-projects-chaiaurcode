function BMI(h,w){
    return h/(w**2)
}

function bmiCalc(h,w){
    const bmiResult = document.createElement('p')
    bmiResult.style.color="red";
    bmiResult.style.fontSize="30px";
    bmiResult.appendChild(document.createTextNode(`Your BMI is: ${BMI(h.value(),w.value())}`))
    const location = document.querySelector('.container');
    location.appendChild(bmiResult)
}

const height = document.querySelector('#height')
const weight = document.querySelector('#weight')

const submitButton = document.querySelector('.button')
submitButton.addEventListener('click', (e) => bmiCalc(height, weight))


//Kal karenge; out for the day bhai