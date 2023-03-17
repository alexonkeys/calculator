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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event =>{
        if (document.querySelector('#screen').textContent === '0' &&
            (event.target.id === '1'||
            event.target.id === '2' ||
            event.target.id === '3' ||
            event.target.id === '4' ||
            event.target.id === '5' ||
            event.target.id === '6' ||
            event.target.id === '7' ||
            event.target.id === '8' ||
            event.target.id === '9')
        ){
            document.querySelector('#screen').textContent = event.target.id;
        }

    });
});

