let inputArray = [];
let currentNumber = '';
let outputText = document.getElementById('result');
const MAX_LENGTH = 10;

// Handling numerical and mathematical inputs 

function isLastElementOperator(inputArray) {
    const operators = ['+', '-', '*', '/'];
    return inputArray.length > 0 && operators.includes(inputArray[inputArray.length - 1]);
}

function appendNumber(number) {
    if (outputText.textContent.length == MAX_LENGTH) {
        return;
    } else {
        if (isLastElementOperator(inputArray)) {
            currentNumber += number;
            outputText.textContent = currentNumber;
        } else {
            if (outputText.textContent == '0') {
                currentNumber += number;
                outputText.textContent = number;
            } else {
                currentNumber += number;
                outputText.textContent += number;
            }
        }
    }
}

function appendItem(operator) {
    if (inputArray.length == 2) {
        calculateResult();
        inputArray.push(currentNumber);
        inputArray.push(operator);
        currentNumber = '';
    } else {
        inputArray.push(currentNumber);
        inputArray.push(operator);
        currentNumber = '';
    }
}

// Function for the AC button to clear everything

function clearInput() {
    outputText.textContent = 0;
    inputArray = [];
    currentNumber = '';
}

// Function to add decimals, percents, etc.

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        if (isLastElementOperator(inputArray)) {
            currentNumber = '0.';
            outputText.textContent = '0.';
        } else if (outputText.textContent == '0') {
            currentNumber = '0.';
            outputText.textContent = '0.';
        } else {
            currentNumber += '.';
            outputText.textContent = currentNumber;
        }
    }
}

function toggleSign() {
    if (currentNumber.startsWith('-')) {
        currentNumber = currentNumber.substring(1);
        outputText.textContent = currentNumber;
    } else {
        currentNumber = '-' + currentNumber;
        outputText.textContent = currentNumber;
    }
}

function convertToPercent() {
    let num = parseFloat(currentNumber);
    if (isNaN(num)) {
        return; 
    }
    currentNumber = (num / 100).toString();
    outputText.textContent = currentNumber;
}

/* Function to give a result */

function calculateResult() {
    inputArray.push(currentNumber);
    
    if (inputArray.length < 3) {
        return; 
    }

    let result;
    let num1 = parseFloat(inputArray[0]);
    let operator = inputArray[1];
    let num2 = parseFloat(inputArray[2]);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error';
            }
            break;
        default:
            result = 'Error'; 
    }

    currentNumber = result.toString();
    
    inputArray.length = 0;
    
    outputText.textContent = currentNumber;
}

// Keyboard functionality

const keyMap = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    '+': 'plus',
    '-': 'minus',
    '*': 'multiply',
    'x': 'multiply',
    '/': 'divide',
    '.': 'decimal',
    'Enter': 'equals',
    'Backspace': 'AC'
};

function simulateButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.click();
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const buttonId = keyMap[key];
    
    if (buttonId) {
        simulateButtonClick(buttonId);
    }
});





