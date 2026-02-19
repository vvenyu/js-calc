function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let number = '';
let operator;
let secondNumber = '';

function operate(a, sign, b) {
    //Call one operator function
    if(sign === '+') {
        return add(a, b);
    } else if (sign === '-') {
        return subtract(a, b);
    } else if (sign === 'x') {
        return multiply(a, b);
    } else if (sign === '÷') {
        return divide(a, b);
    } else return "ERROR";
};

const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
//const btnBackspace = document.querySelector('#backspace');
const operands = document.querySelectorAll('.operand')
const btnClear = document.querySelector('#btnClear');
//const btnComa = document.querySelector('#btnComa');
const equalsTo = document.querySelector('#btnEquals');

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if(operator == undefined){
            number += numbers[i].textContent;
            screen.textContent = number;
        } else {
            secondNumber += numbers[i].textContent;
            screen.textContent = secondNumber;
            console.log('hihihi');
            console.log(operator)
        }
    });
};

for(let j = 0; j < operands.length; j++) {
    operands[j].addEventListener('click', () => {
        operator = operands[j].textContent;
    });
};

equalsTo.addEventListener('click', () => {
    console.log(operate(number, operator, secondNumber));
})


