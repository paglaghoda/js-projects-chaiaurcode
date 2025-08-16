function hexColor() {
  let color = '#';
  colorRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (i = 1; i < 7; i++) {
    color += colorRange[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalID;

const changeColor = () => {
  document.body.style.backgroundColor = `${hexColor()}`;
};

document.querySelector('#start').addEventListener('click', () => {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
    console.log('Starting BG Color Counter');
  }
});

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(intervalID);
  intervalID = null;
  console.log('Stopping BG Color Counter');
});
