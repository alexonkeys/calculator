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

const numberBtns = document.querySelectorAll('.number-btn');

numberBtns.forEach(button => {
    button.addEventListener('click', event =>{
        if (document.querySelector('#screen').textContent === '0' && event.target.className === 'number-btn'){
            document.querySelector('#screen').textContent = event.target.id;
            value1 = parseInt(event.target.id);
        } else if (document.querySelector('#screen').textContent !== '0' &&
        event.target.className === 'number-btn' &&
        document.querySelector('#screen').textContent.length < 11){
            document.querySelector('#screen').textContent = 
            document.querySelector('#screen').textContent + event.target.id;
            value1 = parseInt(document.querySelector('#screen').textContent + event.target.id);
        };
    });
});


