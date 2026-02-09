const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h2 = document.querySelector('h2')

buttons.forEach((button) => {
    console.log(button);
button.addEventListener('click', (e) => {
if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id
    h2.innerText = ` Background Is changed to ${e.target.id}`
    h2.style.color = 'white'
}
if(e.target.id === 'white'){
    body.style.backgroundColor = e.target.id
    h2.innerText = ` Background Is changed to ${e.target.id}`
     h2.style.color = 'black'
}
if(e.target.id === 'blue'){
    body.style.backgroundColor = e.target.id
    h2.innerText = ` Background Is changed to ${e.target.id}`
    h2.style.color = 'white'
}
if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id
    h2.innerText = ` Background Is changed to ${e.target.id}`
    h2.style.color = 'black'
}

    });
})
