let pressedKey = () => {
  window.addEventListener('keydown', (e) => {
    return e.key;
  });
};
const insert = document.querySelector('#insert');
insert.innerHTML = `<h1>Press any Key to see magic!<br></h1>`;

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <h3>Press any Key to see magic!<br>
  Key: ${e.key === ' ' ? 'Space' : e.key} & KeyCode: ${e.code}</h3>`; //Use of proper ternary if else
});
