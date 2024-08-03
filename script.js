// Button variables

let oneButton = document.getElementById('1');
let twoButton = document.getElementById('2');
let threeButton = document.getElementById('3');
let fourButton = document.getElementById('4');
let fiveButton = document.getElementById('5');
let sixButton = document.getElementById('6');
let sevenButton = document.getElementById('7');
let eightButton = document.getElementById('8');
let nineButton = document.getElementById('9');
let zeroButton = document.getElementById('0');

let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let multiplyButton = document.getElementById('multiply');
let divideButton = document.getElementById('divide');

let decimalButton = document.getElementById('decimal');
let equalsButton = document.getElementById('equals');
let percentButton = document.getElementById('percent');
let negateButton = document.getElementById('negate');
let clearButton = document.getElementById('AC');
const inputSet = [];

// Functions to alter or clear the output section

const outputText = document.getElementById('result');

const MAX_LENGTH = 10; 

function appendNumber(number) {
    if (outputText.textContent.length < MAX_LENGTH) {
        if (outputText.textContent === '0') {
            outputText.textContent = number;
        } else {
            outputText.textContent += number;
        }
    }
}

function clearInput() {
    outputText.textContent = 0;
}

// Function to perform mathematical operations 

function mathFunction(operationChoice) {
    firstValue = outputText.textContent;
    inputSet.push(firstValue);
    inputSet.push(operationChoice);
    outputText.textContent = 0;
}

// Functions to negate, add percentage, or convert to decimal

function toggleSign() {
    let currentValue = parseFloat(outputText.textContent);
    
    if (!isNaN(currentValue)) {
        currentValue = -currentValue;
        outputText.textContent = currentValue;
    }
}

function convertToPercent() {
    let currentValue = parseFloat(outputText.textContent);
    
    if (!isNaN(currentValue)) {
        currentValue = currentValue / 100;
        outputText.textContent = currentValue;
    }
}

function appendDecimal() {
    // Get the current value from the display
    let currentValue = outputText.textContent;

    // Check if the current value already contains a decimal point
    if (!currentValue.includes('.')) {
        // Append a decimal point if it does not exist
        outputText.textContent += '.';
    }
}

//Function to calculate and print results

function formatNumber(number) {
    if (number.toString().length > 12) {
        return number.toExponential(6); // Convert to scientific notation
    } else {
        return parseFloat(number.toFixed(12)).toString(); // Round to 12 digits
    }
}

function calculateResult() {
    if (inputSet.length < 2) return; 

    let newNumber = outputText.textContent;
    inputSet.push(newNumber);
    const [firstValue, operator, secondValue] = inputSet;
    let result;
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

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
            result = num1 / num2;
            break;
        default:
            result = 'Error';
    }

    outputText.textContent = formatNumber(result);
    inputSet.length = 0;
}

// Event listener for keyboard input

function simulateButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.click();
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

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
        'Enter': 'equals',
        '.': 'decimal',
        'Backspace': 'AC'  
    };

    if (keyMap[key] !== undefined) {
        simulateButtonClick(keyMap[key]);
    }
});


