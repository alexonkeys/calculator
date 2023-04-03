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
const decBtn = document.querySelector('#decimal');
const delBtn = document.querySelector('#delete');

numberBtns.forEach(button => {
    button.addEventListener('click', event => {
      if (document.querySelector('#screen').textContent === '0') {
        document.querySelector('#screen').textContent = event.target.id;
        value1 = parseFloat(event.target.id);
      } else if (document.querySelector('#screen').textContent !== '0'
        && document.querySelector('#screen').textContent.length < 11
        && opClicked === null) {
        document.querySelector('#screen').textContent += event.target.id;
        value1 = parseFloat(document.querySelector('#screen').textContent);
      } else if (value1 !== 0 
        && opClicked !== 0
        && value2 === 0) {
        document.querySelector('#screen').textContent = event.target.id;
        value2 = parseFloat(event.target.id);
      } else if (document.querySelector('#screen').textContent !== '0'
        && document.querySelector('#screen').textContent.length < 11
        && opClicked !== 0) {
        document.querySelector('#screen').textContent += event.target.id;
        value2 = parseFloat(document.querySelector('#screen').textContent);
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

decBtn.addEventListener('click', event=>{
  let screenValue = document.querySelector('#screen').textContent;
  if (!screenValue.includes('.')){
    document.querySelector ('#screen').textContent += '.';
  }
});

delBtn.addEventListener('click',event=>{
  let screenValue = document.querySelector('#screen').textContent;
  if (screenValue.length > 1 ){
    document.querySelector('#screen').textContent = screenValue.slice(0,-1);
  } else if (screenValue.length = 1 && screenValue !== '0'){
    document.querySelector('#screen').textContent = 0;
  }
});