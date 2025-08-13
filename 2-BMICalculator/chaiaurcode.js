function bmiCalc(h, w) {
  return (w / ((h * h) / 10000)).toFixed(2);
}

const formy = document.querySelector('form');
formy.addEventListener('submit', (e) => {
  e.preventDefault();
  //Getting Height and Weight
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  //Selecting the result tag and space
  const result = document.querySelector('#results');

  //Exception handling of height and weight
  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = `Invalid Input Height: ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = `Invalid Input Weight: ${weight}`;
  } else {
    result.innerHTML = `Your BMI is: ${bmiCalc(height, weight)}`;

    //Checking with weight guide
    if (bmiCalc(height, weight) < 18.6) {
      const texty = document.createTextNode(`.\nYou are Underweight bbg`);
      result.appendChild(texty);
    } else if (bmiCalc(height, weight) > 18.6 && bmiCalc(height, weight) < 24.9) {
      const texty = document.createTextNode(`.\nYou are healthy!`);
      result.appendChild(texty);
    } else {
      const texty = document.createTextNode(`.\nYou are healthy!`);
      result.appendChild(texty);
    }
  }

});
