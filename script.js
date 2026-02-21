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
//const btnBackspace = document.querySelector('#backspace');
const operands = document.querySelectorAll('.operand')
const btnClear = document.querySelector('#btnClear');
//const btnComa = document.querySelector('#btnComa');

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if(operator == undefined){
            number += numbers[i].textContent;
            screen.textContent = number;
            console.log(`firstNumber: ${number}`);
        } else {
            secondNumber += numbers[i].textContent;
            screen.textContent = secondNumber;
            console.log(`secondNumber ${secondNumber}`);
        }
    });
};

for(let j = 0; j < operands.length; j++) {
    operands[j].addEventListener('click', () => {
        if(operands[j].textContent !== '=') {
            if(operator == undefined) {
                operator = operands[j].textContent;
                console.log(`operator: ${operator}`)
            } else {
                result = operate(number, operator, secondNumber);
                operator = operands[j].textContent;
                console.log(`secondOperator: ${operator}`);
                secondNumber = '';
                number = String(result);
                screen.textContent = number;
            }
        } else {
            if(operator == undefined) {
                return
            } else {
                result = operate(number, operator, secondNumber);
                operator = undefined;
                secondNumber = '';
                number = String(result)
                screen.textContent = number;
    
                console.log(number);
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