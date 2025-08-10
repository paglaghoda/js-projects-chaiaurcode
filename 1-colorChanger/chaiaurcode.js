function changingColor(color){
    document.body.style.backgroundColor = color;
}

const buttons = document.querySelectorAll('.button')
buttons.forEach( (eachButton) => {
    eachButton.addEventListener('click', (e) => {
        return changingColor(e.target.id)
    });
})