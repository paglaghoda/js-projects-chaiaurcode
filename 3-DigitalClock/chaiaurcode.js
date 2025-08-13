function localTime() {
  let today = new Date();
  return today.toLocaleTimeString();
}
const clocky = document.querySelector('#clock');

function updateClock() {
  const localTimeText = document.createTextNode(`${localTime()}`);
  clocky.appendChild(localTimeText);
}

setInterval(updateClock(), 1000);
