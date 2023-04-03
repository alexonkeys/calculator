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
let opClicked = null;
let result = 0;

const numberBtns = document.querySelectorAll('.number-btn');
const opBtns = document.querySelectorAll('.op-btn');
const eqBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

numberBtns.forEach(button => {
    button.addEventListener('click', event => {
      if (document.querySelector('#screen').textContent === '0') {
        document.querySelector('#screen').textContent = event.target.id;
        value1 = parseInt(event.target.id);
      } else if (document.querySelector('#screen').textContent !== '0'
        && document.querySelector('#screen').textContent.length < 11
        && opClicked === null) {
        document.querySelector('#screen').textContent =
          document.querySelector('#screen').textContent + event.target.id;
        value1 = parseInt(document.querySelector('#screen').textContent);
      } else if (document.querySelector('#screen').textContent === value1.toString()
        && (opClicked === add || opClicked === subtract || opClicked === multiply || opClicked === divide)) {
        document.querySelector('#screen').textContent = event.target.id;
        value2 = parseInt(event.target.id);
      } else if (document.querySelector('#screen').textContent !== '0'
        && document.querySelector('#screen').textContent.length < 11
        && (opClicked === add || opClicked === subtract || opClicked === multiply || opClicked === divide)) {
        document.querySelector('#screen').textContent =
          document.querySelector('#screen').textContent + event.target.id;
        value2 = parseInt(document.querySelector('#screen').textContent);
      }
    });
  });



opBtns.forEach(button =>{
    button.addEventListener('click', event =>{
        if (value1 !== 0 && event.target.id === 'add'){
            opClicked = add;
        } else if (value1 !== 0 && event.target.id === 'subtract'){
            opClicked = subtract;
        } else if (value1 !== 0 && event.target.id === 'multiply'){
            opClicked = multiply;
        } else if (value1 !== 0 && event.target.id === 'divide'){
            opClicked = divide;
        };
    });
});

eqBtn.addEventListener('click', event =>{
    if (opClicked && value1 !==0){
        result = operate(value1,value2,opClicked);
        if (result < 99999999999){
          document.querySelector('#screen').textContent = result.toString();
          value1 = result;  
        } else if(result > 99999999999){
          document.querySelector('#screen').textContent = '> Max Digits';
        }
    };
});

clearBtn.addEventListener('click', event=>{
  value1 = 0;
  value2 = 0;
  result = 0;
  opClicked = null;
  document.querySelector('#screen').textContent = 0;
});
