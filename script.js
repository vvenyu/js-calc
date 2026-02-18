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

let number;
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
}