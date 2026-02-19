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
let secondNumber;

function operate(number, operator, secondNumber) {
    //Call one operator function
    if(operator === 'add') {
        return add(number, secondNumber);
    } else if (operator === 'substract') {
        return subtract(number, secondNumber);
    } else if (operator === 'multiply') {
        return multiply(number, secondNumber);
    } else if (operator === 'divide') {
        return divide(number, secondNumber);
    } else return "ERROR"
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
        number += numbers[i].textContent;
        screen.textContent = number
    });
};

if (number == '22') console.log(number)

