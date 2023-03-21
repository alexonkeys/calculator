function add (a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

function operate (a, b, operation){
    return operation(a,b);
}

let value1 = 0;
let value2 = 0;
let opClicked = false;

const numberBtns = document.querySelectorAll('.number-btn');
const opBtns = document.querySelectorAll('.op-btn');

numberBtns.forEach(button => {
    button.addEventListener('click', event =>{
        if (document.querySelector('#screen').textContent === '0'
        && event.target.className === 'number-btn'){
            document.querySelector('#screen').textContent = event.target.id;
            value1 = parseInt(event.target.id);
        } else if (document.querySelector('#screen').textContent !== '0' 
        && event.target.className === 'number-btn' 
        && document.querySelector('#screen').textContent.length < 11 
        && opClicked === false){
            document.querySelector('#screen').textContent = 
            document.querySelector('#screen').textContent + event.target.id;
            value1 = parseInt(document.querySelector('#screen').textContent);
        } else if (document.querySelector('#screen').textContent === value1.toString()  
        && event.target.className === 'number-btn' 
        && opClicked === true){
            document.querySelector('#screen').textContent = event.target.id;
            value2 = parseInt(event.target.id);
        } else if (document.querySelector('#screen').textContent !== '0' 
        && event.target.className === 'number-btn' 
        && document.querySelector('#screen').textContent.length < 11 
        && opClicked === true){
            document.querySelector('#screen').textContent = 
            document.querySelector('#screen').textContent + event.target.id;
            value2 = parseInt(document.querySelector('#screen').textContent);
        } ;
    });
});

opBtns.forEach(button =>{
    button.addEventListener('click', event =>{
        if (value1 !== 0){
            opClicked = true;
        }
    })
});


