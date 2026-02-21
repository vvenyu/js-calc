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
    if(b == 0) {
        return 'Syntax Error';
    } else return a / b;
};

let number = '';
let operator;
let secondNumber = '';
let result = '';

function operate(a, sign, b) {
    //Changes a and b to be numbers instead of strings
    let aNum = Number(a);
    let bNum = Number(b);

    //Call one operator function
    if(sign === '+') {
        return add(aNum, bNum);
    } else if (sign === '-') {
        return subtract(aNum, bNum);
    } else if (sign === 'x') {
        return multiply(aNum, bNum);
    } else if (sign === '÷') {
        return divide(aNum, bNum);
    } else return "ERROR";
};

const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const btnBackspace = document.querySelector('#backspace');
const operands = document.querySelectorAll('.operand');
const btnClear = document.querySelector('#btnClear');
const btnComa = document.querySelector('#btnComa');

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if(operator == undefined){
            number += numbers[i].textContent;
            screen.textContent = number;
        } else {
            secondNumber += numbers[i].textContent;
            screen.textContent = secondNumber;
        };
    });
};

for(let j = 0; j < operands.length; j++) {
    operands[j].addEventListener('click', () => {
        if(operands[j].textContent !== '=') {
            if(operator == undefined) {
                operator = operands[j].textContent;
            } else {
                result = operate(number, operator, secondNumber);
                operator = operands[j].textContent;
                secondNumber = '';
                if(result === 'Syntax Error') {
                    number = '';
                    screen.textContent = 'Syntax Error';
                } else { 
                    number = String(result);
                    screen.textContent = number;
                };
            };
        } else {
            if(operator == undefined) {
                return
            } else {
                result = operate(number, operator, secondNumber);
                operator = undefined;
                secondNumber = '';
                if(result === 'Syntax Error') {
                    number = '';
                    screen.textContent = 'Syntax Error'
                } else { 
                    number = result;
                    screen.textContent = result;
                };
            };
        };
    });
};


//Clear's everything
btnClear.addEventListener('click', () => {
    result = '';
    number = '';
    operator = undefined;
    secondNumber = '';
    screen.textContent = '';
});

//Coma button
btnComa.addEventListener('click', () => {
    if (number !== '' && secondNumber == '') {
        if (number.includes('.') === true){
            return;
        } else {
            number += '.';
            screen.textContent = number;
        };
    } else {
        if (secondNumber.includes('.') === true){
            return;
        } else {
            secondNumber += '.';
            screen.textContent = secondNumber;
        };
    };
});

//Backspace button
btnBackspace.addEventListener('click', () => {
    if(number !== '' && secondNumber ==''){
        number = number.slice(0, -1);
        screen.textContent = number;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        screen.textContent = secondNumber;
    };
});